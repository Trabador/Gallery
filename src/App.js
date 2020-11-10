import { useEffect, useState }  from 'react'
import './App.css';
import Thumbnail from './components/Thumbnail'
import Highlight from './components/Highlight'

const images = [
  { id: 0, url: './img/01.jpg'},
  { id: 1, url: './img/02.jpg'},
  { id: 2, url: './img/03.jpg'},
  { id: 3, url: './img/04.jpg'}
]

function App() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

    const adjustCurrentImage = (amount) => {
      const indexLimit = images.length-1
      setCurrent(prev => {
        if(prev+amount > indexLimit) return 0
        if(prev+amount < 0) return indexLimit
        return prev+amount
      })
      
    }

    useEffect(() =>{
      if(isPlaying){
        const interval = setInterval(() => {
          adjustCurrentImage(1)
        }, 3000); 

        return () => {
          clearInterval(interval)
        }
      }
    }, [isPlaying])

  return (
    <div className="App">
      <Highlight image={images[current]} />
      <Thumbnail images={images} setCurrent={setCurrent} current={current}/>
      <button onClick={() => adjustCurrentImage(-1)}>Previous</button>
      <button onClick={() => setIsPlaying(prev => !prev)}>{isPlaying ? 'Pause': 'Play'}</button>
      <button onClick={() => adjustCurrentImage(1)}>Next</button>
    </div>
  );
}

export default App;
