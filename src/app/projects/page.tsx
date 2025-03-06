import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  // Project data
  const projects = [
    {
      id: 'earlibirdi',
      title: 'EarliBirdi',
      description: 'A tool for golfers to get prime tee times. Automatically books tee times when they become available.',
      tags: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
      link: 'https://earlibirdi.com',
      imageUrl: '/placeholder-project.jpg', // Add a placeholder image to your public folder
      year: '2023'
    },
    // Add more projects as needed
    {
      id: 'project-2',
      title: 'Project Two',
      description: 'A placeholder for your next amazing project.',
      tags: ['React', 'TypeScript', 'Firebase'],
      link: '#',
      imageUrl: '/placeholder-project.jpg',
      year: '2022'
    },
  ];

  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-0 left-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-[#a0a0a0] mb-12 max-w-2xl">
          A collection of my personal and professional projects. Each one represents a unique challenge and learning experience.
        </p>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white bg-opacity-5 rounded-xl overflow-hidden hover:bg-opacity-10 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-black bg-opacity-50 relative">
                  {/* Project image or placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#ff5a36]/30 to-[#ff8c42]/30">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <span className="text-sm text-[#a0a0a0]">{project.year}</span>
                  </div>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all text-sm"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 