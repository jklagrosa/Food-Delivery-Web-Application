import { useEffect, useState } from "react";

import styles from "../styles/C_W.module.scss";
import { Badge } from "react-bootstrap";
import { BsFillSuitHeartFill, BsFillCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openWishList, openCart, resetWishAndCart } from "../store/c_w";

import { useSelector } from "react-redux";

const CartAndWishList = () => {
  const [colorChange, setColorChange] = useState(false);
  const [the_user_logged_in, setThe_User_Is_Logged_in] = useState(false);

  const dispatch = useDispatch();

  const { prod_wishlist, prod_cart } = useSelector((state) => state?.product);

  // CHECKS IF THE USER IS LOGGED IN OR NOT
  useEffect(() => {
    let is_user_logged_in = window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user"))
      : false;
    if (is_user_logged_in) {
      setThe_User_Is_Logged_in(true);
    } else {
      setThe_User_Is_Logged_in(false);
    }
  }, [the_user_logged_in]);

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

  // useEffect(() => {
  //   if (!colorChange) {
  //     dispatch(resetWishAndCart());

  //     console.log(`FLOATING ICONS DISAPPEAR!`);
  //   }
  // }, [dispatch]);

  // OPEN WISHLIST
  const openWishListFunc = () => {
    return dispatch(openWishList({ wish: true, cart: false }));
  };
  // END

  // ======================================

  // OPEN CART
  const openCartFunc = () => {
    return dispatch(openCart({ cart: true, wish: false }));
  };
  // END

  return (
    <>
      <div
        id={!colorChange ? styles.hide_Wrapper : styles.Wrapper}
        className={
          !colorChange ? "" : "animate__animated animate__bounceInRight"
        }
      >
        <div className={styles._icons_wrapper} onClick={openCartFunc}>
          <abbr
            title="Your Cart"
            style={{ cursor: "default" }}
            className={styles.Contact_Tooltip}
          >
            <BsFillCartFill
              className={styles.Contact_Icons}
              style={{ cursor: "pointer" }}
            />
            {the_user_logged_in && (
              <sup>
                <Badge className={styles.Cart_Badge}>{prod_cart?.length}</Badge>
              </sup>
            )}
          </abbr>
        </div>

        {/* ========================== */}

        <div className={styles._icons_wrapper} onClick={openWishListFunc}>
          <abbr
            title="Your Wishlist"
            style={{ cursor: "default" }}
            className={styles.Contact_Tooltip}
          >
            <BsFillSuitHeartFill
              className={styles.Contact_Icons}
              style={{ cursor: "pointer" }}
            />
            {the_user_logged_in && (
              <sup>
                <Badge className={styles.Cart_Badge}>
                  {prod_wishlist?.length}
                </Badge>
              </sup>
            )}
          </abbr>
        </div>
      </div>
    </>
  );
};

export default CartAndWishList;
