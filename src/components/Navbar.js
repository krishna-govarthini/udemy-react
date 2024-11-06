export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h1 className="navbar__left__title">
                    Udemy
                </h1>
            </div>
            <div className="navbar__middle">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i>
                <input type="text" placeholder="Search for anything here. Tech, Business, Art..." />
            </div>
            <div className="navbar__right">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>Not yet purchased course till now..</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i>
                <i className="fa-solid fa-bell" style={{ color: "#000000" }}></i>
                <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
            </div>
            <div className="navbar__menu">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}