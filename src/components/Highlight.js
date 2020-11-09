

export default function Highlight({ image }) {
    return(
        <img src={image.url} alt='' style={
            { width:300, height:300, marginBottom:3}
        } />
    )
}