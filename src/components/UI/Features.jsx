import { Container } from "reactstrap"

// Material Icons
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Image
import feature from "../../assets/all_images/feature.jpg"

function Features() {
  const items = [
    {
      id: 1,
      icon: <CheckOutlinedIcon />,
      title: "Manage markets with empowerment",
      p: "Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success."
    },
    {
      id: 2,
      icon: <LayersOutlinedIcon />,
      title: "Manage your design and architecture",
      p: "Achieve task completion optimization by effectively managing time and resources, ensuring timely delivery and efficiency."
    },
    {
      id: 3,
      icon: <LockOutlinedIcon />,
      title: "Presentations in real-time",
      p: "Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success."
    },
  ];
  
  return (
    <div className="features" id="Features">
      <Container>
        <div className="image">
          <img src={feature} alt="" />
        </div>
        <div className="features_content">
          <span>Focused on achievind</span>
          <h2>Achievement Via Our Distinct <br /> Methodology</h2>
          <a href="#Home">Learn More <ArrowRightAltOutlinedIcon /></a>
          <div className="items">
            {
              items.map(x => (
                <div className="item" key={x.id}>
                  <div className="icon">{x.icon}</div>
                  <div className="item_content">
                    <h4>{x.title}</h4>
                    <p>{x.p}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features