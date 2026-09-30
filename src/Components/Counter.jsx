import React from "react";
import { increment, decrement, reset, customIncrement } from "../Redux/Slices/counter"
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter)
  console.log(count)

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-gray-900 p-8 text-white shadow-xl">
      <div className="text-center">
        <p className="text-sm font-medium text-gray-400">Counter</p>
        <h1 className="text-5xl font-bold tabular-nums">{count}</h1>
      </div>

      <div className="flex w-full gap-3">
        <button
         onClick={() => dispatch(increment())}
         className="flex-1 rounded-xl bg-blue-500 py-2.5 font-medium transition-colors hover:bg-blue-600 cursor-pointer">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="flex-1 rounded-xl bg-red-500 py-2.5 font-medium transition-colors hover:bg-red-600 cursor-pointer">
          Decrement
        </button>
      </div>

      <div className="flex w-full flex-col gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          className="w-full rounded-xl bg-gray-800 p-2.5 text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 focus:ring-2 focus:ring-yellow-500"
        />
        <button 
        onClick={() => dispatch(customIncrement(Number(value)))}
        className="w-full rounded-xl bg-yellow-500 py-2.5 font-medium text-gray-900 transition-colors hover:bg-yellow-400 cursor-pointer">
          Increment by {value || 0}
        </button>
      </div>

      <button 
      onClick={() => dispatch(reset())}
      className="w-full rounded-xl border border-gray-700 py-2.5 font-medium text-gray-300 transition-colors hover:bg-gray-800 cursor-pointer">
        Reset
      </button>
    </div>
  );
};

export default Counter;