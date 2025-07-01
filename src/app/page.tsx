import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-rm-blue to-rm-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/stadium-pattern.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-2 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-rm-yellow">RM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas tracking-wide mb-6">
              R3AL M4DRID FANDOM
              <span className="block text-rm-yellow mt-2">CO-OP TOURNAMENT 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Where the best Real Madrid fans compete for glory in the ultimate co-op challenge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#teams" 
                className="bg-rm-yellow hover:bg-yellow-500 text-rm-dark font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                View Teams
              </Link>
              <Link 
                href="#fixtures" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-rm-blue font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Fixtures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Overview */}
      <section className="py-20 bg-rm-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bebas text-center mb-12 text-rm-blue">TOURNAMENT OVERVIEW</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-rm-yellow text-4xl mb-4">6</div>
              <h3 className="text-xl font-bold mb-2">Teams</h3>
              <p className="text-gray-600">2 players per team, competing in the ultimate co-op challenge</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-rm-yellow text-4xl mb-4">5</div>
              <h3 className="text-xl font-bold mb-2">Group Matches</h3>
              <p className="text-gray-600">Each team plays 5 matches in a one-way round-robin format</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-rm-yellow text-4xl mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Finalists</h3>
              <p className="text-gray-600">Top 4 teams advance to the direct knockout stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Match Rules */}
      <section id="rules" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bebas text-center mb-12 text-rm-blue">MATCH RULES</h2>
          
          <div className="max-w-4xl mx-auto bg-rm-light p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Match Duration</h4>
                    <p className="text-gray-700">10 minutes per half</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Pitch Condition</h4>
                    <p className="text-gray-700">Good</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Extra Time</h4>
                    <p className="text-gray-700">Enabled</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Penalties</h4>
                    <p className="text-gray-700">Disabled</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Substitutions</h4>
                    <p className="text-gray-700">6 substitutions allowed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-rm-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Half-time</h4>
                    <p className="text-gray-700">2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
