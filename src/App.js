import { useCallback, useEffect, useState }  from 'react'
import './App.css';
import Thumbnail from './components/Thumbnail'
import Highlight from './components/Highlight'

const images = [
  { id: 0, url: 'https://apod.nasa.gov/apod/image/2006/OrionMountains_Tabbush_2048.jpg'},
  { id: 1, url: 'https://apod.nasa.gov/apod/image/2003/BhShredder_NASA_3482.jpg'},
  { id: 2, url: 'https://earthsky.org/upl/2017/04/zodiacal-light-milky-way-Yuri-Beletsky.jpg'},
  { id: 3, url: 'https://apod.nasa.gov/apod/image/1708/ChileanVolcanoSky_Fairbairn_1682.jpg'}
]

function App() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const adjustCurrentImage = useCallback((amount) => {
    if(current+amount > images.length-1){
      setCurrent(0)
    } else if(current+amount < 0){
      setCurrent(images.length-1)
    } else{
      setCurrent(prev => prev+amount)
    }
  }, [current])

  useEffect(() =>{
      const interval = setInterval(() => {
        console.log(typeof interval)
        if(isPlaying){
          adjustCurrentImage(1)
        }else{
          clearInterval(interval)
        }
      },3000);

      return () => clearInterval(interval)
    }, [current, isPlaying, adjustCurrentImage]) 

  return (
    <div className="App">
      <Highlight image={images[current]} />
      <Thumbnail images={images} setCurrent={setCurrent}/>
      <input type="button" value="Prev" onClick={() => adjustCurrentImage(-1)}/>
      <input type="button" value={isPlaying ? 'Pause': 'Play'} onClick={() => setIsPlaying(prev => !prev)}/>
      <input type="button" value="Next" onClick={() => adjustCurrentImage(1)}/>
    </div>
  );
}

export default App;
