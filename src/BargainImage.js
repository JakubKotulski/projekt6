import './BargainImage.css'

const BargainImage = ({ src, withHeart }) => {
    return(
        <div>
            <img src={src}></img>
            {withHeart && <img className="position" src="heart.png" />}
        </div>
    )
}

export default BargainImage;