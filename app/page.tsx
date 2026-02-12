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
"use client"

import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'

export default function GamePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nostalgistRef = useRef<Nostalgist | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // クリーンアップ用
    let currentNostalgist: Nostalgist | null = null

    const launch = async () => {
      try {
        // 例: NESのFlappy Bird（実際は自分のROM URL or Fileを使う）
        currentNostalgist = await Nostalgist.nes({
          // 公開デモ用ROM（教育目的のみ使用してください）
          rom: 'https://nostalgist.js.org/roms/nes/flappybird.nes',
          // またはローカルファイル選択を使うことも可能
          // element: containerRef.current,  ← 省略するとbody直下にcanvasが出る
        });

    launch()

  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      <h1>Retro Game in Next.js</h1>
      {/* エミュレータのキャンバスがここに入る */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          aspectRatio: '256 / 240', // NESの場合の例。システムによって変える
          background: '#000',
          margin: '1rem 0',
        }}
      />
      <p>操作: 矢印キー / Z= Aボタン / X= Bボタン / Enter= Start</p>
    </div>
  )
}
}

