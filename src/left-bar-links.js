const LeftBarLinks = ({url, value}) =>{
    return(
        <div className="left-bar-link">
            <img src = {url}></img>
            <span className="left-bar-link-text">{value}</span>
        </div>
    )
}

export default LeftBarLinks;