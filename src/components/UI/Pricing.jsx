import { Container } from "reactstrap";

// Material
import Button from '@mui/material/Button';

// Material Icons
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Image
import vector01 from "../../assets/all_images/vector-1.png"
import vector02 from "../../assets/all_images/vector-2.png"
import vector03 from "../../assets/all_images/vector-3.png"

function Pricing() {

  const items = [
    {
      id: 1,
      img: vector01,
      h5: "Standard",
      number: "49",
      content: <ul>
      <li className="true"><CheckRoundedIcon />1 Gb Storage</li>
      <li className="true"><CheckRoundedIcon />3 Domain Names</li>
      <li className="true"><CheckRoundedIcon />5 FTP Users</li>
      <li className="false"><CloseRoundedIcon />Free Support</li>
      <li className="false"><CloseRoundedIcon />Free SSI Certificate</li>
    </ul>
    },
    {
      id: 2,
      img: vector02,
      h5: "Premium",
      number: "49",
      content: <ul>
       <li className="true"><CheckRoundedIcon />1 Gb Storage</li>
      <li className="true"><CheckRoundedIcon />3 Domain Names</li>
      <li className="true"><CheckRoundedIcon />5 FTP Users</li>
      <li className="true"><CheckRoundedIcon />Free Support</li>
      <li className="false"><CloseRoundedIcon />Free SSI Certificate</li>
    </ul>
    },
    {
      id: 3,
      img: vector03,
      h5: "Enterprise",
      number: "49",
      content: <ul>
      <li className="true"><CheckRoundedIcon />1 Gb Storage</li>
      <li className="true"><CheckRoundedIcon />3 Domain Names</li>
      <li className="true"><CheckRoundedIcon />5 FTP Users</li>
      <li className="true"><CheckRoundedIcon />Free Support</li>
      <li className="true"><CheckRoundedIcon />Free SSI Certificate</li>
    </ul>
    },
  ]

  return (
    <div className="pricing" id="Pricing">
      <Container>
        <div className="title">
          <span>Pricing</span>
          <h1>Get the power of the professional services with the simple price</h1>
          <div className="toggle">
            <span>
              <input id="toggle_monthly" type="radio" checked />
              <label htmlFor="toggle_monthly">Monthly</label>
            </span>
            <span>
              <input id="toggle_annual" type="radio" />
              <label htmlFor="toggle_annual">Annual</label>
            </span>
          </div>
          <p>Save up to 15% with Annual Plan.</p>
        </div>
        <div className="items">
          {
            items.map(x => (
              <div className="item" key={x.id}>
                <head>
                  <img src={x.img} alt="" />
                  <h5>{x.h5}</h5>
                  <h2><sup>$</sup> <span>{x.number}</span></h2>
                  <span style={{color: "#707070", textAlign: "center"}}>per month</span>
                </head>
                <div className="item_content" style={{width: "100%"}}>
                  {x.content}
                  <Button sx={{width: "100%"}} variant="contained">Buy {x.h5}</Button>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Pricing;