

import { useLoaderData } from 'react-router-dom';
import './App.css';
import TouristCard from './components/TouristCard';



function App() {

const spots = useLoaderData();

  return (
    <div className='m-20'>
  
 <h1 className='text-6xl text-center my-20 text-blue-400'>
  Explore BD Tourism:{spots.length}</h1>
<div className='grid md:grid-cols-2 gap-4'>
   {
  spots.map(spot => <TouristCard
  key={spot._id}
  spot={spot} >

  </TouristCard>)
 }
     
</div>
    </div>
  )
}

export default App
