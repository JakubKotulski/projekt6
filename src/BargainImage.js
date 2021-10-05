import './BargainImage.css'

const BargainImage = ({src1, src2, className}) => {
    return(
        <div>
            <img src={src1}></img>
            <img className = {className} src={src2}></img>
        </div>
    )
}

export default BargainImage;