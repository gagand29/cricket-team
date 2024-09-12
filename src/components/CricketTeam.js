import React, { useState } from 'react';

// Sample data array
const data = [
  { id: 1, name: 'V Kohli', role: 'Batsman' },
  { id: 2, name: 'M Siraj', role: 'Bowler' },
  { id: 4, name: 'D Karthik', role: 'Wicket Keeper' },
];

const CricketTeam = () => {
 
  const [team, setTeam] = useState(data);


  const clearTeam = () => {
    setTeam([]); 
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Cricket Team</h1>

      {/* Display the team data */}
      <ul className="mb-6">
        {team.map((player) => (
          <li key={player.id} className="mb-2 text-lg">
            <strong>{player.name}</strong> - {player.role}
          </li>
        ))}
      </ul>

      {/* Clear button */}
      <button
        onClick={clearTeam}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out"
      >
        Clear
      </button>
    </div>
  );
};

export default CricketTeam;
