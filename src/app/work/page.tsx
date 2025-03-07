export default function Work() {
  // Work experience data
  const experiences = [
    {
      id: "human",
      company: "HUMAN (formerly PerimeterX)",
      period: "Apr 2018 - Feb 2025",
      roles: [
        {
          title: "Senior Director of Technical Account Management",
          period: "Apr 2024 - Feb 2025",
          description: [
            "Oversaw a $65M ARR customer base, reducing churn by exceeding targets in Q2–Q4 2024 through strategic account management and risk mitigation.",
            "Assumed leadership of a 10-person customer success team, introducing Gong for call analytics, streamlining Salesforce processes, and initiating JIRA Service Manager integration—improving team efficiency and response times."
          ],
          skills: ["Gong", "JIRA Service Manager", "Salesforce", "Team Leadership", "Strategic Planning", "Risk Management"]
        },
        {
          title: "Director of Customer Success",
          period: "Jan 2022 - Apr 2024",
          description: [
            "Expanded oversight to include full Customer Success team, driving team growth and product adoption. Responsible for approximately $35 million in ARR.",
            "Led team and customer base during post-merger integration with HUMAN beginning in Aug 2022, ensuring continuity and high satisfaction.",
            "Developed internal processes and customer engagement strategies",
            "Executed strategic account plans to increase product adoption and maximize revenue"
          ],
          skills: ["Customer Success", "Post-Merger Integration", "Strategic Planning", "Revenue Management"]
        },
        {
          title: "Manager, Customer Success Engineering",
          period: "Jul 2020 - Jan 2022",
          description: [
            "Built and led a team of seven customer success engineers and managers",
            "Acted as escalation point for critical issues, resolving complex challenges efficiently",
            "Developed strategic account plans focused on enhancing product adoption, retention, and CS identified expansion opportunities"
          ],
          skills: ["Team Building", "Technical Problem Solving", "Strategic Planning"]
        },
        {
          title: "Senior Customer Success Engineer",
          period: "Aug 2019 - Jul 2020",
          description: [
            "Created and owned the company\"s first Professional Services offering (Sneaker and Hype Sale Protection), identifying market needs and delivering solutions. Generating over $1 million in additional ARR.",
            "Authored blogs and webinars to educate customers on product features and industry trends."
          ],
          skills: ["Professional Services", "Content Creation", "Technical Writing"]
        },
        {
          title: "Customer Success Engineer",
          period: "Apr 2018 - Aug 2019",
          description: [
            "Owned key customer relationships, aligning product roadmaps with customer needs",
            "Analyzed usage data to identify trends and opportunities, informing product strategy"
          ],
          skills: ["Customer Relationship Management", "Data Analysis", "Product Strategy"]
        }
      ]
    },
    {
      id: "analytixbar",
      company: "AnalytixBar LLC",
      period: "Oct 2017 - Apr 2018",
      roles: [
        {
          title: "Freelance Web Developer",
          period: "Oct 2017 - Apr 2018",
          description: [
            "Developed custom web and mobile app solutions for clients"
          ],
          skills: ["Web Development", "CSS", "JavaScript", "JQuery"]
        }
      ]
    },
    {
      id: "exponential",
      company: "Exponential Interactive",
      period: "2013 - 2017",
      roles: [
        {
          title: "Sr. Publisher Development Manager (Customer Success)",
          period: "Apr 2016 - Sept 2017",
          description: [
            "Managed key publisher relationships and ensured customer satisfaction",
            "Developed strategies to increase publisher revenue and engagement"
          ],
          skills: ["Customer Success", "Relationship Management", "Revenue Optimization"]
        },
        {
          title: "Publisher Delivery Manager (Customer Success)",
          period: "May 2013 - Apr 2016",
          description: [
            "Supported publishers in implementing and optimizing ad solutions",
            "Troubleshot technical issues and ensured smooth delivery of services"
          ],
          skills: ["Technical Support", "Implementation", "Problem Solving"]
        }
      ]
    },
    {
      id: "morgan-stanley",
      company: "Morgan Stanley",
      period: "Apr 2011 – May 2013",
      roles: [
        {
          title: "Analyst I -> III (Securities Based Lending)",
          period: "Apr 2011 – May 2013",
          description: [
            "Progressed from Analyst I to Analyst III within the Securities Based Lending department",
            "Managed lending operations and client relationships"
          ],
          skills: ["Financial Analysis", "Client Relationship Management", "Securities"]
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Decorative gradient element */}
      <div className="absolute top-0 right-0 w-1/3 h-80 bg-gradient-to-br from-[#ff5a36] to-[#ff8c42] opacity-20 blur-3xl rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1>
        <p className="text-xl text-[#a0a0a0] mb-12">
          My professional journey and the companies I&apos;ve had the pleasure to work with.
        </p>
        
        <div className="space-y-16">
          {experiences.map((company) => (
            <div key={company.id} className="relative">
              {/* Company header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold">{company.company}</h2>
                <p className="text-[#a0a0a0]">{company.period}</p>
              </div>
              
              {/* Roles at this company */}
              <div className="space-y-10 ml-4">
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    {/* Timeline dot and line */}
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full gradient-bg -ml-6"></div>
                    {roleIndex < company.roles.length - 1 && (
                      <div className="absolute left-0 top-4 w-0.5 h-full bg-white bg-opacity-10 -ml-[19px]"></div>
                    )}
                    
                    <div className="ml-2">
                      <h3 className="text-2xl font-bold">{role.title}</h3>
                      <div className="text-[#a0a0a0] mb-4">{role.period}</div>
                      
                      <ul className="list-disc list-outside ml-5 mb-4 space-y-2 text-[#a0a0a0]">
                        {role.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {role.skills.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white bg-opacity-80 rounded-full text-xs text-black">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 