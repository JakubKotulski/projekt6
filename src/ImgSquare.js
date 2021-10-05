import BargainImage from './BargainImage'
import './ImgSquare.css'

const ImgSquare = ({className, img1, img2, heartImg, value}) => {
    return(
        <div className = {className} >
            <BargainImage src1={img1} src2={heartImg} className = {value}/>
            <BargainImage src1={img2} src2={heartImg} className = {value}/>
        </div>
    )
}

export default ImgSquare;