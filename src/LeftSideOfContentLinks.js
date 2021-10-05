import './LeftSideOfContentLinks.css'

const LeftSideOfContentLinks = ({url, value}) =>{
    return(
        <div className="left-side-link">
            <img src = {url}></img>
            <span className="left-side-link-text">{value}</span>
        </div>
    )
}

export default LeftSideOfContentLinks;