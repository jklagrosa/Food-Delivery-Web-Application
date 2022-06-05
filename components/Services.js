import styles from "../styles/Services.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdOutlineDeliveryDining,
  MdOutlineFastfood,
  MdPayment,
} from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg">
          <Row className="g-3">
            <Col xs={12} sm={6} md={4}>
              <div className={styles._services_card}>
                <MdOutlineDeliveryDining className={styles._icon} />
                <h1>Delivering happiness.</h1>
                <p>A hungry must not go to food the food will go to hungry.</p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <div className={styles._services_card}>
                <MdOutlineFastfood className={styles._icon} />
                <h1>Tasty food on wheels.</h1>
                <p>More food, more happiness, less time and less prices.</p>
              </div>
            </Col>

            <Col xs={12} sm={12} md={4}>
              <div className={styles._services_card}>
                <MdPayment className={styles._icon} />
                <h1>Easy payment.</h1>
                <p>We accept different kinds of payments.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
