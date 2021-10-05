import BargainImage from './BargainImage'
import './ImgSquare.css'

const ImgSquare = ({className, img1, img2, withHeart }) => {
    return(
        <div className = {className} >
            <BargainImage src={img1} withHeart={withHeart} />
            <BargainImage src={img2} withHeart={withHeart} />
        </div>
    )
}

export default ImgSquare;