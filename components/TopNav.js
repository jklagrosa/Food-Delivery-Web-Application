import { useState, useEffect } from "react";
import styles from "../styles/TopNav.module.scss";
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";

const TopNav = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg">
          <Row className="gy-0 gx-3">
            <Col xs={4}>
              <p className={styles.Contact}>
                <AiFillPhone className={styles.Contact_Icons_phone} />{" "}
                0987-654-32169
              </p>
            </Col>

            <Col xs={4}>
              <p className={styles.Contact}>
                <MdDeliveryDining className={styles.Contact_Icons} /> Free
                delivery for orders over ₱800.00
              </p>
            </Col>

            <Col xs={4} className="text-center">
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
              <span className="mx-3"></span>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopNav;
