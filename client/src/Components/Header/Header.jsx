import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blog</span>
        <span className="headerTitleLg">TABA'3NI</span>
      </div>
      <img
        className="headerImg"
        src="https://www.notretemps.com/cache/com_zoo_images/c3/tchat-jardin-2021_5afa2ff06c552ed2d3907538f664f604.jpg"
        alt=""
      />
    </div>
  );
}