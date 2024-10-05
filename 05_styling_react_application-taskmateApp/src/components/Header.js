import Logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <a href="/">Home</a>
    </header>
  );
}
