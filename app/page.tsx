/*
//import logo from './logo.svg';
'use client'
import { GamePlayer } from 'koin.js';
import 'koin.js/styles.css'; // Included styles

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GamePlayer
        romId="game2"
        romUrl="/smt2.sfc"
        system="SNES"
        title="game."
      />
    </div>
  );
}
*/
// app/game/[slug]/page.tsx  または components/Emulator.tsx など
// app/game/[slug]/page.tsx  または components/Emulator.tsx など
"use client"

import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nostalgistRef = useRef<Nostalgist | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    let currentNostalgist: Nostalgist | null = null

    const launch = async () => {
      try {
        currentNostalgist = await Nostalgist.nes({
          rom: 'https://nostalgist.js.org/roms/nes/flappybird.nes',
          // Key: pass the canvas element directly
          element: canvasRef.current,
        })

        nostalgistRef.current = currentNostalgist
      } catch (err) {
        console.error('エミュレータ起動失敗', err)
      }
    }

    launch()

    return () => {
      if (nostalgistRef.current) {
        nostalgistRef.current.exit().catch(console.error)
      }
    }
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <h1>Retro Game in Next.js</h1>
      {/* Use <canvas> instead of <div> */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 'auto',           // or fixed height if preferred
          aspectRatio: '256 / 240', // NES native aspect; adjust per system
          background: '#000',
          imageRendering: 'pixelated', // sharp pixels (optional but recommended)
          display: 'block',
          margin: '1rem 0',
        }}
      />
      <p>操作: 矢印キー / Z=A / X=B / Enter=Start</p>
    </div>
  )
}