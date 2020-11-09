

export default function Image({ image, setCurrent }){
    return(
        <img 
            src={image.url} alt='' 
            style={
                {width:100, height:100, marginRight: 2} }
            onClick = { () =>  setCurrent(image.id)}
        />
    )
}