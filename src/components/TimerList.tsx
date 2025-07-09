'use client';

import { useState } from 'react';
import Timer from './Timer';

interface TimerItem {
  id: string;
  duration: number;
  name?: string;   
}

interface TimerListProps {
  list: TimerItem[];
}

export default function TimerList({ list }: TimerListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleComplete = () => {
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('All timers complete');
    }
  };

  if (list.length === 0) return null;

  // 実行中 or 完了済みの数 ÷ 全セット数 で計算
  const progressPercent = Math.floor(((currentIndex + 1) / list.length) * 100);

  return (
    <div className="space-y-4">
      {/* 進捗バー */}
     <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
       <div
         className="h-full bg-blue-500 transition-all duration-300"
         style={{ width: `${progressPercent}%` }}
       />
     </div>
     <div className="text-sm text-gray-600">
        Progress: {currentIndex + 1} / {list.length}
     </div>
      <Timer
          key={list[currentIndex].id}
          duration={list[currentIndex].duration}
          label={list[currentIndex].name}
          onComplete={handleComplete}
      />
    </div>
  );
}
