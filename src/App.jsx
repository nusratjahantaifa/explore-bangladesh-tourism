

import { useLoaderData } from 'react-router-dom';
import './App.css';
import TouristCard from './components/TouristCard';
import { useState } from 'react';



function App() {

const loadedSpots = useLoaderData();
const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className='m-20'>
  
 <h1 className='text-6xl text-center my-20 text-blue-400'>
  Explore BD Tourism</h1>
  <p></p>
<div className='grid md:grid-cols-2 gap-4'>
   {
  spots.map(spot => <TouristCard
  key={spot._id}
  spot={spot}
  spots={spots}
  setSpots={setSpots}
  >

  </TouristCard>)
 }
     
</div>
    </div>
  )
}

export default App
