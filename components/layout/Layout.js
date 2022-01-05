import Head from "next/head";
import FooterComp from "../footer/FooterComp";
import HeaderComp from "../header/HeaderComp";

export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
    <Head>
        <title>{pageTitle}</title>
    </Head>
      <HeaderComp />
      <div>{children}</div>
      <FooterComp />
    </>
  );
}
