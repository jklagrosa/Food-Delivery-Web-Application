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

import dbConnection from "../../utils/conn";
import Dish from "../../models/dish";

export async function getStaticPaths() {
  await dbConnection();
  const get_id = await Dish.find({});
  const paths = get_id.map((x) => {
    return {
      params: { id: `${x._id}` },
    };
  });

  if (!get_id) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  await dbConnection();
  const { params } = context;
  const find_products = await Dish.findOne({ _id: `${params.id}` });

  // GET ALL DISH TO DISPLAY
  const GET_PRODUCTS_TO_DISPLAY = await Dish.find({});
  // END

  if (!find_products || !GET_PRODUCTS_TO_DISPLAY) {
    return {
      props: {
        data: null,
        display: null,
      },
    };
  }

  return {
    props: {
      data: JSON.stringify(find_products),
      display: JSON.stringify(GET_PRODUCTS_TO_DISPLAY),
    },
  };
}

const ProductID = ({ data, display }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  const [display_product, set_Display_Product] = useState(null);

  const [HAS_PRODUCT, SET_HAS_PRODUCT] = useState(true);

  const [HAS_DISPLAY, SET_HAS_DISPLAY] = useState(true);

  const parsed_product = data ? JSON.parse(data) : false;

  const parsed_display = display ? JSON.parse(display) : false;

  useEffect(() => {
    if (!parsed_product) {
      setProduct(null);
      SET_HAS_PRODUCT(false);
    } else {
      setProduct(parsed_product);
      SET_HAS_PRODUCT(true);
    }
  }, []);

  // ===========================

  useEffect(() => {
    if (!parsed_display) {
      set_Display_Product(null);
      SET_HAS_DISPLAY(false);
    } else {
      set_Display_Product(parsed_display);
      SET_HAS_DISPLAY(true);
    }
  }, []);

  return (
    <>
      <TopNav />
      <Nav />
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          {HAS_PRODUCT && (
            <>
              <Breadcrumb>
                <Breadcrumb.Item
                  onClick={() => router.push("/")}
                  className={styles._product_bread_crumbs}
                >
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  className={styles._product_bread_crumbs}
                >
                  Product
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  className={styles._product_bread_crumbs}
                >
                  {product?.title}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Row className="gy-0 gx-4" id={styles._product_row_wrapper}>
                <Col md={12} lg={8}>
                  <div className={styles._product_display}>
                    <img src={`/dish/${product?.img}`} alt={product?.title} />

                    <div className={styles._product_cart_n_wish}>
                      <abbr
                        title="Add to your Wishlist"
                        style={{ all: "unset" }}
                      >
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

                    <h1>{product?.title}</h1>

                    <abbr title="Cuisine" style={{ all: "unset" }}>
                      <span className={styles._product_span}>
                        <BsGlobe2 className={styles._product_icon} />{" "}
                        {product?.cuisine}
                      </span>
                    </abbr>
                    {/*  */}
                    <abbr title="Ratings" style={{ all: "unset" }}>
                      <span className={styles._product_span}>
                        <AiOutlineStar className={styles._product_icon} />{" "}
                        {product?.ratings}/5
                      </span>
                    </abbr>
                    {/*  */}
                    <abbr title="Course" style={{ all: "unset" }}>
                      <span className={styles._product_span}>
                        <BiDish className={styles._product_icon} />{" "}
                        {product?.course}
                      </span>
                    </abbr>

                    <h2 className={styles._product_display_price}>
                      ₱{product?.price}
                    </h2>

                    <p className={styles._product_desc}>{product?.desc1}</p>

                    <p className={styles._product_desc}>{product?.desc2}</p>

                    <h2 className={styles._product_ingredient_h2}>
                      Ingredients
                    </h2>
                    {product?.ing?.map((x) => (
                      <ul key={x}>
                        <li>{x}</li>
                      </ul>
                    ))}

                    <h2 className={styles._product_ingredient_h2}>Nutrition</h2>
                    {product?.nut?.map((y) => (
                      <ul key={y}>
                        <li>{y}</li>
                      </ul>
                    ))}

                    {/* <hr className={styles._product_divider} /> */}
                  </div>
                </Col>
                <Col md={12} lg={4} id={styles._product_hide_on_SMALL_DEVICE}>
                  {HAS_DISPLAY && (
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
                    </div>
                  )}
                </Col>
              </Row>
            </>
          )}

          {!HAS_PRODUCT && (
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

      <TS />

      <Footer />
      <Copyright />
    </>
  );
};

export default ProductID;
