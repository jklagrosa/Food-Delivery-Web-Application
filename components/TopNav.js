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
import { VscSignIn } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { resetWishAndCart } from "../store/c_w";

import { GET_WISH_LIST, GET_CART_ITEMS, USER_LOGOUT } from "../store/wishNcart";

import axios from "axios";
import { BASE_URL, headersOpts } from "../utils/others";
import { useRouter } from "next/router";

import Swal from "sweetalert2";

import debounce from "lodash.debounce";

const TopNav = () => {
  const [showWish, setShowWish] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // =========SEARCH===================
  const [search_prod, setSearchProd] = useState("");
  // =========END=====================
  const [text, setText] = useState(
    "Amet consectetur reprehenderit nostrud ullamco id velit enimaute laboris in. Deserunt ut elit labore elit mollit ametLorem ipsum reprehenderit reprehenderit consectetur velit.Nisi reprehenderit quis excepteur tempor eiusmod ut ullamcoamet ipsum. Mollit consequat ea reprehenderit commodo dolorduis consequat amet culpa ex est qui."
  );

  // WISHLIST
  const [fetch_wish, setFetchWish] = useState(null);
  // END

  // =================

  // CART
  const [fetch_cart, setFetchCart] = useState(null);
  // END

  // LOADING STATE
  const [checkOutLoading, setCheckOutLoading] = useState(true);
  // END

  const dispatch = useDispatch();
  const router = useRouter();

  const { userWishList, userCart } = useSelector((state) => state?.c_w);

  const { prod_wishlist, prod_cart } = useSelector((state) => state?.product);

  const [search_results, setSearchResults] = useState(null);
  const [map_results, setMapResults] = useState(null);
  const [search_not_found, setSearchNotFound] = useState(true);

  // CHECKS IF THE USER IS LOGGED IN OR NOT
  const [the_user_logged_in, setThe_User_Is_Logged_in] = useState(false);
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

  // END
  // ======================================================================

  // ========SEARCH FUNCTION==================

  useEffect(() => {
    if (search_prod !== "" || search_prod !== " ") {
      const new_search_results = search_results?.filter((x) =>
        x.title.toLowerCase().includes(search_prod.toLowerCase())
      );
      if (new_search_results?.length > 0) {
        setMapResults(new_search_results);
        setSearchNotFound(false);
      } else {
        setSearchNotFound(true);
        setMapResults(null);
      }
    }

    if (search_prod === "" || search_prod === " ") {
      setMapResults(null);
      setSearchNotFound(true);
    }
  }, [search_prod]);

  // console.log(search_results);

  useEffect(() => {
    const GET_SEARCH_RESULTS = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/search`,
        {
          title: search_prod,
        },
        headersOpts
      );

      if (!response.data.results) {
        return setSearchResults(null);
      }

      if (response && response.data && response.data.results) {
        setSearchResults(response.data.data);
      }
    };
    GET_SEARCH_RESULTS();
  }, []);

  // useEffect(() => {
  //   // const getResults = async () => {
  //   //   const response = await axios.get(`${BASE_URL}/api/search`, headersOpts);
  //   //   if (!response.data.results) {
  //   //     return setSearchResults(null);
  //   //   }
  //   //   if (response && response.data && response.data.results) {
  //   //     setSearchResults(response.data.data);
  //   //     // console.log(response.data.data);
  //   //   }
  //   // };
  //   // getResults();
  // }, [search_prod]);

  // END

  useEffect(() => {
    if (prod_cart !== null) {
      let reversed_cart = Array.from(prod_cart);
      setFetchCart(reversed_cart.reverse());
      // console.log(prod_wishlist);
    }
  }, [prod_cart]);

  useEffect(() => {
    if (prod_wishlist !== null) {
      let reversed_wishlist = Array.from(prod_wishlist);
      setFetchWish(reversed_wishlist.reverse());
      // setFetchWish(prod_wishlist);
      // console.log(prod_wishlist);
    }
  }, [prod_wishlist]);

  useEffect(() => {
    if (userWishList) {
      setShowWish(true);
      setShowCart(false);
    }
  }, [userWishList]);

  useEffect(() => {
    if (userCart) {
      setShowCart(true);
      setShowWish(false);
    }
  }, [userCart]);

  // =====================================

  // WISHLIST
  const handleCloseWishList = () => {
    setShowWish(false);
    dispatch(resetWishAndCart());
  };
  const handleShowWishList = () => setShowWish(true);
  // END

  // ====================================================

  // CART
  const handleCloseCart = () => {
    setShowCart(false);
    dispatch(resetWishAndCart());
  };
  const handleShowCart = () => setShowCart(true);
  // END

  // ====================================================

  // SEARCH
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);
  // END

  const handleRemoveWishList = async (pid) => {
    const response = await axios.post(
      `${BASE_URL}/api/wishlist-del`,
      {
        id: pid,
      },
      headersOpts
    );
    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_WISH_LIST(response.data.data));
    }
  };

  // ======================CART======================

  const handleRemoveCart = async (pid) => {
    const response = await axios.post(
      `${BASE_URL}/api/cart-del`,
      {
        id: pid,
      },
      headersOpts
    );
    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_CART_ITEMS(response.data.data));
    }
  };

  // =========================

  // SEE MORE DETAILS
  const handleSeeMore = (id) => {
    if (id) {
      dispatch(resetWishAndCart());
      router.push({
        pathname: "/product/[id]",
        query: { id: id },
      });
    }
  };
  // END

  // ======================================

  // SEE MORE DETAILS - SEARCH
  const handleSeeMore_SEARCH = (id) => {
    if (id) {
      dispatch(resetWishAndCart());
      return router.push({
        pathname: "/product-redirect",
        query: { id: id },
      });
    }
  };
  // END SEARCH

  // ========================================

  // FETCH ALL CART ITEMS
  const GET_NEW_UPDATED_CART_ITEM = async () => {
    const response = await axios.get(`${BASE_URL}/api/cart`, headersOpts);
    if (!response.data.success) {
      toast.error("Cannot get all your cart items.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_CART_ITEMS(response.data.data));
    }
  };
  // END

  // ============
  useEffect(() => {
    GET_NEW_UPDATED_CART_ITEM();
    // console.log("RAN RAN RAN!");
  }, []);
  // ============

  // INCREMENT CART
  const handleINCREMENT = async (pid) => {
    const response = await axios.post(
      `${BASE_URL}/api/increment`,
      {
        id: pid,
      },
      headersOpts
    );
    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    if (response && response.data && response.data.success) {
      await GET_NEW_UPDATED_CART_ITEM();

      // console.log("Item Incremented", response.data.data);
    }
  };
  // END

  // ====================================

  // DECREMENT
  const handleDECREMENT = async (pid) => {
    const response = await axios.post(
      `${BASE_URL}/api/decrement`,
      {
        id: pid,
      },
      headersOpts
    );
    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    if (response && response.data && response.data.success) {
      await GET_NEW_UPDATED_CART_ITEM();

      // console.log("Item Incremented", response.data.data);
    }
  };
  // END

  // CHECK OUT
  const handleCheckOut = async () => {
    setCheckOutLoading(false);

    const response = await axios.post(`${BASE_URL}/api/check-out`, headersOpts);
    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }

    if (response && response.data && response.data.success) {
      await GET_NEW_UPDATED_CART_ITEM();

      // =============================
      Swal.fire(
        "You're the best!",
        "Thank you for choosing us! We appreciate it.",
        "success"
      );
    }

    setCheckOutLoading(true);

    return response.data;
  };
  // END

  // TOTAL TO PAY
  let total = 0;
  fetch_cart?.forEach((el) => {
    return (total += el.price * el.qty);
  });

  // console.log(total);

  // END

  // =======================================================

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
                  onClick={handleShowSearch}
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
                  onClick={handleShowCart}
                />

                <sup>
                  <Badge className={styles.Cart_Badge}>
                    {prod_cart?.length}
                  </Badge>
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
                  <Badge className={styles.Cart_Badge}>
                    {prod_wishlist?.length}
                  </Badge>
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

              <span className="mx-2"></span>
              {/* IF USER IS NOT LOGGED IN */}
              {!the_user_logged_in && (
                <abbr
                  title="Login as Demo User"
                  style={{ all: "unset", cursor: "default" }}
                  className={styles.Contact_Tooltip}
                >
                  <span
                    className={styles._log_in_btn}
                    id={styles._log_in_btn_hover}
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/login")}
                  >
                    <MdLogin className={styles.Contact_Icons} />
                    Login
                  </span>
                </abbr>
              )}
              {/* END */}

              {/* ================================================== */}

              {/* IF THE USER IS LOGGED IN */}
              {the_user_logged_in && (
                <abbr
                  title="Logout as Demo User"
                  style={{ all: "unset", cursor: "default" }}
                  className={styles.Contact_Tooltip}
                >
                  <span
                    className={styles._log_in_btn}
                    id={styles._log_in_btn_hover}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.localStorage.clear();
                      router.replace("/login");
                      dispatch(USER_LOGOUT(true)); // here
                    }}
                  >
                    <VscSignIn className={styles.Contact_Icons} />
                    Logout
                  </span>
                </abbr>
              )}
              {/* END */}
              {/* ===================================================== */}
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
          {fetch_wish == 0 && (
            <h1 className={styles.is_empty_state}>Your Wishlist is Empty.</h1>
          )}

          {/* =============== */}

          {fetch_wish &&
            fetch_wish.map((pw) => (
              <div id={styles._top_nav_offcanvas_wishlist_boxes} key={pw._id}>
                <Row className="gy-0 gx-3">
                  <Col xs={4}>
                    <abbr title="See more details" style={{ all: "unset" }}>
                      <img
                        src={`/dish/${pw.img}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSeeMore(pw._id)}
                      />
                    </abbr>
                  </Col>
                  <Col xs={8}>
                    <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                      {pw.title}
                    </h6>
                    <span>
                      <BsGlobe2 /> {pw.cuisine}
                    </span>
                    <span>
                      <AiOutlineStar /> {pw.ratings}/5
                    </span>
                    <br />
                    <span>
                      <BiDish /> {pw.course}
                    </span>
                    <span>
                      <RiPriceTag3Line /> ₱{pw.price}
                    </span>
                    <p>{`${pw.desc1?.substring(0, 50)}...`}</p>

                    <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                      <abbr
                        title={`Remove ${pw.title} from Wishlist`}
                        style={{ all: "unset" }}
                      >
                        <MdClose
                          id={
                            styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON
                          }
                          onClick={() => handleRemoveWishList(pw._id)}
                        />
                      </abbr>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
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
            Your Cart
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {fetch_cart == 0 && (
            <h1 className={styles.is_empty_state}>Your Cart is Empty.</h1>
          )}

          {fetch_cart &&
            fetch_cart.map((pc) => (
              <div id={styles._top_nav_offcanvas_wishlist_boxes} key={pc._id}>
                <Row className="gy-0 gx-3">
                  <Col xs={4}>
                    <img src={`/dish/${pc.img}`} />
                  </Col>
                  <Col xs={8}>
                    <h6 id={styles._top_nav_offcanvas_wishlist_boxes_title}>
                      {pc.title}
                    </h6>
                    <span>
                      <BsGlobe2 /> {pc.cuisine}
                    </span>
                    <span>
                      <AiOutlineStar /> {pc.ratings}/5
                    </span>
                    <br />
                    <span>
                      <BiDish /> {pc.course}
                    </span>
                    <span>
                      <RiPriceTag3Line /> ₱{pc.price}
                    </span>

                    <div
                      id={styles._top_nav_offcanvas_wishlist_boxes_ADD_TO_CART}
                    >
                      <button onClick={() => handleDECREMENT(pc._id)}>-</button>
                      <input
                        type="text"
                        value={pc.qty}
                        readOnly
                        // onChange={handleQtyUpdated}
                      />
                      <button onClick={() => handleINCREMENT(pc._id)}>+</button>
                    </div>

                    <div id={styles._top_nav_offcanvas_wishlist_boxes_DELETE}>
                      <abbr
                        title={`Remove ${pc.title} from Cart`}
                        style={{ all: "unset" }}
                      >
                        <MdClose
                          id={
                            styles._top_nav_offcanvas_wishlist_boxes_DELETE_ICON
                          }
                          onClick={() => handleRemoveCart(pc._id)}
                        />
                      </abbr>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
        </Offcanvas.Body>

        {fetch_cart?.length > 0 && (
          <div className={styles._cart_checkout_wrapper}>
            <h5>Total: ₱{total}</h5>
            {checkOutLoading && the_user_logged_in && (
              <button
                onClick={handleCheckOut}
                className={styles._cart_checkout_active_btn}
              >
                Check Out
              </button>
            )}

            {/* LOADING CHECKOUT */}
            {!checkOutLoading && (
              <button className={styles._cart_checkout_loading_btn}>
                Please wait...
              </button>
            )}
            {/* ======================================== */}
            {/* IF USER IS NOT LOGGED IN MAKE THE CHECK OUT BTN DISABLED */}
            {checkOutLoading && !the_user_logged_in && (
              <button
                className={styles._cart_checkout_disable_btn}
                onClick={() => {
                  dispatch(USER_LOGOUT(true));
                  router.replace("/login");
                }}
              >
                Login to Continue
              </button>
            )}
          </div>
        )}
      </Offcanvas>
      {/* END */}

      {/* ============================================================ */}

      {/* SEARCH */}
      <Offcanvas
        placement="top"
        show={showSearch}
        onHide={handleCloseSearch}
        id={styles._top_nav_offcanvas_search}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            id={styles._top_nav_offcanvas_wishlist_title}
            style={{ color: "#f0c808" }}
          >
            LutongBahay
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id={styles._top_nav_offcanvas_search_wrapper}>
            <input
              type="text"
              placeholder="Search product..."
              value={search_prod}
              onChange={(e) => {
                // search_debounce
                setSearchProd(e.target.value);
              }}
            />

            {/* ========================================== */}
            {search_not_found && <p>No results found.</p>}
            {/* ========================================= */}

            <div id={styles._top_nav_offcanvas_search_RESULTS}>
              <Row className="gy-0 gx-3">
                {map_results?.length > 0 &&
                  map_results?.map((sr) => (
                    <Col
                      xs={6}
                      md={4}
                      lg={3}
                      key={sr._id}
                      onClick={() => handleSeeMore_SEARCH(sr._id)}
                    >
                      <div id={styles._top_nav_offcanvas_search_RESULTS_COLS}>
                        <abbr title="See more details" style={{ all: "unset" }}>
                          <img src={`/dish/${sr.img}`} />
                          <h6>{sr.title}</h6>
                        </abbr>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}
    </>
  );
};

export default TopNav;
