import TopNav from "../components/TopNav";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TodaySpecial from "../components/TS";
import Featured from "../components/Featured";
import Promo from "../components/Promo";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import CartAndWishList from "../components/C_W";

import DbConnection from "../utils/conn";
import Dish from "../models/dish";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_TODAY_SPECIAL, GET_FEATURED } from "../store/dish";

export async function getStaticProps() {
  await DbConnection();
  const today_special = await Dish.find({ cat: { $in: ["ts"] } });
  const featured = await Dish.find({ cat: { $in: ["ft"] } });
  if (!today_special || !featured) {
    return {
      props: {
        ts: null,
        ft: null,
      },
    };
  }

  return {
    props: {
      ts: JSON.stringify(today_special),
      ft: JSON.stringify(featured),
    },
  };
}

export default function Home({ ts, ft }) {
  const parsed_ts = ts ? JSON.parse(ts) : false;
  const parsed_ft = ft ? JSON.parse(ft) : false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (parsed_ts) {
      dispatch(GET_TODAY_SPECIAL(parsed_ts));
    }
  }, [dispatch]);

  useEffect(() => {
    if (parsed_ft) {
      dispatch(GET_FEATURED(parsed_ft));
    }
  }, [dispatch]);

  return (
    <>
      <TopNav />
      <Navigation />
      <Hero />
      {/* ============= */}
      <CartAndWishList />
      {/* ============ */}
      <Services />
      <TodaySpecial />
      <Featured />
      <Promo />
      <WhyUs />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
}
