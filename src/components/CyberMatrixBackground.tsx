import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const CyberMatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Only render full matrix rain in dark mode
    if (resolvedTheme === 'light') {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 24; // Smooth, battery-friendly ambient framerate
    const interval = 1000 / fps;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01011001<>{}/*$#@!';
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        // Random initial vertical position so it doesn't all start from the top simultaneously
        drops[i] = Math.floor(Math.random() * -100);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (document.hidden) return; // Pause when tab is hidden

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Fade canvas slowly to create phosphor trail effect
      ctx.fillStyle = 'rgba(11, 15, 25, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only draw every 2nd column for a cleaner, non-cluttered aesthetic
        if (i % 2 !== 0) continue;

        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of stream has a bright cyber cyan/white glow, tail is terminal neon green
        if (Math.random() > 0.88) {
          ctx.fillStyle = '#00F0FF'; // Cyber Cyan accent
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff'; // White spark
        } else {
          ctx.fillStyle = 'rgba(0, 255, 102, 0.65)'; // Terminal Green
        }

        if (y > 0 && y < canvas.height) {
          ctx.fillText(text, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25 dark:opacity-20 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};

export default CyberMatrixBackground;
