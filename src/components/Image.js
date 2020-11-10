import './Image.css'

export default function Image({ image, current, setCurrent }) {
    return(
        <img 
            src={image.url} alt='' 
            className = {current === image.id ? 'Image current': 'Image'}
            onClick = { () =>  setCurrent(image.id)}
        />
    )
}