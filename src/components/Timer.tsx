'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  duration: number;                // 初期秒数
  onComplete?: () => void;         // 終了時コールバック
  label?: string;
}

export default function Timer({ duration, onComplete, label }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // タイマー終了チェック
    if (secondsLeft <= 0) {
      onComplete?.();
      return;
    }

    // pause 中は何もしない
    if (isPaused) return;

    // カウントダウン開始
    const timeoutId = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    // クリーンアップ
    return () => clearTimeout(timeoutId);
  }, [secondsLeft, isPaused, onComplete]);

  // 時:分:秒フォーマットに変換
  const hh = Math.floor(secondsLeft / 3600);
  const mm = Math.floor((secondsLeft % 3600) / 60);
  const ss = secondsLeft % 60;
  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="text-center space-y-2">
      {label && <div className="text-lg font-semibold">{label}</div>}
      <div className="text-4xl font-mono">
          {format(hh)}:{format(mm)}:{format(ss)}
      </div>
      <button
       className="mt-2 px-3 py-1 border rounded hover:bg-gray-100"
       onClick={() => setIsPaused((prev) => !prev)}
     >
       {isPaused ? 'Resume' : 'Pause'}
     </button>
    </div>
  );
}
