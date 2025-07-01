'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  duration: number;                // 初期秒数
  onComplete?: () => void;         // 終了時コールバック
}

export default function Timer({ duration, onComplete }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onComplete?.();
      return;
    }
    const id = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft, onComplete]);

  // 時:分:秒フォーマットに変換
  const hh = Math.floor(secondsLeft / 3600);
  const mm = Math.floor((secondsLeft % 3600) / 60);
  const ss = secondsLeft % 60;
  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="text-4xl font-mono">
      {format(hh)}:{format(mm)}:{format(ss)}
    </div>
  );
}
