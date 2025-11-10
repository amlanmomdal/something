import { useState } from "react";

const Counter = () => {
const [totalCount, settotalCount] = useState(0);
const [dislikeCount, setdislikeCount] = useState(0);

const increment = () => {
    settotalCount(totalCount + 1);
};
const decrement = () => {
    setdislikeCount(dislikeCount + 1);
};
const reset = () => {
    settotalCount(0);
    setdislikeCount(0);
};
  return (
    <div>
      <h2 className="text-2xl font-bold">Hey, send me some ❤️</h2>
      <h3 className="text-lg mt-2">If you like my work, consider supporting me!</h3>
      <p className="mt-4">You send me {totalCount} ❤️ {dislikeCount} 👎 </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={increment}>Send ❤️</button>
      <button className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={decrement}>decrement 👎</button>
      <button className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={reset}>Reset 🔄</button>
    </div>
  )
}

export default Counter