import styles from "../styles/Nav.module.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className={styles._main_navbar_wrapper}>
        <Container fluid="lg">
          <Link href="/">
            <Navbar.Brand className={styles._brand_logo}>
              LutongBahay
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                // className={styles._navbar_links}
                id={styles._navbar_links_active}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#link" className={styles._navbar_links}>
                Today&#39;s Special
              </Nav.Link>
              <Nav.Link href="#link" className={styles._navbar_links}>
                Favourites
              </Nav.Link>
              <Nav.Link href="#link" className={styles._navbar_links}>
                Best Seller
              </Nav.Link>
              <Nav.Link href="#link" className={styles._navbar_links}>
                Contact
              </Nav.Link>
              <Nav.Link href="#link" className={styles._navbar_links}>
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
