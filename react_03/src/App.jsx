import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  // const changeColor = (color) => {
  //   setColor(color);
  // }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button onClick={() => changeColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
          <button onClick={() => changeColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Yellow</button> */}
          <button onClick={() => setColor('cyan')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'cyan'}}>Cyan</button>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'yellow'}}>Yellow</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'purple'}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
