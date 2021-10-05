import BargainImage from "./BargainImage";
import './RightSideOfContent.css';

const RightSideOfContent = () => {
    return(
        <div className="right-side-of-content">
            <div className="flex">
                <div className="img-square-column">
                    <BargainImage src="/baner1.png" />
                    <BargainImage src="/baner2.png" />
                </div>
                <div className="img-square-row">
                    <BargainImage src="/baner3.png" withHeart={true}/>
                    <BargainImage src="/baner4.png" withHeart={true}/>
                </div>
            </div>
            <div className="flex">
            <div className="img-square-row">
                    <BargainImage src="/baner5.png" withHeart={true}/>
                    <BargainImage src="/baner6.png" withHeart={true}/>
                </div>
                <div className="img-square-column">
                    <BargainImage src="/baner7.png" />
                    <BargainImage src="/baner8.png" />
                </div>
            </div>
        </div>
    )
}

export default RightSideOfContent;