import styles from "../../styles/Login.module.scss";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import { useState } from "react";

import axios from "axios";
import { BASE_URL, headersOpts } from "../../utils/others";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { DEMO_USER } from "../../store/user";

const Login = () => {
  const [username, setUsername] = useState("DemoUser");
  const [password, setPassword] = useState("demouser123");

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogInUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${BASE_URL}/api/user`,
      {
        username: username,
        password: password,
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
    }

    if (response && response.data && response.data.success) {
      dispatch(DEMO_USER(response.data.data));
      router.push("/");
    }

    setLoading(false);
    return response.data;
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <Container fluid="lg" className="p-0">
          <form className={styles._login_form} onSubmit={handleLogInUser}>
            <h1>LutongBahay</h1>
            <label>Username</label>
            <input type="text" value={username} readOnly />
            <label>Password</label>
            <input type="password" value={password} readOnly />

            {loading && (
              <button type="submit" className={styles._login_form_btn}>
                Login as Demo User
              </button>
            )}

            {/* ============IF USER IS NOT LOGGED IN================ */}
            {!loading && (
              <button className={styles._login_form_btn_LOADING}>
                Please wait...
              </button>
            )}

            {/* =============END=============== */}

            <hr className={styles._login_form_btn_divider} />

            <button
              type="button"
              className={styles._login_form_back_to_home}
              onClick={() => router.push("/")}
            >
              Back to Home
            </button>

            {/* ===================== */}
          </form>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Login;
