import ImgSquare from "./ImgSquare";
import './RightSideOfContent.css'

const RightSideOfContent = () => {
    return(
        <div className="right-side-of-content">
            <div className="flex">
                <ImgSquare className = "img-square-column" img1 = "baner1.png" img2 = "baner2.png" value = "hidden"/>
                <ImgSquare className = "img-square-row" img1 = "baner3.png" img2 = "baner4.png" heartImg = "heart.png" value="position"/>
            </div>
            <div className="flex">
                <ImgSquare className = "img-square-row" img1 = "baner5.png" img2 = "baner6.png" heartImg="heart.png" value="position"/>
                <ImgSquare className = "img-square-column" img1 = "baner7.png" img2 = "baner8.png" value = "hidden"/>
            </div>
        </div>
    )
}

export default RightSideOfContent;