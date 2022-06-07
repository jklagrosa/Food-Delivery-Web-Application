import styles from "../styles/Copyright.module.scss";
import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <p className={styles._cp_para}>
            Copyright &copy; {new Date().getFullYear()} JK Lagrosa. All Rights
            Reserved.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Copyright;
