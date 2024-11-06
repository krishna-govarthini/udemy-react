import cardfive from "../assests/images/card-5.jpg"
import cardsix from "../assests/images/card-6.jpg"
import cardseven from "../assests/images/card-7.png"
import cardeight from "../assests/images/card-8.jpeg"
import cardnine from "../assests/images/card-9.jpeg"
import cardten from "../assests/images/card-10.jpg"
import cardele from "../assests/images/card-11.avif"
import cardtwe from "../assests/images/card-12.jpg"


export default function Popular() {
    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>
            <div className="popular-container">
                <div className="course-card">
                    <img src={cardfive} alt="card" />
                    <h3>The Complete iOS 17 Developer Course</h3>
                    <p>Atil Samancioglu</p>
                    <p>4.5 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,299 <del>&#8377;4,500</del></p>
                </div>
                <div className="course-card">
                    <img src={cardsix} alt="card" />
                    <h3>Python for Data Science and Machine Learning</h3>
                    <p>Jose Portilla</p>
                    <p>4.8 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;4,999 <del>&#8377;5,499</del></p>
                </div>
                <div className="course-card">
                    <img src={cardseven} alt="card" />
                    <h3>Python and Flask Bootcamp: Create Websites using Flask!</h3>
                    <p>Lazy Programmer Inc.</p>
                    <p>3.9 &#11088;&#11088;&#11088;</p>
                    <p>&#8377;5,499 <del>&#8377;6,500</del></p>
                </div>
                <div className="course-card">
                    <img src={cardeight} alt="card" />
                    <h3>NLP - Natural Language Processing with Python</h3>
                    <p>Pierian Training</p>
                    <p>4.2 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,499 <del>&#8377;4,499</del></p>
                </div>
                <div className="course-card">
                    <img src={cardnine} alt="card" />
                    <h3>The Beginner's Guide to Artificial Intelligence</h3>
                    <p>Penny de Byl</p>
                    <p>3.5 &#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,669 <del>&#8377;4,500</del></p>
                </div>
                <div className="course-card">
                    <img src={cardten} alt="card" />
                    <h3>Statistics for Business Analytics and Data Science</h3>
                    <p>Kirill Eremenko</p>
                    <p>4.6 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;5,500 <del>&#8377;6,499</del></p>
                </div>
                <div className="course-card">
                    <img src={cardele} alt="card" />
                    <h3>Complete Communication Skills Master Class</h3>
                    <p>TJ Walker</p>
                    <p>4.4 &#11088;&#11088;&#11088;&#11088;</p>
                    <p>&#8377;3,099 <del>&#8377;4,499</del></p>
                </div>
                <div className="course-card">
                    <img src={cardtwe} alt="card" />
                    <h3>Automate the Boring Stuff with Python Programming</h3>
                    <p>Al Sweigart</p>
                    <p>3.7 &#11088;&#11088;&#11088;</p>
                    <p>&#8377;4,999 <del>&#8377;5,499</del></p>
                </div>
            </div>
        </div>
    )
}