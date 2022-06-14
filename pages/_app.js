import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Provider } from "react-redux";
import store from "../store/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      {/* ============ */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
