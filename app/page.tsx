'use client'
import { GamePlayer } from 'koin.js';
import 'koin.js/styles.css'; // Included styles

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GamePlayer
        romId="game-123"
        romUrl="/game.sfc"
        system="SNES"
        title="games"
      />
    </div>
  );
}
