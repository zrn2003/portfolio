import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-14 bg-white dark:bg-[#0d0e12] relative overflow-hidden border-t-2 border-black dark:border-zinc-800 transition-colors duration-200">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-8 max-w-4xl mx-auto">
          {/* Quick social & contact buttons */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="https://github.com/zrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 sm:h-11 px-3 sm:px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center justify-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#00FF66] hover:text-black dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.12)] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/zishanrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 sm:h-11 px-3 sm:px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center justify-center gap-2 text-black dark:text-zinc-100 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.12)] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:zishanrn2003@gmail.com"
              className="h-9 sm:h-11 px-3 sm:px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center justify-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#00FF66] hover:text-black dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.12)] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+919371797604"
              className="h-9 sm:h-11 px-3 sm:px-4 bg-[#f0f0f0] dark:bg-[#181920] border-2 border-black dark:border-zinc-700 flex items-center justify-center gap-2 text-black dark:text-zinc-100 hover:bg-[#ffff00] dark:hover:bg-[#00FF66] hover:text-black dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.12)] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call</span>
            </a>
          </div>

          {/* Main Footer Card */}
          <div className="w-full text-center bg-white dark:bg-[#15161c] border-2 border-black dark:border-zinc-700 p-4 sm:p-8 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">
            <p className="font-mono text-xl sm:text-2xl font-black text-black dark:text-white tracking-wider uppercase mb-1">
              Zishan Nadaf
            </p>
            <p className="font-mono text-[11px] sm:text-sm font-bold uppercase text-black/80 dark:text-zinc-300 tracking-wide mb-2 sm:mb-3">
              Full Stack Developer · AI/ML Engineer · Cybersecurity Researcher
            </p>
            <p className="text-[10px] sm:text-xs font-mono font-medium text-black/70 dark:text-zinc-400 mb-3 sm:mb-4">
              Pune, Maharashtra, India · Available for Full-Time, Freelance & Remote Opportunities
            </p>
            <div className="w-full h-px bg-black dark:bg-zinc-800 mb-3 sm:mb-4"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-bold font-mono text-black dark:text-zinc-300 gap-2">
              <span className="bg-[#ffff00] text-black font-black px-1.5 py-0.5 border border-black dark:border-none dark:bg-transparent dark:text-[#00ff88]">zishannadaf.dev</span>
              <span>© {new Date().getFullYear()} Zishan Nadaf · Built with precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
