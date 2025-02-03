import { Container } from "reactstrap"

// Images
import about from "../../assets/all_images/feature-iphone.png";

// Material Icons
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

function About() {
  const items = [
    {
      id: 1,
      icon: <SmartphoneRoundedIcon />,
      bg: "#f0fdf4",
      title: "1. Download",
    },
    {
      id: 2,
      icon: <DescriptionOutlinedIcon />,
      bg: "#fef2f2",
      title: "2. Set Profile",
    },
    {
      id: 3,
      icon: <RocketLaunchOutlinedIcon />,
      bg: "#5d87ff1a",
      title: "3. Start",
    },
  ]

  return (
    <div className="about" id="About">
      <Container>
        <div className="about_content">
          <span>Services</span>
          <h2>Get Started In Minutes: <br /> Download The App, Create Your <br /> Profile</h2>
          <p>Digital payment has revolutionized the way we make financial transactions today With Rible you can enjoy the convenience of making secure & hassle-free payments online. Our platform provides you with a quick and eary.</p>
          <div className="items">
            {
              items.map(x => (
                <div className="item" key={x.id}>
                  <div className="icon" style={{"--bg": x.bg}}>{x.icon}</div>
                  <div className="item_content">
                    <h3>{x.title}</h3>
                    <p>Join the millions already benefitting from.</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="images">
          <img src={about} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default About