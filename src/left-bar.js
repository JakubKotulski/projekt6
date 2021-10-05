import LeftBarLinks from "./left-bar-links";

const LeftBar = () => {
    return(
        <div className="left-bar">
            <div className="help-div">
                <h2 className="h2-explore">Explore</h2>
                <LeftBarLinks url="image2.png" value="New in" />
                <LeftBarLinks url="image3.png" value="Clothing" />
                <LeftBarLinks url="image4.png" value="Shoes" />
                <LeftBarLinks url="image5.png" value="Accessories" />
                <LeftBarLinks url="image6.png" value="Activewear" />
                <LeftBarLinks url="image1.png" value="Gifts & Living" />
                <LeftBarLinks url="image7.png" value="Inspirtaion" />
            </div>
            <div className="bar-footer">
                <img src="help-center.png"></img>
            </div>
        </div>
    )
}

export default LeftBar;