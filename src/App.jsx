import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col bg-slate-700 text-white items-center justify-center h-screen gap-4">
      <h>Ayy Cuh ! Count Somethin</h>
      <button 
      className="bg-slate-500 px-4 py-2 rounded-md hover:bg-slate-600 transition-all"
      onClick={()=>setCount(count + 1)}>Add</button>
      {count}
    </div>
  )
}

export default App
