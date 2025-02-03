import { useEffect } from "react";
import { Container } from "reactstrap";

//Images
import logo from "../../assets/all_images/logo (1).png";

// Material
import Button from '@mui/material/Button';

// Material Icons
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Features",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Pricing",
    },
    {
      id: 6,
      link: "Testimonials",
    },
    {
      id: 7,
      link: "Blog",
    },
    {
      id: 8,
      link: "Contact",
    },
  ]

  const handleOpenClick = () => {
    document.querySelector(".mobil").classList.toggle("open")
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 240) {
            document.querySelector("header").setAttribute("class", "scroll")
      }else {
            document.querySelector("header").setAttribute("class", "")
      }
    })
  },[])

  return (
    <header>
      <Container>
        <div className="logo">
          <img src={logo} alt="" />
          <div className="menu" onClick={handleOpenClick}>
            <MenuIcon />
          </div>
        </div>
        <div className="mobil">
          <ul className="links">
            {
              links.map(x => (
                <li key={x.id}><a href={`#${x.link}`}>{x.link}</a></li>
              ))
            }
          </ul>
          <Button variant="contained"><CloudDownloadTwoToneIcon sx={{marginRight: "10px"}} />Download</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header;