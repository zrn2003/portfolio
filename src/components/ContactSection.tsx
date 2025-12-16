import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
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
      value: '+91 9371797604',
      href: 'tel:+919371797604',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pandharpur, Maharashtra, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Get In Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass-card p-6 flex items-center gap-4 hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/zrn2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/zishanrn2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="w-full btn-cyber flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;
