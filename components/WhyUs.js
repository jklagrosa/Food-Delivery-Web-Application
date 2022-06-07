import styles from "../styles/WhyUs.module.scss";
import { GiKnifeFork } from "react-icons/gi";
import {
  MdOutlineDeliveryDining,
  MdOutlineFastfood,
  MdPayment,
} from "react-icons/md";

import { BsStar } from "react-icons/bs";

import { Container, Row, Col } from "react-bootstrap";

const WhyUs = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>
            Why <span>Us</span>
          </h1>
          <Row className="gy-5 gx-3">
            <Col xs={6} md={4}>
              <div className={styles._why_us_card}>
                <GiKnifeFork className={styles._why_us_card_icon} />
                <h2>Over 64 Dishes Served</h2>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className={styles._why_us_card}>
                <MdOutlineDeliveryDining className={styles._why_us_card_icon} />
                <h2>Now food delivery is so easy.</h2>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className={styles._why_us_card}>
                <BsStar className={styles._why_us_card_icon} />
                <h2>Recommended by every food lover.</h2>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className={styles._why_us_card}>
                <MdPayment className={styles._why_us_card_icon} />
                <h2>Your world is more secure with us.</h2>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <div className={styles._why_us_card}>
                <MdOutlineFastfood className={styles._why_us_card_icon} />
                <h2>Life&apos;s too short for boring food.</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyUs;
