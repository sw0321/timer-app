'use client';

import { useState } from 'react';
import Timer from './Timer';

interface TimerItem {
  id: string;
  duration: number;
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

  return (
    <div>
      <Timer
        key={list[currentIndex].id}
        duration={list[currentIndex].duration}
        onComplete={handleComplete}
      />
    </div>
  );
}
