import { Container } from "reactstrap"

// Material
import Button from '@mui/material/Button';

// Material Icons
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';

function Contact() {
  const items = [
    {
      id: 1,
      icon : <LocationOnOutlinedIcon />,
      p: "123 King Street, London W60 10250",
      span: "See more"
    },
    {
      id: 2,
      icon : <EmailOutlinedIcon />,
      p: "support@zoyothemes.com",
      span: "Say hello"
    },
    {
      id: 3,
      icon : <PhoneAndroidOutlinedIcon />,
      p: "(+01) 1234 5678 00",
      span: "call now"
    },
  ]

  return (
    <div className="contact" id="Contact">
      <Container>
        <div className="contact_page">
          <span>Contact Us</span>
          <h2>We&apos;re open to talk to <br /> good people.</h2>
          <div className="items">
            {
              items.map(x => (
                <div className="item" key={x.id}>
                  <div className="icon">{x.icon}</div>
                  <div>
                    <p>{x.p}</p>
                    <span>{x.span}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <form>
          <div className="form_page">
            <div className="input">
              <label>First Name</label>
              <input type="text" placeholder="Your first name..." />
            </div>
            <div className="input">
              <label>Last Name</label>
              <input type="text" placeholder="Your last name..." />
            </div>
          </div>
          <div className="form_page">
            <div className="input">
              <label>Email Address</label>
              <input type="text" placeholder="Your email..." />
            </div>
            <div className="input">
              <label>Phone Number</label>
              <input type="text" placeholder="Type phone number..." />
            </div>
          </div>
          <div className="form_page">
            <div className="input">
              <label>Messages</label>
              <textarea placeholder="Type messages..." style={{height: "100px"}}></textarea>
            </div>
          </div>
          <Button variant="contained" style={{ marginTop: "1rem"}}>Send Messages <SendOutlinedIcon sx={{marginLeft: "10px"}} /></Button>
        </form>
      </Container>
    </div>
  )
}

export default Contact