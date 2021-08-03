import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Blog</span>
                <span className="headerTitleLg">TABA'3NI</span>
            </div>
            <div className="headerImgs">
                <img
                    className="headerImg"
                    src="https://image.freepik.com/free-photo/white-notebook-with-wooden-nib-pale-brown-envelope-with-brown-thread-branch-white-background_23-2148296148.jpg"
                    alt=""
                />
                <img
                    className="headerImg"
                    src="https://i.pinimg.com/236x/df/7f/4c/df7f4c51df5edae3e9bf78fef81f4000.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}
