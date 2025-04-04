import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-20 left-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-[#ff5a36] bg-opacity-20 mb-8 relative">
          <Image 
            src="/profile.png" 
            alt="Chris Fiorino" 
            fill
            sizes="160px"
            className="object-cover rounded-full"
            priority
          />
        </div>
        
        {/* Bio */}
        <div className="mb-12 text-lg">
          <p className="mb-4">
            Hello! I am passionate about technology and helping customers. 
            I&apos;ve been in customer facing roles for over 15 years and within technical customer success roles for over 11 years. 
          </p>
          <p className="mb-4">
            I was last at HUMAN Security, initially as a Customer Success Engineer at PerimeterX as their first CS hire. 
            Eventually, through multiple promotions, I became the Sr Dir of Technical Account Management with a portfolio of over $65 mil
            in ARR. During this time, I built out functions and led the team through significant growth and organizational transitions, 
            including merging with HUMAN Security. 
          </p>
          <p>
            I am seeking a leadership role in Customer Success to lead high-performing teams, accelerate adoption and value realization, and deliver exceptional customer outcomes.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="relative rounded-xl p-8 group">
          {/* Gradient border effect - same as other cards */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute inset-[2px] rounded-xl bg-[#121212]"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="flex flex-col items-center gap-4">
              <a href="mailto:chris.fiorino@gmail.com" className="flex items-center gap-2 hover:text-[#ff5a36] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                chris.fiorino@gmail.com
              </a>
              <a href="https://github.com/chrisfio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff5a36] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/chrisfio
              </a>
              <a href="https://linkedin.com/in/cfio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff5a36] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/cfio
              </a>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="py-6 mt-6">
          <Link 
            href="/work" 
            className="px-6 py-3 rounded-lg border border-white border-opacity-30 bg-transparent text-white font-medium hover-subtle transition-all mr-4"
          >
            View My Work
          </Link>
          <Link 
            href="/projects" 
            className="px-6 py-3 rounded-lg gradient-bg font-medium hover:opacity-90 transition-all"
          >
            See My Projects
          </Link>
        </div>
      </div>
    </div>
  );
} 