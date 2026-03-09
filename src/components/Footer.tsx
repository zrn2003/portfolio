import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Subtle border and background glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-5">
            <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:zishanrn2003@gmail.com" className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="font-sora text-xl font-bold text-foreground drop-shadow-sm flex items-baseline justify-center">
              Zishan Nadaf<span className="text-primary font-medium leading-none ml-0.5">.</span>
            </p>
            <p className="text-sm font-medium text-muted-foreground mt-2">
              © {new Date().getFullYear()} Zishan Nadaf. Crafted with ambition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
