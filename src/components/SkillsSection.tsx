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
    <section id="skills" className="py-24 md:py-32 bg-white overflow-hidden border-t-2 border-b-2 border-black">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="mb-16">
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Skills</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black uppercase tracking-wider">Technical Expertise</h2>
          </div>

          {/* Marquee Strip */}
          <div className="relative flex overflow-hidden group mb-16 py-8 border-y-2 border-black bg-[#f0f0f0] shadow-[inset_0_4px_4px_rgba(0,0,0,0.05),inset_0_-4px_4px_rgba(0,0,0,0.05)]">
            <div className="animate-marquee flex items-center min-w-max group-hover:[animation-play-state:paused]">
              {[...allSkills, ...allSkills].map((skill, index) => (
                <div key={`skill-${index}`} className="flex-shrink-0 mx-8 md:mx-12 flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-12 h-12 text-black transition-colors duration-300" />
                  <span className="text-xs font-bold font-mono text-black uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Edge Gradients removed for neo-brutalism */}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono font-bold text-xl mb-6 text-black uppercase tracking-wider">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-white border-2 border-black text-sm font-bold text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-default"
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
