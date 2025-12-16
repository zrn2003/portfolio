import { MapPin } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Trainee Developer',
      company: 'Rezoomex IT Product & Services',
      location: 'Pune, Maharashtra',
      period: 'Aug 2025 – Sep 2025',
      points: [
        'Gained expertise in SDLC, contributing to application design and development',
        'Enhanced application quality through clean code and optimization techniques',
        'Hands-on experience in Front-End Development, SQL, and Automation Testing',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'TeachNook — E-Learning Platform',
      location: 'Bengaluru, Karnataka',
      period: 'Apr 2024 – May 2024',
      points: [
        'Analyzed marketing data using Python, Pandas, and SQL Server',
        'Engineered features using NumPy for data preparation and visualization',
        'Implemented Random Forest Classifier with high prediction accuracy',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Lead Soft',
      location: 'Remote',
      period: '2024',
      points: [
        'Designed SQL-based backend systems ensuring 100% data accuracy',
        'Built data-driven interfaces, boosting efficiency by 20%',
        'Reduced manual processing time by 15% through workflow optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">Experience</p>
            <h2 className="section-heading">Professional Journey</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title} 
                  className="relative pl-10"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 timeline-dot" />

                  <div className="card-elevated p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-sora font-semibold text-lg text-foreground">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
