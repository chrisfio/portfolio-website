export default function Work() {
  // Work experience data
  const experiences = [
    {
      id: 'job-1',
      title: 'Senior Frontend Developer',
      company: 'Company Name',
      period: 'Jan 2021 - Present',
      description: [
        'Led development of responsive web applications using React and Next.js',
        'Implemented CI/CD pipelines and improved build performance by 40%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'job-2',
      title: 'Frontend Developer',
      company: 'Previous Company',
      period: 'Mar 2018 - Dec 2020',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Optimized application performance and accessibility'
      ],
      technologies: ['JavaScript', 'React', 'CSS/SCSS', 'Redux']
    },
    // Add more experiences as needed
  ];

  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-0 right-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1>
        <p className="text-xl text-[#a0a0a0] mb-12">
          My professional journey and the companies I've had the pleasure to work with.
        </p>
        
        <div className="space-y-12">
          {experiences.map((job) => (
            <div key={job.id} className="relative">
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full gradient-bg"></div>
              <div className="absolute left-1.5 top-4 w-0.5 h-full bg-white bg-opacity-10"></div>
              
              <div className="ml-8 pb-8">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                  <span className="text-[#ff5a36]">{job.company}</span>
                  <span className="hidden sm:inline text-[#a0a0a0]">•</span>
                  <span className="text-[#a0a0a0]">{job.period}</span>
                </div>
                
                <ul className="list-disc list-outside ml-5 mb-4 space-y-2 text-[#a0a0a0]">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 