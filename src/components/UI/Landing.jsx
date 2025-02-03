import { Container } from "reactstrap"

// Images
import store from "../../assets/all_images/store.png"
import google from "../../assets/all_images/google.png"
import furniture from "../../assets/all_images/furniture.png"

// Material Icons
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


function Landing() {


  return (
    <div className="landing" id="Home">
      <Container>
        <div className="landing_content">
          <span className="title"><MinimizeOutlinedIcon />The Best Online Furniture Store</span>
          <h1>The Best Selection of <span>Furniture Online</span></h1>
          <p>Online furniture apps simplify home shopping with convenience, variety, and affordability. Browse easily, compare prices.</p>
          <div className="imgs">
            <img src={store} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
        <div className="images">
          <img src={furniture} alt="" />
          <span><span className="icon"><ListAltOutlinedIcon fontSize="20px" /></span>Express Delivery Service</span>
          <span><span className="icon"><HeadsetMicOutlinedIcon fontSize="20px" /></span>24x7 Customer Support</span>
        </div>
      </Container>
    </div>
  )
}

export default Landing;