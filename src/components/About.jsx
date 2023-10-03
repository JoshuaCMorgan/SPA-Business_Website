import aboutImg from "../assets/images/about.jpg";
import { Title } from "./Title";

export const About = () => {
  return (
    <section id="about" className="section">
      <Title title="about" subTitle="us"></Title>
      <div className="section-center about-center">
        <div className="about-img">
          <img className="about-photo" src={aboutImg} alt="" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a className="btn" href="#">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
