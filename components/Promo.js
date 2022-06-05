import styles from "../styles/Promo.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Promo = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="g-3">
            <Col xs={12} md={6}>
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <Row className="g-3">
                    <Col xs={12} md={12}>
                      Magna nostrud fugiat labore fugiat. Laborum qui in eu
                      pariatur in ipsum do ullamco ea. Nulla pariatur veniam
                      velit aute commodo sunt.
                    </Col>
                    <Col xs={12} md={12}>
                      Magna nostrud fugiat labore fugiat. Laborum qui in eu
                      pariatur in ipsum do ullamco ea. Nulla pariatur veniam
                      velit aute commodo sunt.
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  Nisi consequat aliquip minim ad eiusmod magna elit magna
                  veniam Lorem quis. Ullamco fugiat eu labore deserunt et
                  nostrud sit irure velit magna dolore. Sit duis culpa
                  incididunt qui pariatur quis consectetur voluptate ullamco
                  aute ea minim ex. Occaecat amet cupidatat occaecat minim culpa
                  officia laboris ea sint proident velit non fugiat. Magna duis
                  pariatur adipisicing reprehenderit irure.
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              Sint et ipsum reprehenderit nostrud cillum adipisicing. Nisi ut
              minim cupidatat ad nulla consectetur ad labore exercitation.
              Deserunt minim mollit sint aute magna elit mollit amet elit
              adipisicing aute. Anim nulla minim duis occaecat voluptate
              excepteur esse ea. Irure sint elit sit aliquip aute nisi voluptate
              sit. Tempor in cupidatat cupidatat cupidatat. Amet pariatur ipsum
              culpa exercitation sunt cillum ad sint non non voluptate occaecat.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Promo;
