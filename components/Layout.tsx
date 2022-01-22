import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Meta from './Meta'

const Layout = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => (
  <>
    <Meta />
    <Navbar />
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
