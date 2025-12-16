const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      title: 'Full-Stack Development',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'API Development', level: 82 },
        { name: 'SQL Server', level: 85 },
      ],
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'CNN Models', level: 75 },
        { name: 'Pandas/NumPy', level: 85 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Random Forest', level: 78 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Selenium', level: 70 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'Manual Testing', level: 80 },
      ],
    },
  ];

  const certifications = [
    'Cloud Architecture (Google Cloud)',
    'Introduction to Cybersecurity (Cisco)',
    'Generative AI (Microsoft & LinkedIn)',
    'Advanced Software Engineering (Walmart)',
    'Data Science (TeachNook)',
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Skills & Expertise</p>
          <h2 className="section-title">Technical Arsenal</h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6"
            >
              <h3 className="font-orbitron text-xl font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-orbitron text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card p-8">
          <h3 className="font-orbitron text-xl font-semibold mb-6 text-center text-gradient">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <span
                key={cert}
                className="px-4 py-2 bg-gradient-cyber border border-primary/20 rounded-lg text-sm text-foreground hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-5 pointer-events-none" />
    </section>
  );
};

export default SkillsSection;
