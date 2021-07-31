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
                src="https://i.pinimg.com/564x/fe/0d/b2/fe0db23957c2c7cd654038b3a92ba643.jpg"
                alt=""
            />
        </div>
    );
}
