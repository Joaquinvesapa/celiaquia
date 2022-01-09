import React, {useState, useEffect} from 'react'
import Header from '../components/Home/Header'
import Progress from '../components/Home/Progress'
import '../css/loading.css'

const Inicio = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2500);
  }, []);

  return (
    <div>
      <div className={loading ? 'loading-active' : 'loading'}>
        <Progress done="100"/>
      </div>
      {
        loading ? <></> : <Header/> 
      }
    </div>
  )
}

export default Inicio
