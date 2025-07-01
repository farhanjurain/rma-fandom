import { Trophy, Award, Users, BarChart2 } from "lucide-react";

type TeamStanding = {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[]; // W, D, L
};

const standings: TeamStanding[] = [
  {
    position: 1,
    team: "Galacticos",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
  {
    position: 2,
    team: "La Decima",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
  {
    position: 3,
    team: "Los Blancos",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
  {
    position: 4,
    team: "Santiago",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
  {
    position: 5,
    team: "La Fabrica",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
  {
    position: 6,
    team: "Vinicius Jr.",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    form: []
  },
];

type TopScorer = {
  player: string;
  team: string;
  goals: number;
  assists: number;
  matches: number;
};

const topScorers: TopScorer[] = [
  { player: "Player 1", team: "Galacticos", goals: 0, assists: 0, matches: 0 },
  { player: "Player 3", team: "La Decima", goals: 0, assists: 0, matches: 0 },
  { player: "Player 5", team: "Los Blancos", goals: 0, assists: 0, matches: 0 },
  { player: "Player 7", team: "Santiago", goals: 0, assists: 0, matches: 0 },
  { player: "Player 9", team: "La Fabrica", goals: 0, assists: 0, matches: 0 },
];

type TopAssister = {
  player: string;
  team: string;
  assists: number;
  matches: number;
};

const topAssisters: TopAssister[] = [
  { player: "Player 2", team: "Galacticos", assists: 0, matches: 0 },
  { player: "Player 4", team: "La Decima", assists: 0, matches: 0 },
  { player: "Player 6", team: "Los Blancos", assists: 0, matches: 0 },
  { player: "Player 8", team: "Santiago", assists: 0, matches: 0 },
  { player: "Player 10", team: "La Fabrica", assists: 0, matches: 0 },
];

export default function StandingsPage() {
  return (
    <div id="standings" className="py-20 bg-rm-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bebas text-center mb-12 text-rm-blue">STANDINGS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* League Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-rm-blue text-white flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">League Table</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-3 text-center">#</th>
                      <th scope="col" className="px-4 py-3">Team</th>
                      <th scope="col" className="px-2 py-3 text-center">P</th>
                      <th scope="col" className="px-2 py-3 text-center">W</th>
                      <th scope="col" className="px-2 py-3 text-center">D</th>
                      <th scope="col" className="px-2 py-3 text-center">L</th>
                      <th scope="col" className="px-2 py-3 text-center">GF</th>
                      <th scope="col" className="px-2 py-3 text-center">GA</th>
                      <th scope="col" className="px-2 py-3 text-center">GD</th>
                      <th scope="col" className="px-2 py-3 text-center">Pts</th>
                      <th scope="col" className="px-2 py-3 text-center">Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team) => (
                      <tr key={team.team} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-2 py-4 text-center">{team.position}</td>
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {team.team}
                        </th>
                        <td className="px-2 py-4 text-center">{team.played}</td>
                        <td className="px-2 py-4 text-center">{team.won}</td>
                        <td className="px-2 py-4 text-center">{team.drawn}</td>
                        <td className="px-2 py-4 text-center">{team.lost}</td>
                        <td className="px-2 py-4 text-center">{team.goalsFor}</td>
                        <td className="px-2 py-4 text-center">{team.goalsAgainst}</td>
                        <td className="px-2 py-4 text-center">{team.goalDifference}</td>
                        <td className="px-2 py-4 text-center font-bold">{team.points}</td>
                        <td className="px-2 py-4">
                          <div className="flex space-x-1">
                            {team.form.length > 0 ? (
                              team.form.map((result, i) => (
                                <span 
                                  key={i} 
                                  className={`w-5 h-5 flex items-center justify-center text-xs rounded ${
                                    result === 'W' ? 'bg-green-100 text-green-800' :
                                    result === 'D' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {result}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-400 text-xs">-</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="space-y-6">
            {/* Top Scorers */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-rm-yellow text-rm-dark flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Top Scorers</h3>
              </div>
              <div className="divide-y">
                {topScorers.map((scorer, index) => (
                  <div key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{scorer.player}</div>
                        <div className="text-xs text-gray-500">{scorer.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{scorer.goals} <span className="text-gray-500 font-normal">goals</span></div>
                      <div className="text-xs text-gray-500">{scorer.assists} assists</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Assisters */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-rm-blue text-white flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Top Assisters</h3>
              </div>
              <div className="divide-y">
                {topAssisters.map((assister, index) => (
                  <div key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{assister.player}</div>
                        <div className="text-xs text-gray-500">{assister.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{assister.assists} <span className="text-gray-500 font-normal">assists</span></div>
                      <div className="text-xs text-gray-500">{assister.matches} matches</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
