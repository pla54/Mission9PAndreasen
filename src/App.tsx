import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface Teams {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<Teams> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

const ListOfTeams = () => {
  // Group teams into pairs
  const teamPairs = [];
  for (let i = 0; i < teamsData.teams.length; i += 2) {
    teamPairs.push([teamsData.teams[i], teamsData.teams[i + 1]]);
  }

  return (
    <div className="team-container">
      {teamPairs.map((pair, index) => (
        <div key={index} className="team-row">
          {pair.map((team, index) => (
            <div key={index} className="team-card">
              <Team {...team} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function Welcome() {
  return (
    <header>
      <h1>Welcome to the NCAA March Madness Tournament Teams Website!</h1>
      <p>Here is more about each team participating in the tournament:</p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <ListOfTeams />
    </div>
  );
}

export default App;
