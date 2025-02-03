import { Container } from "reactstrap";

// Image
import logo from "../../assets/all_images/logo (1).png"

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
  const items = [
    {
      id: 1,
      title: "Company",
      links : ["About", "Services", "Portfolio", "Blog", "Contact"]
    },
    {
      id: 2,
      title: "Product",
      links : ["Services", "About Us", "News & Stories", "Roadmap", ""]
    },
    {
      id: 3,
      title: "Important Links",
      links : ["Our Journeys", "Roadmap", "Pricing Plans", "Privacy Policy", "Terms & Conditions"]
    },
  ]

console.log(items.map(x => x.links[4]));


  return (
    <footer>
      <div className="items">
        <Container>
          <div className="item">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>This may include the company&apos;s address, phone number, email address, and links to social media profiles.</p>
            <a href="#"><EmailIcon /> Info@zoyothemes.com</a>
            <a href="#"><LocalPhoneIcon /> (888) 253 145 148</a>
          </div>
          {
            items.map(x => (
              <div className="item" key={x.id}>
                <h4>{x.title}</h4>
                <ul>
                  <li><p>{x.links[0]}</p></li>
                  <li><p>{x.links[1]}</p></li>
                  <li><p>{x.links[2]}</p></li>
                  <li><p>{x.links[3]}</p></li>
                  {x.links[4] !== "" ? <li><p>{x.links[4]}</p></li>: ""}
                </ul>
              </div>
            )
            )
          }
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <p>2025© Evea - Zoyothemes.com</p>
          <ul className="links">
            <li><FacebookIcon /></li>
            <li><GoogleIcon /></li>
            <li><XIcon /></li>
            <li><GitHubIcon /></li>
          </ul>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;