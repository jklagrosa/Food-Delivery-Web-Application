import styles from "../styles/404.module.scss";
import { Container } from "react-bootstrap";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const NotFound = () => {
  return (
    <>
      <TopNav />
      <Nav />
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          Qui reprehenderit culpa Lorem voluptate quis reprehenderit sint magna
          eiusmod aliquip ullamco qui labore. Ullamco sunt pariatur irure id do
          Lorem commodo pariatur minim sit eu consectetur. Fugiat non mollit
          aliqua minim. Aliqua aliqua sint dolore ullamco ex eu qui dolor
          voluptate non. Incididunt eiusmod deserunt veniam ad dolore
          exercitation aute minim exercitation consequat enim exercitation
          culpa. Reprehenderit tempor quis fugiat eu aliqua sit tempor.
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default NotFound;
