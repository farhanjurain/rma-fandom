import { CalendarDays, Clock } from "lucide-react";

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  homeScore: number | null;
  awayScore: number | null;
  status: 'upcoming' | 'live' | 'completed';
};

const fixtures: Match[] = [
  {
    id: 1,
    homeTeam: "Galacticos",
    awayTeam: "La Decima",
    date: "2025-07-10",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 2,
    homeTeam: "Los Blancos",
    awayTeam: "Santiago",
    date: "2025-07-10",
    time: "20:30",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 3,
    homeTeam: "La Fabrica",
    awayTeam: "Vinicius Jr.",
    date: "2025-07-11",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 4,
    homeTeam: "Galacticos",
    awayTeam: "Los Blancos",
    date: "2025-07-12",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 5,
    homeTeam: "La Decima",
    awayTeam: "Santiago",
    date: "2025-07-12",
    time: "20:30",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 6,
    homeTeam: "La Fabrica",
    awayTeam: "Galacticos",
    date: "2025-07-13",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 7,
    homeTeam: "Vinicius Jr.",
    awayTeam: "La Decima",
    date: "2025-07-13",
    time: "20:30",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 8,
    homeTeam: "Santiago",
    awayTeam: "La Fabrica",
    date: "2025-07-14",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 9,
    homeTeam: "Los Blancos",
    awayTeam: "Vinicius Jr.",
    date: "2025-07-14",
    time: "20:30",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  {
    id: 10,
    homeTeam: "Galacticos",
    awayTeam: "Santiago",
    date: "2025-07-15",
    time: "19:00",
    homeScore: null,
    awayScore: null,
    status: 'upcoming'
  },
  // Add more fixtures as needed
];

export default function FixturesPage() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">LIVE</span>;
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">FT</span>;
      default:
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">UPCOMING</span>;
    }
  };

  return (
    <div id="fixtures" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bebas text-center mb-12 text-rm-blue">FIXTURES & RESULTS</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Match</th>
                    <th scope="col" className="px-6 py-3">Date & Time</th>
                    <th scope="col" className="px-6 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {fixtures.map((match) => (
                    <tr key={match.id} className="bg-white border-b hover:bg-gray-50">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between w-64">
                            <span>{match.homeTeam}</span>
                            {match.status === 'completed' && (
                              <span className="font-bold">{match.homeScore}</span>
                            )}
                          </div>
                          <div className="flex items-center justify-between w-64">
                            <span>{match.awayTeam}</span>
                            {match.status === 'completed' && (
                              <span className="font-bold">{match.awayScore}</span>
                            )}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="w-4 h-4 text-rm-blue" />
                          <span>{formatDate(match.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-rm-yellow" />
                          <span>{match.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {getStatusBadge(match.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
