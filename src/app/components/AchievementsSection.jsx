import FlipCard from '../components/FlipCard'

const achievements = [
  {
    title: "Dean's Award (5 times)",
    period: "2020-2023",
    description: "Given 2 times a year to students who take 15+ credits and achieve 3.75+ CGPA without B or less grade in a course",
    image: "/images/deanAward.jpg",
    bgGradient: "from-yellow-300 via-blue-950 to-yellow-300"
  },
  {
    title: "Programming Contest - 6th DRMC International Tech Carnival 2023",
    period: "2023",
    description: "We attended DRMC programming contest in 2023. It was an online competition.",
    image: "/images/programming-contest.png",
    bgGradient: "from-orange-400 via-blue-950 to-orange-400"
  },
  {
    title: "Data Structures And Algorithms (Bohubrihi)",
    period: "2023",
    description: "An online course under Sakshar Chakravarty, lecturer at the department of CSE at BUET",
    image: "/images/data structure.png",
    bgGradient: "from-[#0e1947] to-[#0cd9fa]"
  },
  {
    title: "Finalist - Dexterity",
    period: "2023",
    description: "Dexterity is an intra-AIUB case-solving competition hosted by AIUB Business Club",
    image: "/images/dexterity.jpg",
    bgGradient: "from-zinc-100 via-yellow-600 to-zinc-100"
  },
  {
    title: "2nd Round - CTO Forum HackaThon",
    period: "2022",
    description: "We presented our idea about the growth of farming and promoted to the 2nd round",
    image: "/images/hackathon.jpg",
    bgGradient: "from-[#0e1947] to-[#0cd9fa]"
  },
  {
    title: "CISCO IT Essential",
    period: "2020",
    description: "An IT course by CISCO",
    image: "/images/cisco.jpg",
    bgGradient: "from-[#0e1947] to-[#0cd9fa]"
  }
]

const competitiveStats = [
  { label: "Problems Solved", value: "300+" },
  { label: "Contests Participated", value: "25+" },
  { label: "Highest Rating", value: "1160" },
  { label: "Years in Competitive Programming", value: "3" }
]

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          My Achievements
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Certifications, awards, and competitive programming achievements.
        </p>
      </div>
      
      {/* Participation and Certification */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Participation and Certification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <FlipCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
      
      {/* Competitive Programming */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Competitive Programming
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Codeforces Achievements
              </h3>
              <p className="text-gray-600 mb-6">
                Explore my achievements and experience in competitive programming on Codeforces.
              </p>
              <a
                href="https://codeforces.com/profile/MostaqueNaimAIUB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                View Profile
              </a>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {competitiveStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center border border-gray-200"
                >
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}