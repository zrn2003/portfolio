import { GraduationCap } from 'lucide-react';

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
      degree: 'Higher Secondary Certificate',
      field: 'CBSE Board',
      institution: 'Sinhgad Public School, Kamlapur',
      period: '2021 – 2022',
      grade: '62.0%',
      current: false,
    },
    {
      degree: 'Secondary School Certificate',
      field: '',
      institution: 'Sangola Vidyamandir Prashala, Sangola',
      period: '2019 – 2020',
      grade: '',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">Education</p>
            <h2 className="section-heading">Academic Background</h2>
          </div>

          {/* Education cards */}
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.institution} className="card-elevated p-6">
                <div className="flex gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    edu.current ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <GraduationCap className={`w-6 h-6 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-sora font-semibold text-foreground">{edu.degree}</h3>
                        {edu.field && <p className="text-sm text-primary">{edu.field}</p>}
                      </div>
                      {edu.current && (
                        <span className="badge">Current</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      {edu.grade && <span className="text-primary font-medium">{edu.grade}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
