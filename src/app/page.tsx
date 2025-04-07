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
            Hi, I&apos;m <span className="gradient-text">Chris Fiorino</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-[#a0a0a0] mb-8">
          Customer Success and Technical Account Management leader with deep experience in SaaS, cybersecurity, and startup environments. Proven track record from founding CSE roles to directing teams managing $65M+ ARR. Highly skilled in strategic planning, cross-functional leadership, and solving complex technical challenges. 
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
              className="px-6 py-3 rounded-lg border border-white border-opacity-30 bg-transparent text-white font-medium hover-subtle transition-all"
            >
              About Me
            </Link>
            <a 
              href="/chris-fiorino-resume.pdf" 
              download
              className="px-6 py-3 rounded-lg border border-[#ff5a36] text-[#ff5a36] font-medium hover:bg-[#ff5a36] hover:text-white transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl p-6 group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-[2px] rounded-xl bg-[#121212]"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">HUMAN Security • <span className="font-normal">2018-2025</span></h3>
                <p className="text-[#a0a0a0] mb-4">Senior Director of Technical Account Management</p>
                <p>Led customer success team managing $65M in ARR, beating churn goals through strategic leadership and oversight.</p>
                <Link href="/work" className="text-sm text-[#ff5a36] mt-4 inline-block hover:underline">
                  View details →
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl p-6 group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-[2px] rounded-xl bg-[#121212]"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">EarliBirdi • <span className="font-normal">2025</span></h3>
                <p className="text-[#a0a0a0] mb-4">Side Project • </p>
                <p>EarliBirdi takes a common pain point for busy golfers — prime tee times are all booked, requiring golfers to constantly refresh tee sheets to find their ideal playing times—and solves it with an automated, alert system.</p>
                <Link href="/projects" className="text-sm text-[#ff5a36] mt-4 inline-block hover:underline">
                  View details →
                </Link>
              </div>
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
          <div className="relative rounded-xl p-8 group">
            {/* Gradient border effect - same as featured work cards */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-[2px] rounded-xl bg-[#121212]"></div>
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-[#ff5a36] bg-opacity-20 relative">
                <Image 
                  src="/profile.png" 
                  alt="Chris Fiorino" 
                  fill
                  sizes="160px"
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                I am passionate about technology and helping customers. 
                I&apos;ve been in customer facing roles for over 15 years and within technical customer success roles for over 11 years.
                </p>
                <Link href="/about" className="text-sm text-[#ff5a36] hover:underline">
                  Read more about me →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
