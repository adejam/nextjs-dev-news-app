import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => (
  <>
    <Head>
      <meta name="description" content="Adeleye jamiu companies list app" />
      <meta name="keywords" content="Companies list" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Navbar />
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
