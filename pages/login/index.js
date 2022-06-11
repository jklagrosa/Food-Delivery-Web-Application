import styles from "../../styles/Login.module.scss";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

const Login = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <form className={styles._login_form}>
            <h1>LutongBahay</h1>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />

            <button className={styles._login_form_btn}>
              Login as Demo User
            </button>

            <button className={styles._login_form_back_to_home}>
              Back to Home
            </button>
          </form>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Login;
