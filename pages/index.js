import Head from "next/head";
import TopNav from "../components/TopNav";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* ==================== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* ========================== */}
      <TopNav />
    </>
  );
}
