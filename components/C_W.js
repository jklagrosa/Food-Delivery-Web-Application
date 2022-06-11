import { useEffect, useState } from "react";

import styles from "../styles/C_W.module.scss";
import { Badge } from "react-bootstrap";
import { BsFillSuitHeartFill, BsFillCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const CartAndWishList = () => {
  const [colorChange, setColorChange] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 400) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);

  // OPEN WISHLIST
    const openWishList = () => {
      dispatch() 
    }
  // END

  // ======================================

  // OPEN CART

  // END

  return (
    <>
      <div
        id={!colorChange ? styles.hide_Wrapper : styles.Wrapper}
        className={
          !colorChange ? "" : "animate__animated animate__bounceInRight"
        }
      >
        <div className={styles._icons_wrapper}>
          <abbr
            title="Your Cart"
            style={{ cursor: "default" }}
            className={styles.Contact_Tooltip}
          >
            <BsFillCartFill
              className={styles.Contact_Icons}
              style={{ cursor: "pointer" }}
            />

            <sup>
              <Badge className={styles.Cart_Badge}>13</Badge>
            </sup>
          </abbr>
        </div>

        {/* ========================== */}

        <div className={styles._icons_wrapper}>
          <abbr
            title="Your Wishlist"
            style={{ cursor: "default" }}
            className={styles.Contact_Tooltip}
          >
            <BsFillSuitHeartFill
              className={styles.Contact_Icons}
              style={{ cursor: "pointer" }}
            />
            <sup>
              <Badge className={styles.Cart_Badge}>13</Badge>
            </sup>
          </abbr>
        </div>
      </div>
    </>
  );
};

export default CartAndWishList;
