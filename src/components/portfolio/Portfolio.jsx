import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
  {
    id: 5,
    image: IMG5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
  {
    id: 6,
    image: IMG6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    github: "https://www.github.com/Ripan-Roy",
    demo: "https://www.dev.ripan_roy",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <figure class="snip1527">
          <div class="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
              alt="pr-sample23"
            />
          </div>
          <figcaption>
            <div class="date">
              <span class="day">28</span>
              <span class="month">Oct</span>
            </div>
            <h3>The World Ended Yesterday</h3>
            <p>
              You know what we need, Hobbes? We need an attitude. Yeah, you
              can't be cool if you don't have an attitude.
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527 hover">
          <div class="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg"
              alt="pr-sample24"
            />
          </div>
          <figcaption>
            <div class="date">
              <span class="day">17</span>
              <span class="month">Nov</span>
            </div>
            <h3>An Abstract Post Heading</h3>
            <p>
              Sometimes the surest sign that intelligent life exists elsewhere
              in the universe is that none of it has tried to contact us.
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg"
              alt="pr-sample25"
            />
          </div>
          <figcaption>
            <div class="date">
              <span class="day">01</span>
              <span class="month">Dec</span>
            </div>
            <h3>Down with this sort of thing</h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </section>
  );
};

export default Portfolio;
