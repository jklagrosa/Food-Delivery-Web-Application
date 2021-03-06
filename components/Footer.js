import styles from "../styles/Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gy-4 gx-3">
            <Col xs={12} md={4}>
              <div className={styles._footer_box}>
                <h3>LutongBahay</h3>
                <p className={styles._footer_box_desc}>
                  If you want to try this web application, you can login as Demo
                  user. Click the login button to redirect to login page and
                  then click the{" "}
                  <code>
                    <q>Login as demo user</q>
                  </code>{" "}
                  button.
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className={styles._footer_box}>
                <h6 className={styles._footer_box_h6}>Contact the dev.</h6>
                <a
                  href="https://www.linkedin.com/in/jklagrosa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br></br>
                <a
                  href="https://github.com/jklagrosa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <br></br>
                <a
                  href="mailto:jklagrosa.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gmail
                </a>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className={styles._footer_box}>
                <h6 className={styles._footer_box_h6}>Tech Used</h6>
                <p className={styles._footer_box_tech_used}>HTML5</p>
                <p className={styles._footer_box_tech_used}>CSS3</p>
                <p className={styles._footer_box_tech_used}>Sass</p>
                <p className={styles._footer_box_tech_used}>Bootstrap</p>
                <p className={styles._footer_box_tech_used}>JavaScript</p>
                <p className={styles._footer_box_tech_used}>React JS</p>
                <p className={styles._footer_box_tech_used}>Next JS</p>
                <p className={styles._footer_box_tech_used}>Redux Toolkit</p>
                <p className={styles._footer_box_tech_used}>MongoDB</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
