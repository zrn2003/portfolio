import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'SKN Sinhgad College of Engineering, Pandharpur',
      period: '2022 – 2026',
      grade: 'CGPA: 8.28/10',
      current: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'CBSE Board',
      institution: 'Sinhgad Public School, Kamlapur',
      period: '2021 – 2022',
      grade: 'Percentage: 62.0%',
      current: false,
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: '',
      institution: 'Sangola Vidyamandir Prashala, Sangola',
      period: '2019 – 2020',
      grade: '',
      current: false,
    },
  ];

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`glass-card p-6 hover-lift ${edu.current ? 'border-primary/30' : ''}`}
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                  edu.current 
                    ? 'bg-primary/10 border border-primary/30' 
                    : 'bg-muted border border-border'
                }`}>
                  <GraduationCap className={`w-7 h-7 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-orbitron font-semibold text-foreground">{edu.degree}</h3>
                      {edu.field && <p className="text-primary text-sm">{edu.field}</p>}
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    {edu.grade && (
                      <span className="flex items-center gap-1 text-primary">
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default EducationSection;
