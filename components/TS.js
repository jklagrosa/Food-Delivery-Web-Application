import styles from "../styles/Ts.module.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDish } from "react-icons/bi";

const TodaySpecial = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>
            Today&apos;s <span>Special</span>
          </h1>
          <Row className="g-3 mx-auto">
            <Col>
              <Card style={{ width: "18rem" }} id={styles._ts_card_box}>
                {/* <Card.Header>Featured</Card.Header>
                 */}
                <Card.Img variant="top" src={"/bgs/p1.jpg"} />
                <Card.Body>
                  <Card.Text id={styles._ts_card_dish}>
                    With supporting text.
                  </Card.Text>
                  <Card.Title>
                    <h2 className={styles._ts_card_title}>Pork Adobo</h2>
                  </Card.Title>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <BsGlobe2 /> Filipino
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <AiOutlineStar /> 4.5/5
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Course" style={{ all: "unset" }}>
                      <BiDish /> Side Dish
                    </abbr>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {" "}
                  <Button variant="primary">Go somewhere</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TodaySpecial;
