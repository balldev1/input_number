'use client'
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
      <div className='text-base-300 '>
        <button onClick={decrement} className="rounded-md bg-rose-500">-</button>
        <input
            className='text-rose-500 rounded-md'
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            style={{ width: '50px', textAlign: 'center' }}

        />
        <button onClick={increment}>+</button>
      </div>
  );
}
