"use client";

import { useState } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
  country: string;
}

export default function RankingPage() {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: "Ana Gómez", score: 98, country: "Colombia" },
    { id: 2, name: "Luis Pérez", score: 92, country: "México" },
    { id: 3, name: "María Torres", score: 89, country: "Chile" },
    { id: 4, name: "Carlos Díaz", score: 85, country: "Argentina" },
  ]);

  const [sortAsc, setSortAsc] = useState(true);

  const sortByScore = () => {
    const sorted = [...players].sort((a, b) =>
      sortAsc ? a.score - b.score : b.score - a.score
    );
    setPlayers(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">🏆 Ranking General</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-3 rounded-tl-lg">#</th>
            <th className="p-3">Jugador</th>
            <th
              className="p-3 cursor-pointer hover:underline"
              onClick={sortByScore}
            >
              Puntuación {sortAsc ? "↑" : "↓"}
            </th>
            <th className="p-3 rounded-tr-lg">País</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={player.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 font-medium">{index + 1}</td>
              <td className="p-3">{player.name}</td>
              <td className="p-3">{player.score}</td>
              <td className="p-3">{player.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

