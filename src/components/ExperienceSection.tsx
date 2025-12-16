import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Trainee Developer',
      company: 'Rezoomex IT Product & Services',
      location: 'Pune, Maharashtra',
      period: 'Aug 2025 – Sep 2025',
      description: [
        'Gained foundational expertise in Software Development Lifecycle (SDLC), contributing to application design, development, and maintenance',
        'Enhanced application quality by writing clean, efficient code and implementing optimization techniques',
        'Acquired hands-on experience in Front-End Web Development, SQL database management, and Automation Testing frameworks',
      ],
      color: 'primary',
    },
    {
      title: 'Student Intern - Data Science & Analytics',
      company: 'TeachNook — E-Learning Platform',
      location: 'Bengaluru, Karnataka',
      period: 'Apr 2024 – May 2024',
      description: [
        'Analyzed bank marketing campaign data using Python, Pandas, and SQL Server to predict customer response rates',
        'Engineered critical features using NumPy for data preparation, cleaning, and visualization within Jupyter Notebook',
        'Implemented Random Forest Classifier achieving high prediction accuracy for actionable business insights',
      ],
      color: 'secondary',
    },
    {
      title: 'Web Development Intern',
      company: 'Lead Soft',
      location: 'Remote',
      period: '2024',
      description: [
        'Designed and implemented SQL-based backend systems, improving data validation and ensuring 100% data accuracy',
        'Built dynamic data-driven web interfaces, boosting operational efficiency by 20% through process automation',
        'Collaborated with cross-functional teams to streamline workflows and reduce manual processing time by 15%',
      ],
      color: 'primary',
    },
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className={`glass-card p-6 hover-lift ${exp.color === 'secondary' ? 'border-secondary/30 hover:border-secondary' : ''}`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className={`w-4 h-4 ${exp.color === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                    <h3 className={`font-orbitron font-semibold ${exp.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                      {exp.title}
                    </h3>
                  </div>
                  
                  <p className="font-semibold text-foreground mb-2">{exp.company}</p>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`${exp.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for timeline */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ExperienceSection;
