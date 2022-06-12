import styles from "../styles/Ts.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsGlobe2, BsFillSuitHeartFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";

const TodaySpecial = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>
            Today&apos;s <span>Special</span>
          </h1>
          <Row className="g-4 mx-auto">
            <Col xs={12} sm={6} lg={4}>
              <Card id={styles._ts_card_box}>
                {/* <Card.Header>Featured</Card.Header>
                 */}
                <abbr title="Click to see more" style={{ all: "unset" }}>
                  <Card.Img
                    variant="top"
                    src={"/dish/d5.jpg"}
                    id={styles._ts_card_img}
                  />
                </abbr>
                <Card.Body>
                  <Card.Title>
                    <h2 className={styles._ts_card_title}>Pork Adobo</h2>
                  </Card.Title>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <BsGlobe2 className={styles._ts_card_icon} /> Filipino
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <AiOutlineStar className={styles._ts_card_icon} /> 4.5/5
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Course" style={{ all: "unset" }}>
                      <BiDish className={styles._ts_card_icon} /> Side Dish
                    </abbr>
                  </Card.Text>

                  <Card.Text id={styles._ts_card_dish_price}>
                    <abbr title="Price" style={{ all: "unset" }}>
                      <RiPriceTag3Line id={styles._ts_card_icon_price} /> ₱110
                    </abbr>
                  </Card.Text>
                </Card.Body>
                <Card.Footer id={styles._ts_card_footer}>
                  <div className={styles._ts_card_btn_wrapper}>
                    <abbr title="Add to Wishlist" style={{ all: "unset" }}>
                      <button>
                        <BsFillSuitHeartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                    <span className="mx-2"></span>
                    <abbr title="Add to Cart" style={{ all: "unset" }}>
                      <button>
                        <BsFillCartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            {""}
            <Col xs={12} sm={6} lg={4}>
              <Card id={styles._ts_card_box}>
                {/* <Card.Header>Featured</Card.Header>
                 */}
                <Card.Img
                  variant="top"
                  src={"/dish/d6.jpg"}
                  id={styles._ts_card_img}
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className={styles._ts_card_title}>Pork Adobo</h2>
                  </Card.Title>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <BsGlobe2 className={styles._ts_card_icon} /> Filipino
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <AiOutlineStar className={styles._ts_card_icon} /> 4.5/5
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Course" style={{ all: "unset" }}>
                      <BiDish className={styles._ts_card_icon} /> Side Dish
                    </abbr>
                  </Card.Text>

                  <Card.Text id={styles._ts_card_dish_price}>
                    <abbr title="Price" style={{ all: "unset" }}>
                      <RiPriceTag3Line id={styles._ts_card_icon_price} /> ₱110
                    </abbr>
                  </Card.Text>
                </Card.Body>
                <Card.Footer id={styles._ts_card_footer}>
                  <div className={styles._ts_card_btn_wrapper}>
                    <abbr title="Add to Wishlist" style={{ all: "unset" }}>
                      <button>
                        <BsFillSuitHeartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                    <span className="mx-2"></span>
                    <abbr title="Add to Cart" style={{ all: "unset" }}>
                      <button>
                        <BsFillCartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            {""}
            <Col xs={12} sm={6} lg={4}>
              <Card id={styles._ts_card_box}>
                {/* <Card.Header>Featured</Card.Header>
                 */}
                <Card.Img
                  variant="top"
                  src={"/dish/d7.jpg"}
                  id={styles._ts_card_img}
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className={styles._ts_card_title}>Pork Adobo</h2>
                  </Card.Title>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <BsGlobe2 className={styles._ts_card_icon} /> Filipino
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <AiOutlineStar className={styles._ts_card_icon} /> 4.5/5
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Course" style={{ all: "unset" }}>
                      <BiDish className={styles._ts_card_icon} /> Side Dish
                    </abbr>
                  </Card.Text>

                  <Card.Text id={styles._ts_card_dish_price}>
                    <abbr title="Price" style={{ all: "unset" }}>
                      <RiPriceTag3Line id={styles._ts_card_icon_price} /> ₱110
                    </abbr>
                  </Card.Text>
                </Card.Body>
                <Card.Footer id={styles._ts_card_footer}>
                  <div className={styles._ts_card_btn_wrapper}>
                    <abbr title="Add to Wishlist" style={{ all: "unset" }}>
                      <button>
                        <BsFillSuitHeartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                    <span className="mx-2"></span>
                    <abbr title="Add to Cart" style={{ all: "unset" }}>
                      <button>
                        <BsFillCartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            {""}
            <Col xs={12} sm={6} lg={4}>
              <Card id={styles._ts_card_box}>
                {/* <Card.Header>Featured</Card.Header>
                 */}
                <Card.Img
                  variant="top"
                  src={"/dish/d8.jpg"}
                  id={styles._ts_card_img}
                />
                <Card.Body>
                  <Card.Title>
                    <h2 className={styles._ts_card_title}>Pork Adobo</h2>
                  </Card.Title>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <BsGlobe2 className={styles._ts_card_icon} /> Filipino
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <AiOutlineStar className={styles._ts_card_icon} /> 4.5/5
                    </abbr>
                  </Card.Text>
                  <Card.Text id={styles._ts_card_dish}>
                    <abbr title="Course" style={{ all: "unset" }}>
                      <BiDish className={styles._ts_card_icon} /> Side Dish
                    </abbr>
                  </Card.Text>

                  <Card.Text id={styles._ts_card_dish_price}>
                    <abbr title="Price" style={{ all: "unset" }}>
                      <RiPriceTag3Line id={styles._ts_card_icon_price} /> ₱110
                    </abbr>
                  </Card.Text>
                </Card.Body>
                <Card.Footer id={styles._ts_card_footer}>
                  <div className={styles._ts_card_btn_wrapper}>
                    <abbr title="Add to Wishlist" style={{ all: "unset" }}>
                      <button>
                        <BsFillSuitHeartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                    <span className="mx-2"></span>
                    <abbr title="Add to Cart" style={{ all: "unset" }}>
                      <button>
                        <BsFillCartFill id={styles._ts_card_btn_func} />
                      </button>
                    </abbr>
                  </div>
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
