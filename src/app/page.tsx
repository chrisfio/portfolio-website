import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-20 right-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Chris Fiorino</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-[#a0a0a0] mb-8">
            Technical professional with extensive experience in customer success, technical account management, and cross-functional collaboration. Proven ability to lead teams, develop strategic plans, and drive product adoption.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/work" 
              className="px-6 py-3 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 rounded-lg border border-white border-opacity-30 bg-transparent text-white font-medium hover:text-[#121212] hover:bg-white transition-all"
            >
              About Me
            </Link>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
              <h3 className="text-xl font-semibold mb-2">Company Name</h3>
              <p className="text-[#a0a0a0] mb-4">Senior Frontend Developer • 2021-Present</p>
              <p>Led development of responsive web applications using React and Next.js.</p>
              <Link href="/work" className="text-sm text-[#ff5a36] mt-4 inline-block hover:underline">
                View details →
              </Link>
            </div>
            <div className="bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
              <h3 className="text-xl font-semibold mb-2">EarliBirdi</h3>
              <p className="text-[#a0a0a0] mb-4">Side Project • 2023</p>
              <p>A tool for golfers to get prime tee times.</p>
              <Link href="/projects" className="text-sm text-[#ff5a36] mt-4 inline-block hover:underline">
                View details →
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/work" className="text-sm underline underline-offset-4 hover:text-[#ff5a36] transition-all">
              View all work experience →
            </Link>
          </div>
        </section>
        
        {/* About Section Preview */}
        <section>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-white bg-opacity-5 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-[#ff5a36] bg-opacity-20 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <span className="text-4xl">CF</span>
            </div>
            <div>
              <p className="text-lg mb-4">
                I'm a passionate developer with expertise in building modern web applications.
                I focus on creating clean, efficient, and user-friendly experiences.
              </p>
              <Link href="/about" className="text-sm text-[#ff5a36] hover:underline">
                Read more about me →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
