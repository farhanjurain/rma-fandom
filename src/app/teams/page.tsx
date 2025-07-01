import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Galacticos",
    players: ["Player 1", "Player 2"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
  {
    id: 2,
    name: "La Decima",
    players: ["Player 3", "Player 4"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
  {
    id: 3,
    name: "Los Blancos",
    players: ["Player 5", "Player 6"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
  {
    id: 4,
    name: "Santiago",
    players: ["Player 7", "Player 8"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
  {
    id: 5,
    name: "La Fabrica",
    players: ["Player 9", "Player 10"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
  {
    id: 6,
    name: "Vinicius Jr.",
    players: ["Player 11", "Player 12"],
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
  },
];

export default function TeamsPage() {
  return (
    <div id="teams" className="py-20 bg-rm-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bebas text-center mb-12 text-rm-blue">TOURNAMENT TEAMS</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {teams.map((team) => (
                <div 
                  key={team.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-rm-blue text-white p-4">
                    <h3 className="text-xl font-bold text-center">{team.name}</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-rm-blue">
                          {team.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-center mb-2">Players:</h4>
                      <ul className="space-y-1">
                        {team.players.map((player, index) => (
                          <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span>{player}</span>
                            <span className="text-sm text-gray-500">Player {index + 1}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-4 gap-2 text-center text-sm">
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="font-bold">{team.played}</div>
                          <div className="text-xs text-gray-500">Played</div>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="font-bold">{team.won}</div>
                          <div className="text-xs text-gray-500">Won</div>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="font-bold">{team.drawn}</div>
                          <div className="text-xs text-gray-500">Drawn</div>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                          <div className="font-bold">{team.points}</div>
                          <div className="text-xs text-gray-500">Points</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
