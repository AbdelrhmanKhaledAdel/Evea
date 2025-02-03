import { Container } from "reactstrap"

// Image
import clint03 from "../../assets/all_images/client-03.jpg";
import clint04 from "../../assets/all_images/client-04.jpg";
import clint05 from "../../assets/all_images/client-05.jpg";
import clint07 from "../../assets/all_images/client-07.jpg";

// Swiper
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      title: "Best service here!",
      p: `I've tried many services, but none compare to the excellence provided here!
        From start to finish, the team has been attentive, professional, and committed...`,
      imgUser: clint03,
      nameUser: "Barbara McIntosh",
      pUser: "Senior Software Developer"
    },
    {
      id: 2,
      title: "No doubt, spend. in is the best!",
      p: `Without a doubt, Spend in stands out as the absolute best.Their exceptional
      quality, reliablity, and customer service are unmatched. I have complete....`,
      imgUser: clint04,
      nameUser: "Moritika Kazuki",
      pUser: "Finance Manager at Mangan"
    },
    {
      id: 3,
      title: "It's just incredible!",
      p: `I am extremely delighated with the exceptional service provided by NioLand.
          Their expert support system, efficient tools, and strategic solutions have
          truly....`,
      imgUser: clint05,
      nameUser: "Jimmy Bartney",
      pUser: "Product Manager At Picko Lab"
    },
    {
      id: 4,
      title: "Satisfied user here!",
      p: `As a satisfied user, I can confidence say that my experience with NioLand has
      been outstanding. The service, support, and solutions provided have...`,
      imgUser: clint07,
      nameUser: "Natasha Romanoff",
      pUser: "Black Widow"
    },
  ]

  return (
    <div className="testimonials" id="Testimonials">
      <Container>
        <div className="title">
          <span>Our Clients</span>
          <h2>Stories From Our Customers</h2>
        </div>
        <Swiper
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        speed={1150}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        >
          {
            testimonials.map(x => (
              <SwiperSlide key={x.id}>
                <div className="testimonial">
                  <h3>{x.title}</h3>
                  <p>{x.p}</p>
                  <div className="testimonial_user">
                    <div className="image">
                      <img src={x.imgUser} alt="" />
                    </div>
                    <div className="user_content">
                      <h5>{x.nameUser}</h5>
                      <p>{x.pUser}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </div>
  )
}

export default Testimonials