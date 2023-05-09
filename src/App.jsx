
import { useLoaderData } from 'react-router-dom'
import './App.css'
import ChocoletCard from './components/ChocoletCard';
import { useState } from 'react';

function App() {
  const loadChocolets = useLoaderData();
  
  const [chocolets , setChocolets] = useState(loadChocolets)

  return (
    <>
    <h1 className='text-4xl font-extrabold text-center my-10'>Here Are All Items Chocolets</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10'>
        {
          chocolets.map(chocolet => <ChocoletCard
          key={chocolet._id}
          chocolet={chocolet}
          chocolets= {chocolets}
          setChocolets={setChocolets}
          ></ChocoletCard>)
        }
      </div>
    </>
  )
}

export default App
