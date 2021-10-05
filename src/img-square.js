const ImgSquare = ({className, src1, src2, src3, id1, id2}) => {
    return(
        <>
            <div className = {className} >
                <img src = {src1}></img>
                <img src = {src2}></img>
            </div>
            <img className="hover" id={id1} src={src3}></img>
            <img className="hover" id={id2}  src={src3}></img>
        </>    
    )
}

export default ImgSquare;