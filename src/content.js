import LeftSideOfContent from './LeftSideOfContent'
import RightSideOfContent from './RightSideOfContent';
import './Content.css';

const Content = () => {
    return(
        <div className="content-box">
            <LeftSideOfContent />
            <RightSideOfContent />
        </div>
    )
}

export default Content;