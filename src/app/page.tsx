'use client'

import { useState } from "react";

export default function Home() {

  const [number, setNumber] = useState<number>(0)
  
  let property = "Null"
  let color = "gray"

  if(number > 0){
    property = "Positive"
    color = "green"
  } else if(number < 0){
    property = "Negative"
    color = "red"
  } else{
    property = "Null"
    color = "gray"
  }

  function increment(value:number){
    setNumber(prev => Math.min(prev + value, 1000))
  }
  function reset(){
    setNumber(0)
  }
  function decrement(value:number){
    setNumber(prev => Math.max(prev - value, -1000))
  }

  return (
    <div>
      <main className="ml-10 mt-10">
        <div className="flex flex-col items-center gap-5">
          <div>
            
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold">{property}</h3> 
            <h2 className="text-[25px] font-bold" style={{color}}>{number}</h2>
            <button onClick={reset} className="bg-black text-white rounded-full w-31 h-7  font-bold">Reset</button>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col items-center gap-1.5">
              <h2 className="bg-black text-white rounded-full w-30 h-7 font-bold flex items-center justify-center">Increment</h2>
              <button onClick={() => {increment(1)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">+ 1</button>
              <button onClick={() => {increment(2)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">+ 2</button>
              <button onClick={() => {increment(5)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">+ 5</button>
              <button onClick={() => {increment(10)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">+ 10</button>
              <button onClick={() => {increment(100)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">+ 100</button>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="bg-black text-white rounded-full w-30 h-7 font-bold flex items-center justify-center">Decrement</h2>
            <button onClick={() => {decrement(1)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">- 1</button>
            <button onClick={() => {decrement(2)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">- 2</button>
            <button onClick={() => {decrement(5)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">- 5</button>
            <button onClick={() => {decrement(10)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">- 10</button>
            <button onClick={() => {decrement(100)}} className="bg-black text-white rounded-full w-15 h-7 font-bold">- 100</button>
          </div>
          </div> 
        </div>
      </main>
    </div>
  );
}
