import useScrollAnimation from '@/hooks/use-scroll-animation';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiGit,
  SiGithub, SiGooglecloud, SiSelenium, SiMysql, SiHtml5
} from 'react-icons/si';
import { FaJava, FaDatabase, FaCss3Alt } from 'react-icons/fa';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const allSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'ReactJS', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Machine Learning', icon: SiScikitlearn },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Google Cloud', icon: SiGooglecloud },
    { name: 'Selenium', icon: SiSelenium },
    { name: 'SQL Server', icon: FaDatabase },
    { name: 'MySQL', icon: SiMysql },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
  ];

  const certifications = [
    'Cloud Architecture (Google Cloud)',
    'Introduction to Cybersecurity (Cisco)',
    'Generative AI (Microsoft & LinkedIn)',
    'Advanced Software Engineering (Walmart)',
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50 overflow-hidden">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="mb-16">
            <p className="section-subheading">Skills</p>
            <h2 className="section-heading">Technical Expertise</h2>
          </div>

          {/* Marquee Strip */}
          <div className="relative flex overflow-hidden group mb-16 py-8">
            <div className="animate-marquee flex items-center min-w-max group-hover:[animation-play-state:paused]">
              {[...allSkills, ...allSkills].map((skill, index) => (
                <div key={`skill-${index}`} className="flex-shrink-0 mx-8 md:mx-12 flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  <span className="text-xs font-medium text-muted-foreground/80 lowercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Edge Gradients for smooth fading effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-6 text-foreground">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
