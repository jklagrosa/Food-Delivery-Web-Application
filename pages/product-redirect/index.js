import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/P_R.module.scss";

const ProductRedirect = () => {
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      router.push({
        pathname: "/product/[id]",
        query: { id: id },
      });
    }
  }, [id]);

  return (
    <>
      <div className={styles.Wrapper}>
        <p className={styles._loading_message}>Please wait...</p>
      </div>
    </>
  );
};

export default ProductRedirect;
