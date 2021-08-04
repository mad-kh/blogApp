import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Blog</span>
                <span className="headerTitleLg">TABA3'NI</span>
                <span className="headerPhrase">Create your own World</span>
            </div>
            <div className="headerImgs">
                {" "}
                <img
                    className="headerImg"
                    // src="https://image.freepik.com/free-photo/white-notebook-with-wooden-nib-pale-brown-envelope-with-brown-thread-branch-white-background_23-2148296148.jpg"
                    src="https://image.freepik.com/photos-gratuite/fumee-noire-fond-blanc-conception-du-feu_55716-987.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}
