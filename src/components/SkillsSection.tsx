const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'TensorFlow', level: 75 },
      ],
    },
    {
      title: 'Data & AI',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Pandas/NumPy', level: 85 },
        { name: 'Data Visualization', level: 80 },
        { name: 'CNN Models', level: 75 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Selenium', level: 70 },
        { name: 'SQL Server', level: 85 },
      ],
    },
  ];

  const certifications = [
    'Cloud Architecture (Google Cloud)',
    'Introduction to Cybersecurity (Cisco)',
    'Generative AI (Microsoft & LinkedIn)',
    'Advanced Software Engineering (Walmart)',
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">Skills</p>
            <h2 className="section-heading">Technical Expertise</h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div key={category.title} className="card-elevated p-6">
                <h3 className="font-sora font-semibold text-lg mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
