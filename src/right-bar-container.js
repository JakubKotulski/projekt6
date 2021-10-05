import ImgSquare from "./img-square";

const RightBarContainer = () => {
    return(
        <>
            <div className="right-bar-container">
                <ImgSquare className="img-square-column" src1 ="baner1.png" src2 ="baner2.png"/>
                <ImgSquare className="img-square-row" src1 ="baner3.png" src2 ="baner4.png" src3="heart.png" id1="id1" id2="id2"/>
            </div>
            <div className="right-bar-container">
                <ImgSquare className="img-square-row" src1 ="baner5.png" src2 ="baner6.png" src3="heart.png" id1="id3" id2="id4"/>
                <ImgSquare className="img-square-column" src1 ="baner7.png" src2 ="baner8.png"/>
            </div>

        </>
    )
}

export default RightBarContainer;