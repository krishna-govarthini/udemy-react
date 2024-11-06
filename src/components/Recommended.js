import cardone from "../assests/images/card-1.webp"
import cardtwo from "../assests/images/card-2.jpg"
import cardthree from "../assests/images/card-3.jpg"
import cardfour from "../assests/images/card-4.jpg"


export default function Recommended() {
    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended For You</h1>
            <p>Pick the best fit</p>
            <div className="recommended-container">
                <div className="course-card">
                    <img src={cardone} alt="card" />
                    <h3>Web Development Masterclass</h3>
                    <p>YouAccel Training</p>
                    <p>4.5 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,099 <del>&#8377;3,950</del></p>
                </div>
                <div className="course-card">
                    <img src={cardtwo} alt="card" />
                    <h3>The Complete JavaScript Course 2024</h3>
                    <p>Jonas Schmedtmann</p>
                    <p>3.7 &#11088;&#11088;&#11088;</p>
                    <p>&#8377;4,099 <del>&#8377;4,699</del></p>
                </div>
                <div className="course-card">
                    <img src={cardthree} alt="card" />
                    <h3>Angular & NodeJS - The MEAN Stack Guide</h3>
                    <p>Mosh Hamedani</p>
                    <p>4.4 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;4,099 <del>&#8377;5,200</del></p>
                </div>
                <div className="course-card">
                    <img src={cardfour} alt="card" />
                    <h3>Build Responsive Websites with HTML and CSS</h3>
                    <p>Edwin Diaz</p>
                    <p>3.4 &#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,699 <del>&#8377;4,200</del></p>
                </div>
            </div>
        </div>
    )
}