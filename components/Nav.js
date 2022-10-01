import { useState, useEffect } from "react";
import styles from "../styles/Nav.module.scss";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";

const Navigation = () => {
  const [colorChange, setColorChange] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);

  return (
    <>
      <Navbar
        expand="lg"
        id={
          colorChange
            ? styles._main_navbar_wrapper_color_change
            : styles._main_navbar_wrapper
        }
        className={
          colorChange ? "animate__animated animate__fadeIn animate__faster" : ""
        }
        // id={colorChange ? styles._main_navbar_wrapper_color_change : ""}
      >
        <Container fluid="lg">
          {/* SHOW ON LARGE SCREENS */}
          <Link href="/">
            <Navbar.Brand className={styles._brand_logo}>
              LutongBahay
            </Navbar.Brand>
          </Link>
          {/* END */}
          {/* =========================================== */}
          {/* SHOW ON SMALL SCREENS */}
          <Link href="/">
            <Navbar.Brand className={styles._brand_logo_SMALL}>LB</Navbar.Brand>
          </Link>
          {/* END */}

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ all: "unset" }}
          >
            <MdMenu className={styles._hambuger_icon} onClick={handleShow} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles._navbar_collapse_hide_on_991_px}
          >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                // className={styles._navbar_links}
                id={styles._navbar_links_active}
                onClick={() => router.push("/")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href={router.pathname !== "/" ? router.push("/") : "#services"}
                className={styles._navbar_links}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href={router.pathname !== "/" ? router.push("/") : "#ts"}
                className={styles._navbar_links}
              >
                Today&#39;s Special
              </Nav.Link>
              <Nav.Link
                href={router.pathname !== "/" ? router.push("/") : "#ft"}
                className={styles._navbar_links}
              >
                Featured
              </Nav.Link>
              <Nav.Link
                href={router.pathname !== "/" ? router.push("/") : "#pr"}
                className={styles._navbar_links}
              >
                Promo
              </Nav.Link>
              <Nav.Link
                href={router.pathname !== "/" ? router.push("/") : "#faq"}
                className={styles._navbar_links}
              >
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SHOW OFFCANVAS BELOW 991PX */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        id={styles._offcanvas_navbar_links}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>LutongBahay</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a href="#home" onClick={() => router.push("/")}>
            Home
          </a>
          <br />
          <a href={router.pathname !== "/" ? router.push("/") : "#services"}>
            Services
          </a>
          <br />
          <a href={router.pathname !== "/" ? router.push("/") : "#ts"}>
            Today&#39;s Special
          </a>
          <br />
          <a href={router.pathname !== "/" ? router.push("/") : "#ft"}>
            Featured
          </a>
          <br />
          <a href={router.pathname !== "/" ? router.push("/") : "#pr"}>Promo</a>
          <br />
          <a href={router.pathname !== "/" ? router.push("/") : "#faq"}>FAQ</a>
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}
    </>
  );
};

export default Navigation;
