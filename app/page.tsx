//import logo from './logo.svg';
'use client'
//import { GamePlayer } from 'koin.js';
//import 'koin.js/styles.css'; // Included styles

//export default function App() {
//  return (
//    <div style={{ width: '100vw', height: '100vh' }}>
//      <GamePlayer
//        romId="game2"
//        romUrl="/smt2.sfc"
//        system="SNES"
//        title="game."
//      />
//    </div>
//  );
//}
import React from "react";
import { Nostalgist } from 'nostalgist'

export default function Page() {
  return (
    <main>
      await Nostalgist.launch({
  core: 'snes',
  rom: 'smt2.sfc',
})
    </main>
  );
}


