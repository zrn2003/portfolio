import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_KEY_HERE') {
        throw new Error('Web3Forms Access Key is missing or invalid.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message via Web3Forms');
      }

      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error(`Error: ${error.message || 'Failed to send. Check console.'}`);
      
      // Fallback to mailto if it fails
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:zishanrn2003@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'zishanrn2003@gmail.com', href: 'mailto:zishanrn2003@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden border-t-2 border-b-2 border-black">
      <div className="container px-6 relative z-10">
        <div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold font-mono tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-6 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-4 h-4" /> Connect
            </div>
            <h2 className="font-mono text-4xl md:text-5xl md:text-6xl font-black uppercase text-black">Let's Work Together</h2>
            <p className="text-black font-bold mt-6 text-lg max-w-xl mx-auto leading-relaxed">
              Have a visionary project in mind? Reach out and let's turn your concept into an intelligent, scalable reality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="bg-white border-2 border-black p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all block group"
                  >
                    <div className="w-16 h-16 bg-[#f0f0f0] flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <item.icon className="w-8 h-8 text-black" />
                    </div>

                    <div className="mt-4 sm:mt-0 text-center sm:text-left">
                      <p className="text-sm text-black font-bold font-mono uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl text-black font-bold">{item.value}</p>
                    </div>
                  </a>
                </div>
              ))}

              {/* Social Links Sub-Card */}
              <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-black font-mono font-bold uppercase text-lg">Connect on social</p>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <a
                      href="https://github.com/zrn2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-black font-mono font-bold uppercase text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/zishanrn2003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-black font-mono font-bold uppercase text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
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
              <div className="bg-white border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold font-mono text-black mb-2 uppercase tracking-wide">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-white border-2 border-black p-4 text-black font-bold placeholder-black/50 focus:outline-none focus:ring-4 focus:ring-[#ffff00] transition-all"
                        placeholder="YOUR NAME"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold font-mono text-black mb-2 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-white border-2 border-black p-4 text-black font-bold placeholder-black/50 focus:outline-none focus:ring-4 focus:ring-[#ffff00] transition-all"
                        placeholder="YOU@DOMAIN.COM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold font-mono text-black mb-2 uppercase tracking-wide">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        className="w-full bg-white border-2 border-black p-4 text-black font-bold placeholder-black/50 focus:outline-none focus:ring-4 focus:ring-[#ffff00] transition-all resize-none"
                        placeholder="HOW CAN WE HELP EACH OTHER?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white font-mono font-bold uppercase px-8 py-4 border-2 border-black hover:bg-white hover:text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all disabled:opacity-50"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span className="text-xl">
                        {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
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
