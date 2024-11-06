import sale from "../assests/images/sale-image.jpg"
export default function Banner() {
    return (
        <div className="sec-image">
            <img src={sale} alt="sec-image" />
            <div className="sec-image__offer">
                <h1>Find the right fit</h1>
                <p>
                    The topics you want, taught by real-world experts. Courses as low as ₹449 until August 8.
                </p>
            </div>
        </div>
    )
}