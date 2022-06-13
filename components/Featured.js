import styles from "../styles/Ts.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsGlobe2, BsFillSuitHeartFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const TodaySpecial = () => {
  const [data, setData] = useState(null);
  const [HAS_DATA, SET_HAS_DATA] = useState(true);
  const featured = useSelector((state) => state.dish.featured);

  const router = useRouter();

  useEffect(() => {
    if (featured !== null) {
      setData(featured);
      SET_HAS_DATA(true);
    } else {
      setData(null);
      SET_HAS_DATA(false);
    }
  }, [featured]);

  // ======================

  const handleSeeMore = (id) => {
    if (id) {
      router.push({
        pathname: "/product/[id]",
        query: { id: id },
      });
    }
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          {HAS_DATA && (
            <>
              <h1>
                <span>Featured</span> Cuisines
              </h1>
              <Row className="g-4 mx-auto">
                {data?.map((res) => (
                  <Col xs={12} sm={6} lg={4} key={res._id}>
                    <Card id={styles._ts_card_box}>
                      <abbr title="Click to see more" style={{ all: "unset" }}>
                        <Card.Img
                          variant="top"
                          src={`/dish/${res.img}`}
                          alt={res.title}
                          id={styles._ts_card_img}
                          onClick={() => handleSeeMore(res._id)}
                        />
                      </abbr>
                      <Card.Body>
                        <Card.Title>
                          <h2 className={styles._ts_card_title}>{res.title}</h2>
                        </Card.Title>
                        <Card.Text id={styles._ts_card_dish}>
                          <abbr title="Cuisine" style={{ all: "unset" }}>
                            <BsGlobe2 className={styles._ts_card_icon} />{" "}
                            {res.cuisine}
                          </abbr>
                        </Card.Text>
                        <Card.Text id={styles._ts_card_dish}>
                          <abbr title="Ratings" style={{ all: "unset" }}>
                            <AiOutlineStar className={styles._ts_card_icon} />{" "}
                            {res.ratings}/5
                          </abbr>
                        </Card.Text>
                        <Card.Text id={styles._ts_card_dish}>
                          <abbr title="Course" style={{ all: "unset" }}>
                            <BiDish className={styles._ts_card_icon} />{" "}
                            {res.course}
                          </abbr>
                        </Card.Text>

                        <Card.Text id={styles._ts_card_dish_price}>
                          <abbr title="Price" style={{ all: "unset" }}>
                            <RiPriceTag3Line id={styles._ts_card_icon_price} />{" "}
                            ₱{res.price}
                          </abbr>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer id={styles._ts_card_footer}>
                        <div className={styles._ts_card_btn_wrapper}>
                          <abbr
                            title="Add to Wishlist"
                            style={{ all: "unset" }}
                          >
                            <button>
                              <BsFillSuitHeartFill
                                id={styles._ts_card_btn_func}
                              />
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
                ))}
              </Row>
            </>
          )}

          {/* IF THERE'S NO DATA TO SHOW. DISPLAY THE ERROR MESSAGES */}

          {!HAS_DATA && (
            <>
              <h1 id={styles._error_theres_no_data_to_show}>
                Something went wrong, Cannot show products.
              </h1>
              <button
                id={styles._error_theres_no_data_to_show_BUTTON}
                onClick={() => router.reload()}
              >
                Reload the page
              </button>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default TodaySpecial;
