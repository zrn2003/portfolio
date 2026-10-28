import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { toast } from 'sonner';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      
      window.location.href = `mailto:zishanrn2003@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success('Opening your email client...');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error generating email:', error);
      toast.error('Failed to open email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zishanrn2003@gmail.com',
      href: 'mailto:zishanrn2003@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93717 97604',
      href: 'tel:+919371797604',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
    },
    {
      icon: Globe,
      label: 'Portfolio Domain',
      value: 'zishannadaf.dev',
      href: 'https://zishannadaf.dev',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 relative overflow-hidden border-t-2 border-b-2 border-black dark:border-zinc-700 bg-white dark:bg-[#0c0d10]">
      <div className="container px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-14 md:mb-20"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold font-mono tracking-widest text-black border-2 border-black dark:border-[#00FF66] bg-[#ffff00] dark:bg-[#00FF66] uppercase mb-3 sm:mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Get in Touch
            </div>
            <h2 className="font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black dark:text-white">Let's Work Together</h2>
            <p className="text-black dark:text-zinc-300 font-bold mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Available for <span className="bg-[#ffff00] dark:bg-[#00FF66] text-black px-1 border border-black font-mono">Full-time roles · Freelance · Remote</span>. Reach out to discuss software engineering, AI/ML, or security research.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
            {/* Contact info list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-3 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all block group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffff00] dark:bg-[#00FF66] flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs text-black/80 dark:text-zinc-400 font-bold font-mono uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-xs sm:text-base md:text-lg text-black dark:text-white font-mono font-bold break-all">{item.value}</p>
                    </div>

                    {item.external && (
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-400 flex-shrink-0" />
                    )}
                  </a>
                </div>
              ))}

              {/* Social Links Sub-Card */}
              <div className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-4 sm:p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] mt-4 sm:mt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <p className="text-black dark:text-white font-mono font-bold uppercase text-xs sm:text-base">Find Me On Socials</p>
                  <div className="flex gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <a
                      href="https://github.com/zrn2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 font-mono font-bold uppercase text-[11px] sm:text-xs text-black dark:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white dark:hover:bg-[#00FF66] dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/zishanrn2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 font-mono font-bold uppercase text-[11px] sm:text-xs text-black dark:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-4 sm:p-8 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,0.8)] flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold font-mono text-black dark:text-white mb-1 uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-2.5 sm:p-3 text-xs sm:text-sm text-black dark:text-white font-bold placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffff00] dark:focus:ring-[#00FF66] transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold font-mono text-black dark:text-white mb-1 uppercase tracking-wide">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-2.5 sm:p-3 text-xs sm:text-sm text-black dark:text-white font-bold placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffff00] dark:focus:ring-[#00FF66] transition-all"
                      placeholder="you@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold font-mono text-black dark:text-white mb-1 uppercase tracking-wide">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={3}
                      className="w-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-2.5 sm:p-3 text-xs sm:text-sm text-black dark:text-white font-bold placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffff00] dark:focus:ring-[#00FF66] transition-all resize-none"
                      placeholder="Let's build something remarkable..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ffff00] dark:bg-[#00FF66] text-black dark:text-black font-mono font-bold uppercase px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span className="text-xs sm:text-sm">
                        {isSubmitting ? 'TRANSMITTING...' : 'SEND INQUIRY'}
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
