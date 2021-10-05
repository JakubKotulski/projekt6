import LeftSideOfContentLinks from "./LeftSideOfContentLinks";
import './LeftSideOfContent.css'

const LeftSideOfContent = () => {
    return(
        <div className="left-bar">
            <div className="help-div">
                <h2 className="h2-explore">Explore</h2>
                <LeftSideOfContentLinks url="image2.png" value="New in" />
                <LeftSideOfContentLinks url="image3.png" value="Clothing" />
                <LeftSideOfContentLinks url="image4.png" value="Shoes" />
                <LeftSideOfContentLinks url="image5.png" value="Accessories" />
                <LeftSideOfContentLinks url="image6.png" value="Activewear" />
                <LeftSideOfContentLinks url="image1.png" value="Gifts & Living" />
                <LeftSideOfContentLinks url="image7.png" value="Inspirtaion" />
            </div>
            <div className="footer">
                <img src="help-center.png"></img>
            </div>
        </div>
    )
}

export default LeftSideOfContent;