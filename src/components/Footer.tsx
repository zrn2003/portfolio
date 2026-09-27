import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-14 bg-white dark:bg-[#0d0e12] relative overflow-hidden border-t-2 border-black dark:border-zinc-800 transition-colors duration-200">
      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
          {/* Quick social & contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/zrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#ffff00] hover:text-black dark:hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/zishanrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-zinc-100 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:zishanrn2003@gmail.com"
              className="h-11 px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#ffff00] hover:text-black dark:hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+919371797604"
              className="h-11 px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#ffff00] hover:text-black dark:hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
            >
              <Phone className="w-4 h-4" />
              <span>+91 93717 97604</span>
            </a>
          </div>

          {/* Main Footer Card */}
          <div className="w-full text-center bg-white dark:bg-[#15161c] border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">
            <p className="font-mono text-2xl font-black text-black dark:text-white tracking-wider uppercase mb-1">
              Zishan Nadaf
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase text-black/80 dark:text-zinc-300 tracking-wide mb-3">
              Full Stack Developer · AI/ML Engineer · Cybersecurity Researcher
            </p>
            <p className="text-xs font-mono font-medium text-black/70 dark:text-zinc-400 mb-4">
              Pune, Maharashtra, India · Available for Full-Time, Freelance & Remote Opportunities
            </p>
            <div className="w-full h-px bg-black dark:bg-zinc-800 mb-4"></div>
            <div className="flex flex-wrap items-center justify-between text-xs font-bold font-mono text-black dark:text-zinc-300 gap-2">
              <span className="text-[#00aa55] dark:text-[#00ff88]">zishannadaf.dev</span>
              <span>© {new Date().getFullYear()} Zishan Nadaf · Built with precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
