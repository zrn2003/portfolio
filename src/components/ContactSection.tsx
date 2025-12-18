import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { supabase } from '@/integrations/supabase/client';

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
    { icon: Phone, label: 'Phone', value: '+91 9371797604', href: 'tel:+919371797604' },
    { icon: MapPin, label: 'Location', value: 'Pandharpur, Maharashtra', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/50">
      <div className="container px-6">
        <div 
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-subheading">Contact</p>
            <h2 className="section-heading">Let's Work Together</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind? I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="card-elevated p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div className="card-elevated p-5">
                <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/zrn2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/zishanrn2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
