import { useState, useEffect } from "react";
import styles from "../styles/TopNav.module.scss";
import { Container, Row, Col, Badge, Offcanvas } from "react-bootstrap";
import {
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";

// import { BsPerson } from "react-icons/bs";
import { MdDeliveryDining, MdLogin, MdClose } from "react-icons/md";
// import { VscSignIn } from "react-icons/vsc";

const TopNav = () => {
  const [showWish, setShowWish] = useState(false);

  const [text, setText] = useState(
    "Amet consectetur reprehenderit nostrud ullamco id velit enimaute laboris in. Deserunt ut elit labore elit mollit ametLorem ipsum reprehenderit reprehenderit consectetur velit.Nisi reprehenderit quis excepteur tempor eiusmod ut ullamcoamet ipsum. Mollit consequat ea reprehenderit commodo dolorduis consequat amet culpa ex est qui."
  );

  const handleCloseWishList = () => setShowWish(false);
  const handleShowWishList = () => setShowWish(true);

  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg">
          <Row className="gy-0 gx-3">
            <Col xs={12} lg={4} className={styles._top_nav_col_hide}>
              <p className={styles.Contact}>
                <AiFillPhone className={styles.Contact_Icons_phone} />{" "}
                0987-654-32169
              </p>
            </Col>

            <Col xs={12} lg={4} className={styles._top_nav_col_hide}>
              <p className={styles.Contact}>
                <MdDeliveryDining className={styles.Contact_Icons} /> Free
                delivery for orders over ₱800.00
              </p>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={4}
              className="text-center"
              id={styles._top_nav_col_show_1900px}
            >
              <abbr
                title="Search Product"
                style={{ cursor: "default" }}
                className={styles.Contact_Tooltip}
              >
                <AiOutlineSearch
                  className={styles.Contact_Icons}
                  style={{ cursor: "pointer" }}
                />
              </abbr>
              <span className="mx-2"></span>
              {/* ========================================= */}

              <abbr
                title="Your Cart"
                style={{ cursor: "default" }}
                className={styles.Contact_Tooltip}
              >
                <AiOutlineShoppingCart
                  className={styles.Contact_Icons}
                  style={{ cursor: "pointer" }}
                />

                <sup>
                  <Badge className={styles.Cart_Badge}>3</Badge>
                </sup>
              </abbr>

              <span className="mx-2"></span>

              {/* ========================== */}

              <abbr
                title="Your Wishlist"
                style={{ cursor: "default" }}
                className={styles.Contact_Tooltip}
              >
                <AiOutlineHeart
                  className={styles.Contact_Icons}
                  style={{ cursor: "pointer" }}
                  onClick={handleShowWishList}
                />
                <sup>
                  <Badge className={styles.Cart_Badge}>3</Badge>
                </sup>
              </abbr>

              {/* ================================= */}
              {/* IF USER IS LOGGED IN */}

              {/* <span className="mx-2"></span>

              <span className={styles._log_in_btn}>
                <VscSignIn className={styles.Contact_Icons} />
                Logout
              </span> */}

              {/* END */}

              {/* ================================= */}
              {/* IF USER IS NOT LOGGED IN */}
              <span className="mx-2"></span>

              <abbr
                title="Login as Demo User"
                style={{ all: "unset", cursor: "default" }}
                className={styles.Contact_Tooltip}
              >
                <span
                  className={styles._log_in_btn}
                  id={styles._log_in_btn_hover}
                  style={{ cursor: "pointer" }}
                >
                  <MdLogin className={styles.Contact_Icons} />
                  Login
                </span>
              </abbr>
              {/* END */}
              {/* 
              <abbr
                title="Login"
                style={{ all: "unset", cursor: "default" }}
                className={styles.Contact_Tooltip}
              >
                <MdLogin
                  className={styles.Contact_Icons}
                  style={{ cursor: "pointer" }}
                />
                <span
                  className={styles.Contact}
                  style={{ margin: "0", color: "#f0c808" }}
                >
                  Login
                </span>
              </abbr> */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* WISHLIST */}
      <Offcanvas
        placement="start"
        show={showWish}
        onHide={handleCloseWishList}
        id={styles._top_nav_offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={styles._top_nav_offcanvas_wishlist_title}>
            Your WishList
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id={styles._top_nav_offcanvas_wishlist_boxes}>
            <Row className="gy-0 gx-3">
              <Col xs={4}>
                <img src="/bgs/p1.jpg" />
              </Col>
              <Col xs={8}>
                <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                  Lumpiang Shanghai
                </h6>
                <span>
                  <BsGlobe2 /> Filipino
                </span>
                <span>
                  <AiOutlineStar /> 4.5/5
                </span>
                <br />
                <span>
                  <BiDish /> Side Dish
                </span>
                <span>
                  <RiPriceTag3Line /> ₱300
                </span>
                <p>{`${text.substring(0, 50)}...`}</p>

                <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                  <MdClose
                    id={styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div id={styles._top_nav_offcanvas_wishlist_boxes}>
            <Row className="gy-0 gx-3">
              <Col xs={4}>
                <img src="/bgs/p1.jpg" />
              </Col>
              <Col xs={8}>
                <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                  Lumpiang Shanghai
                </h6>
                <span>
                  <BsGlobe2 /> Filipino
                </span>
                <span>
                  <AiOutlineStar /> 4.5/5
                </span>
                <br />
                <span>
                  <BiDish /> Side Dish
                </span>
                <span>
                  <RiPriceTag3Line /> ₱300
                </span>
                <p>{text.substring(0, 50) + "..."}</p>

                <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                  <MdClose
                    id={styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ================================================================= */}

      {/* CART */}
      <Offcanvas
        placement="start"
        show={showCart}
        onHide={handleCloseCart}
        id={styles._top_nav_offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={styles._top_nav_offcanvas_wishlist_title}>
            Your WishList
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id={styles._top_nav_offcanvas_wishlist_boxes}>
            <Row className="gy-0 gx-3">
              <Col xs={4}>
                <img src="/bgs/p1.jpg" />
              </Col>
              <Col xs={8}>
                <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                  Lumpiang Shanghai
                </h6>
                <span>
                  <BsGlobe2 /> Filipino
                </span>
                <span>
                  <AiOutlineStar /> 4.5/5
                </span>
                <br />
                <span>
                  <BiDish /> Side Dish
                </span>
                <span>
                  <RiPriceTag3Line /> ₱300
                </span>
                <p>{`${text.substring(0, 50)}...`}</p>

                <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                  <MdClose
                    id={styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div id={styles._top_nav_offcanvas_wishlist_boxes}>
            <Row className="gy-0 gx-3">
              <Col xs={4}>
                <img src="/bgs/p1.jpg" />
              </Col>
              <Col xs={8}>
                <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                  Lumpiang Shanghai
                </h6>
                <span>
                  <BsGlobe2 /> Filipino
                </span>
                <span>
                  <AiOutlineStar /> 4.5/5
                </span>
                <br />
                <span>
                  <BiDish /> Side Dish
                </span>
                <span>
                  <RiPriceTag3Line /> ₱300
                </span>
                <p>{text.substring(0, 50) + "..."}</p>

                <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                  <MdClose
                    id={styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}
    </>
  );
};

export default TopNav;
