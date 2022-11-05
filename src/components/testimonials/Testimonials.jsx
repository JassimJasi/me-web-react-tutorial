import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptatem quas voluptates quibusdam quidem nemo quos. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.",
  },
  {
    avatar: AVTR2,
    name: "Lores Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptatem quas voluptates quibusdam quidem nemo quos. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptatem quas voluptates quibusdam quidem nemo quos. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.",
  },
  {
    avatar: AVTR4,
    name: "Lorem Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptas quae voluptatem quas voluptates quibusdam quidem nemo quos. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Cilents</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
