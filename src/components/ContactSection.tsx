import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'zishanrn2003@gmail.com', href: 'mailto:zishanrn2003@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

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
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              <Sparkles className="w-4 h-4" /> Connect
            </div>
            <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground drop-shadow-md">Let's Work Together</h2>
            <p className="text-muted-foreground mt-6 text-lg max-w-xl mx-auto leading-relaxed">
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
                <Tilt key={item.label} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="transform-gpu" glareEnable={true} glareMaxOpacity={0.15} glareBorderRadius="1rem">
                  <a
                    href={item.href}
                    className="rounded-2xl border border-white/5 bg-background/40 backdrop-blur-xl p-6 flex items-center gap-5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 shadow-lg block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_hsl(var(--primary)/0.1)] relative z-10">
                      <item.icon className="w-6 h-6 text-primary drop-shadow-sm" />
                    </div>

                    <div className="relative z-10">
                      <p className="text-sm text-primary/80 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-lg text-foreground font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                </Tilt>
              ))}

              {/* Social Links Sub-Card */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000} className="transform-gpu mt-8" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                <div className="rounded-2xl border border-white/5 bg-background/40 backdrop-blur-xl p-6 relative overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 opacity-50" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-foreground font-semibold">Connect on social</p>
                    <div className="flex gap-4 w-full sm:w-auto">
                      <a
                        href="https://github.com/zrn2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-background/80 border border-border/50 rounded-xl text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:-translate-y-1"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/zishanrn2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-background/80 border border-border/50 rounded-xl text-sm font-semibold text-foreground hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] hover:-translate-y-1"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1.5rem">
                <div className="h-full rounded-3xl border border-white/10 bg-card/60 backdrop-blur-2xl p-8 md:p-10 relative overflow-hidden shadow-2xl flex flex-col justify-center">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                          placeholder="you@domain.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wide">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={4}
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="How can we help each other?"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden rounded-xl bg-primary text-primary-foreground font-bold px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                      <div className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        )}
                        <span className="text-lg">
                          {isSubmitting ? 'Transmitting...' : 'Send Message'}
                        </span>
                      </div>
                    </button>
                  </form>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
