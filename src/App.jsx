import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* Add slight hover on all items, upward, land-book.com */
/* Add slightly overlapping section divs that slowly cover their neighbors see hypercore.ai */
function Home() {
  return (
    <div className='min-h-screen w-screen bg-alpha -m-8'>
        <div className='text-mod p-6'>
          <h2 className='text-xl font-semibold mb-4'>
            <p>Elijah Stolte.</p>
          </h2>
        </div>

    </div>
  )
}

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
