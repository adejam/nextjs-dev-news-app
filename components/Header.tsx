import headerStyles from "../styles/Header.module.css";

const Header = (): JSX.Element => (
  <header>
    <h1 className={headerStyles.title}>
      <span>Dev</span> News
    </h1>
    <p className={headerStyles.description}>
      Keep up to date with the latest dev news
    </p>
  </header>
);

export default Header;
