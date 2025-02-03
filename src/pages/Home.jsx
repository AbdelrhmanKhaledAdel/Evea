import Helmet from "../components/Helmet/Helmet"
import Landing from "../components/UI/Landing";
import Services from "../components/UI/Services";
import Features from "../components/UI/Features";
import About from "../components/UI/About";
import Pricing from "../components/UI/Pricing";
import Testimonials from "../components/UI/Testimonials";
import Blog from "../components/UI/Blog";
import Contact from "../components/UI/Contact";
import { Container } from "reactstrap";
import { useState } from "react";

// Material
import Button from '@mui/material/Button';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// Images
import amazon from "../assets/all_images/amazon.svg";
import google from "../assets/all_images/google.svg";
import lenovo from "../assets/all_images/lenovo.svg";
import paypal from "../assets/all_images/paypal.svg";
import shopify from "../assets/all_images/shopify.svg";
import spotify from "../assets/all_images/spotify.svg";



function Home() {
  const [contentItem, setContentItem] = useState(0);

  const items = [
    {
      id: 1,
      title: "How long does it take to ship my order ?",
      content: "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are processed and shipped within 1-3 business days. You'll receive a tracking number once your order is shipped, which you can use to monitor its delivery status."
    },
    {
      id: 2,
      title: "What payment methods do you accept ?",
      content: "We accept various payment methods, including credit/debit cards, PayPal, and sometimes other online payment platforms."
    },
    {
      id: 3,
      title: "What shipping options do you have ?",
      content: "Standard Shipping: This is our regular shipping option, which typically takes 3-7 business days for delivery, depending on your location and the shipping carrier."
    },
    {
      id: 4,
      title: "How do i make changes to an existing order ?",
      content: "International Shipping We also offer international shipping for customers outside the country. Delivery times for international orders vary widely based on destination and shipping method chosen. It typically ranges from 6-21 business days."
    },
    {
      id: 5,
      title: "When will my order arrive ?",
      content: "Processing Time Before your order is shipped, it needs to be processed by the seller. Processing times can vary based on factors such as order volume, item availability, and any customization or personalization required. Typically, sellers aim to process orders within 1-3 business days, but this can vary."
    },
  ]

  const companies = [
    {
      id: 1,
      img: amazon
    },
    {
      id: 2,
      img: google
    },
    {
      id: 3,
      img: lenovo
    },
    {
      id: 4,
      img: paypal
    },
    {
      id: 5,
      img: shopify
    },
    {
      id: 6,
      img: spotify
    },
  ];

  return (
    <Helmet>
      <Landing />
      <Services />
      <Features />
      <div className="parallax">
        <Container>
          <h1>A Detailed Examination Of A Specific Case</h1>
          <p>Together, we manage and empower markets by utilizing both established and emerging channels for potential growth.</p>
          <div className="buttons">
            <Button variant="contained">Join Now</Button>
            <Button className="outline" variant="outline">See Video</Button>
          </div>
        </Container>
      </div> 
      <About />
      <Pricing />
      <div className="faqs">
        <Container>
          <div className="title">
            <span>FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="items">
            {
              items.map(x => (
                <div className={`item ${contentItem === x.id ? 'active' : ''}`} key={x.id}>
                  <head onClick={() => contentItem === x.id ? setContentItem(0): setContentItem(x.id)}>
                    <h5>{x.title}</h5>
                    <span className="icon_item"><KeyboardArrowDownRoundedIcon /></span>
                  </head>
                  <p>{x.content}</p>
                </div>
              ))
            }
          </div>
        </Container>
      </div>
      <Testimonials />
      <div className="companies">
        <Container>
          <h2>Trusted by Leading Companies</h2>
          <div className="items">
            {
              companies.map(x => (
                <div className="item" key={x.id}>
                  <img src={x.img} alt="" />
                </div>
              ))
            }
          </div>
        </Container>
      </div>
      <Blog />
      <Contact />
    </Helmet>
  )
}

export default Home;