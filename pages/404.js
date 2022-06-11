import styles from "../styles/404.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <TopNav />
      <Nav />
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="g-3" id={styles._404_row_wrapper}>
            <Col xs={4} md={6} xl={4}>
              <img src="/bgs/404.png" alt="404 PAGE NOT FOUND." />
            </Col>
            <Col xs={8} md={6} xl={8}>
              <h1>404: Page Not Found.</h1>
              <p>
                Sorry, we can&apos;t find that page! Don&apos;t worry though, we
                will guide you back home.
              </p>
              <button onClick={() => router.push("/")}>Go Home</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default NotFound;
