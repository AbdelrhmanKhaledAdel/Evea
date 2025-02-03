import { Container } from "reactstrap"

// Images
import img01 from "../../assets/all_images/05.jpg";
import img02 from "../../assets/all_images/07.jpg";
import img03 from "../../assets/all_images/04.jpg";
import user03 from "../../assets/all_images/client-05.jpg";
import user05 from "../../assets/all_images/client-03.jpg";
import user07 from "../../assets/all_images/client-07.jpg";

function Blog() {
  const items = [
    {
      id: 1,
      img: img01,
      title: "Spotlight — Equinox Collection by Shane Griffin",
      imgUser: user03,
      nameUser: "Credon catla",
      august: "August 2"
    },
    {
      id: 2,
      img: img02,
      title: "Random Explorations with Cinema 4D and Redshift",
      imgUser: user05,
      nameUser: "Jessica Smith",
      august: "August 3"
    },
    {
      id: 3,
      img: img03,
      title: "Step by step guide for conducting usability",
      imgUser: user07,
      nameUser: "Petric Camp",
      august: "August 8"
    },
  ]

  return (
    <div className="blog" id="Blog">
      <Container>
        <div className="title">
          <span>BLOG</span>
          <h2>Check the latest news about our <br /> company in our blog.</h2>
        </div>
        <div className="items">
          {
            items.map(x => (
              <div className="item" key={x.id}>
                <div className="img">
                  <img src={x.img} alt="" />
                </div>
                <div className="item_content">
                  <h3>{x.title}</h3>
                  <p>As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...</p>
                  <div className="user">
                    <div className="user_profile">
                      <img src={x.imgUser} alt="" />
                      <h4>{x.nameUser}</h4>
                    </div>
                    <p>{x.august}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Blog