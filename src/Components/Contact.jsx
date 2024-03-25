import Footer from "./Footer";
import Header from "./Header";

export default function Contact () {



    return (
        <div className="full-page">

            <div className="page-top-hero">

                <div className="container">

                    <Header />
                    <h1>Contact <span>Us</span></h1>

                </div>

            </div>

            <div className="contact">

                <div className="container">

                    <div className="contact-left">

                        <h1>Contact Form</h1>

                        <form>
                            <div>
                                <input type="text" placeholder="You Name *" />
                                <input type="text" placeholder="You Email *" />
                            </div>
                            <input type="text" placeholder="Subject *" />
                            <textarea placeholder="Type Your Message..." cols="30" rows="5"></textarea>
                            <button>SEND MESSAGE</button>
                        </form>

                    </div>

                    <div className="contact-right">

                        <h1>Information</h1>

                        <div>

                            <p><span>Find solutions:</span> to common problems, or get help from a support agent industry's standard .</p>

                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Address:</span> 
                                W38 Park Road New York
                            </p>

                            <p>
                                <i class="fa-solid fa-phone"></i>
                                <span>Phone:</span> 
                                (09) 123 854 365
                            </p>

                            <p>
                                <i class="fa-solid fa-envelope"></i>
                                <span>Email:</span> 
                                support@movflx.com
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}