export default function Contact() {
  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-20 right-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h1>
        
        <div className="relative rounded-xl p-8 group">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute inset-[2px] rounded-xl bg-[#121212]"></div>
          <div className="relative">
            <p className="text-center mb-8 text-white">
              I&apos;m currently open to new opportunities and collaborations. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="mailto:chris.fiorino@gmail.com" 
                className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#222222] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[#ff5a36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-medium text-white">Email</span>
                <span className="text-sm text-[#a0a0a0]">chris.fiorino@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/cfio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#222222] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[#ff5a36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-lg font-medium text-white">LinkedIn</span>
                <span className="text-sm text-[#a0a0a0]">Connect with me</span>
              </a>
              
              <a 
                href="https://github.com/chrisfio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#222222] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[#ff5a36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-lg font-medium text-white">GitHub</span>
                <span className="text-sm text-[#a0a0a0]">See my code</span>
              </a>
              
              <a 
                href="https://x.com/Chris_Fiorino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#222222] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[#ff5a36]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-lg font-medium text-white">X</span>
                <span className="text-sm text-[#a0a0a0]">Follow me</span>
                <span className="text-sm text-[#a0a0a0]">(I don&apos;t post much)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 