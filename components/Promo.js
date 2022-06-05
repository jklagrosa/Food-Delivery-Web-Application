import styles from "../styles/Promo.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Promo = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="g-3">
            <Col xs={12} lg={6}>
              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <Row className="g-3">
                    <Col xs={12} sm={12}>
                      <div className={styles._promo_box}>
                        <h5>Something hot. Something tasty.</h5>
                        <h4>Salt-and-Pepper Steak</h4>
                        <h6>₱110</h6>
                      </div>
                    </Col>
                    <Col xs={12} sm={12}>
                      <div className={styles._promo_box_1}>
                        <h5>Hundreds of flavors under one roof.</h5>
                        <h4>Pork Adobo Paksiw.</h4>
                        <h6>₱178</h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={6}>
                  <div className={styles._promo_box_2}>
                    <h5>Life is dull without good food.</h5>
                    <h4>Zen Salads Corner.</h4>
                    <h6>₱215</h6>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <div className={styles._promo_box_3}>
                <h5>We are always here to serve you.</h5>
                <h4>Zuppa Toscana.</h4>
                <h6>₱300</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Promo;
