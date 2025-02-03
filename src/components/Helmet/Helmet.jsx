import { useState, useEffect } from "react"
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

const Helmet = (props) => {
    // Scroll
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = function () {
            setScroll(window.scrollY >= 600 ? true : false)
        }
    },[])
    const handleUpClick = () => {
        window.scrollTo({
            left:0,
            top: 0,
            behavior: "smooth",
        })
    }

    return(

        <div className="w-100">
            { /* eslint-disable-next-line react/prop-types */}
            {props.children}
            <span className={`arrow_up ${scroll === true ? "active" : ""}`} onClick={handleUpClick}><KeyboardDoubleArrowUpOutlinedIcon /></span>
        </div>
    )
}

export default Helmet