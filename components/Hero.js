import styles from "../styles/Hero.module.scss";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>
            Our <span className={styles.highlight}>first priority</span> is
            delivering the <span className={styles.highlight}>best food</span>{" "}
            for our customers<span>.</span>
          </h1>

          <button className={styles.hero_btns1}>
            <a style={{ all: "unset" }} href="#ts">
              Today&apos;s Special
            </a>
          </button>
          <span className="mx-2"></span>
          <button className={styles.hero_btns2}>
            <a style={{ all: "unset" }} href="#ft">
              Featured
            </a>
          </button>
        </Container>
      </div>
    </>
  );
};

export default Hero;
