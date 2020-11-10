
export default function Highlight({ image }) {
    return(
        <img src={image.url} alt='' style={
            { width:500, height:500, margin:15 }
        } />
    )
}