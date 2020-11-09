import React from 'react'
import Image from './Image'

export default function Thumbnail({images, setCurrent}) {
    return(
        <div>
            {images.map(image => {
                return <Image key={image.id} image={image} setCurrent={setCurrent}/>
            })}
        </div>
    )
}