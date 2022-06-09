import { useState, useEffect } from "react";
import styles from "../styles/TopNav.module.scss";
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

import { BsPerson } from "react-icons/bs";
import { MdDeliveryDining, MdLogin } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";

const TopNav = () => {
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
    </>
  );
};

export default TopNav;
