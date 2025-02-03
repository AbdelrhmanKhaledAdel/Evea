import { Container } from "reactstrap";

// Material Icons
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';


function Services() {
  const items = [
    {
      id: 1,
      icon: <WidgetsRoundedIcon />,
      title: "Market Research",
      p: "Gain a comprehensive understanding of your industry landscape.",
    },
    {
      id: 2,
      icon: <LightbulbOutlinedIcon />,
      title: "User Experience",
      p: "Evaluate the viability and potential of new products or services.",
    },
    {
      id: 3,
      icon: <LeaderboardTwoToneIcon />,
      title: "Digital Marketing",
      p: "Benchmark your performance against competitors, identify strengths.",
    },
    {
      id: 4,
      icon: <ManageAccountsTwoToneIcon />,
      title: "SEO Services",
      p: "Anticipate market shifts and emerging trends to stay ahead of the curve.",
    },
    {
      id: 5,
      icon: <ShieldOutlinedIcon />,
      title: "Market Research",
      p: "Our market research services are designed to provide maximum value.",
    },
    {
      id: 6,
      icon: <RocketLaunchOutlinedIcon />,
      title: "Software Development",
      p: "We go beyond data collection to provide actionable insights.",
    },
    {
      id: 7,
      icon: <LayersOutlinedIcon />,
      title: "Affiliate Marketing",
      p: "We understand that every business is unique. That's why we offer.",
    },
    {
      id: 8,
      icon: <CameraOutlinedIcon />,
      title: "Website Development",
      p: "In today's competitive market, timing is everything. Our efficient.",
    },
  ]

  return (
    <div className="services" id="Services">
      <Container>
        <div className="title">
          <span>Services</span>
          <h2>Build a customer - centric marketing <br /> strategy</h2>
          <p>Ligula risus auctor tempus magna feugit lacinia.</p>
        </div>
        <div className="items">
          {
            items.map(x => (
              <div className="item" key={x.id}>
                <div className="icon">{x.icon}</div>
                <h3>{x.title}</h3>
                <p>{x.p}</p>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Services