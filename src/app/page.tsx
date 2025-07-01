'use client';

import { useState } from 'react';
import TimerList from '@/components/TimerList';
import TimerForm from '@/components/TimerForm';

export default function Page() {
  // テスト用のタイマー配列（3秒→5秒→2秒）
  const [timers, setTimers] = useState<{ id: string; name: string; duration: number }[]>([]);

  const handleAdd = (name: string, duration: number) => {
    setTimers(prev => [
      ...prev,
      { id: `${Date.now()}`, name, duration },
    ]);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-8">
      <h1 className="text-2xl">Timer App</h1>
      <TimerForm onAdd={handleAdd} />
      {timers.length > 0 ? (
        <TimerList list={timers.map(({ id, duration }) => ({ id, duration }))} />
      ) : (
        <p className="text-gray-500">Add a timer to start</p>
      )}
    </main>
  );
}
