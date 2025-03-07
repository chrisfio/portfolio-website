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
              className="px-6 py-3 rounded-lg border border-white border-opacity-30 bg-transparent text-white font-medium hover-subtle transition-all"
            >
              About Me
            </Link>
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
                <h3 className="text-xl font-semibold mb-2">HUMAN Security</h3>
                <p className="text-[#a0a0a0] mb-4">Senior Director of Technical Account Management • 2018-2025</p>
                <p>Led customer success team managing $65M in ARR, beating churn goals through strategic oversight.</p>
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
                <h3 className="text-xl font-semibold mb-2">EarliBirdi</h3>
                <p className="text-[#a0a0a0] mb-4">Side Project • 2025</p>
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
