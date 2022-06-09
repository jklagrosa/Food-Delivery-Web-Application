import { useEffect, useState } from "react";
import styles from "../../styles/Product.module.scss";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import TopNav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

import TS from "../../components/TS";

import { useRouter } from "next/router";

import { BsGlobe2, BsFillSuitHeartFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";

const ProductID = () => {
  const router = useRouter();
  return (
    <>
      <TopNav />
      <Nav />
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => router.push("/")}
              className={styles._product_bread_crumbs}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className={styles._product_bread_crumbs}>
              Product
            </Breadcrumb.Item>
            <Breadcrumb.Item active className={styles._product_bread_crumbs}>
              Data
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row className="gy-0 gx-4" id={styles._product_row_wrapper}>
            <Col md={12} lg={8}>
              <div className={styles._product_display}>
                <img src="/bgs/p1.jpg" alt="p1.jpg" />

                <div className={styles._product_cart_n_wish}>
                  <abbr title="Add to your Wishlist" style={{ all: "unset" }}>
                    <button>
                      <BsFillSuitHeartFill
                        className={styles._product_cart_n_wish_ICON}
                      />{" "}
                      Add to Wishlist
                    </button>
                  </abbr>

                  <abbr title="Add to your Cart" style={{ all: "unset" }}>
                    <button>
                      <BsFillCartFill
                        className={styles._product_cart_n_wish_ICON}
                      />{" "}
                      Add to Cart
                    </button>
                  </abbr>
                </div>

                <h1>Adobo Pork</h1>

                <abbr title="Cuisine" style={{ all: "unset" }}>
                  <span className={styles._product_span}>
                    <BsGlobe2 className={styles._product_icon} /> Filipino
                  </span>
                </abbr>
                {/*  */}
                <abbr title="Ratings" style={{ all: "unset" }}>
                  <span className={styles._product_span}>
                    <AiOutlineStar className={styles._product_icon} /> 4.5/5
                  </span>
                </abbr>
                {/*  */}
                <abbr title="Course" style={{ all: "unset" }}>
                  <span className={styles._product_span}>
                    <BiDish className={styles._product_icon} /> Main Course
                  </span>
                </abbr>

                <h2 className={styles._product_display_price}>₱300</h2>

                <p className={styles._product_desc}>
                  Fugiat magna labore duis Lorem duis. Magna mollit consectetur
                  proident exercitation qui aute dolor excepteur culpa. Lorem
                  elit occaecat excepteur magna amet eiusmod dolor deserunt amet
                  cillum sunt dolore. Deserunt sit consequat et cupidatat id.
                </p>

                <p className={styles._product_desc}>
                  Fugiat magna labore duis Lorem duis. Magna mollit consectetur
                  proident exercitation qui aute dolor excepteur culpa. Lorem
                  elit occaecat excepteur magna amet eiusmod dolor deserunt amet
                  cillum sunt dolore. Deserunt sit consequat et cupidatat id.
                </p>

                <h2 className={styles._product_ingredient_h2}>Ingredients</h2>
                <ul>
                  <li>2 lbs. pork shoulder cubed</li>
                  <li>4 bay leaves</li>
                  <li>½ cup soy sauce</li>
                  <li>½ cup white vinegar</li>
                  <li>7 ½ ounces lemon lime soda</li>
                  <li>2 tablespoons oyster sauce</li>
                  <li>2 teaspoons peppercorn crushed</li>
                  <li>2 heads garlic</li>
                  <li>1 onion</li>
                  <li>¼ cup cooking oil</li>
                </ul>

                <h2 className={styles._product_ingredient_h2}>Nutrition</h2>
                <ul>
                  <li>Calories: 528kcal</li>
                  <li>Carbohydrates: 13g</li>
                  <li>Protein: 48g</li>
                  <li>Fat: 30g</li>
                  <li>Saturated Fat: 7g</li>
                  <li>Polyunsaturated Fat: 6g</li>
                </ul>

                <hr className={styles._product_divider} />
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className={styles._product_you_may_like}>
                <h2>You may like</h2>
                <div className={styles._product_you_may_like_box}>
                  <h5 className={styles._product_title}>Adobo Manok</h5>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BsGlobe2 />
                    Filipino
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <AiOutlineStar />
                    4.5/5
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BiDish />
                    Side Dish
                  </span>
                </div>
                {/* ================== */}
                <div className={styles._product_you_may_like_box}>
                  <h5 className={styles._product_title}>Adobo Manok</h5>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BsGlobe2 />
                    Filipino
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <AiOutlineStar />
                    4.5/5
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BiDish />
                    Side Dish
                  </span>
                </div>

                {/* ======================== */}

                <div className={styles._product_you_may_like_box}>
                  <h5 className={styles._product_title}>Adobo Manok</h5>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BsGlobe2 />
                    Filipino
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <AiOutlineStar />
                    4.5/5
                  </span>
                  <span className={styles._product_you_may_like_SPAN}>
                    <BiDish />
                    Side Dish
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <TS />

      <Footer />
      <Copyright />
    </>
  );
};

export default ProductID;
