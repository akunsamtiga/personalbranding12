'use client';

import Image from 'next/image';
import { Tv2, Mail, Instagram, Music4 } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Channel YouTube', icon: <Tv2 size={18} />, url: '#' },
    { label: 'Lagu Kenangan', icon: <Music4 size={18} />, url: '#' },
    { label: 'Instagram', icon: <Instagram size={18} />, url: '#' },
    { label: 'Surat Elektrik', icon: <Mail size={18} />, url: 'mailto:nostalgia@skt.id' },
  ];

  return (
    <main className="min-h-screen bg-[#f9f3eb] text-[#3c2b23] px-4 flex items-center justify-center font-mono relative overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grain.png')] opacity-10 pointer-events-none z-0" />

      <div className="max-w-md w-full bg-[#fefefe] border-2 border-[#d9c8b4] rounded-xl p-6 shadow-[8px_8px_0px_#c8b89e] z-10">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden border-2 border-[#c8b89e]">
            <Image
              src="/p1.jpg"
              alt="Logo SKT Nostalgia"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mt-3">SKT Nostalgia</h1>
          <p className="text-sm text-[#6e5e4f] mt-1">
            {`"Playlist patah hati 2009 🎧"`}
          </p>
        </div>

        <div className="space-y-3">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="flex items-center justify-between px-4 py-3 bg-[#fffaf5] border border-[#e5dccc] rounded hover:bg-[#f2e9d7] transition"
            >
              <span className="flex items-center gap-2">{icon} {label}</span>
              <span>📼</span>
            </a>
          ))}
        </div>

        <p className="text-xs text-center mt-6 text-[#988674]">diputar pakai Winamp, plz</p>
      </div>
    </main>
  );
}
