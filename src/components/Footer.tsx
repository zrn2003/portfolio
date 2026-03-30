import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white relative overflow-hidden border-t-2 border-black">
      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-6">
            <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#f0f0f0] border-2 border-black flex items-center justify-center text-black hover:bg-[#ffff00] hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#f0f0f0] border-2 border-black flex items-center justify-center text-black hover:bg-[#0A66C2] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:zishanrn2003@gmail.com" className="w-12 h-12 bg-[#f0f0f0] border-2 border-black flex items-center justify-center text-black hover:bg-[#ffff00] hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center bg-white border-2 border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <p className="font-mono text-xl font-black text-black tracking-wider">
              Zishan Nadaf
            </p>
            <p className="text-sm font-bold font-mono text-black mt-2 uppercase">
              © {new Date().getFullYear()} Zishan Nadaf. Crafted with ambition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
