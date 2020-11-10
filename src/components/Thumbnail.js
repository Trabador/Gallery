import Image from './Image'

export default function Thumbnail({ images, setCurrent, current }) {
    return(
        <div style={{ marginBottom: 5 }}>
            {images.map(image => {
                return <Image key={image.id} image={image} current={current} setCurrent={setCurrent}/>
            })}
        </div>
    )
}