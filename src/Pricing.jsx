import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Pricing() {



    return (
        <div className="full-page">

            <div className="page-top-hero">

                <div className="container">
                    <Header />
                    <h1>Our <span>Plan</span></h1>
                </div>

            </div>

            <div className="pricing-plans">

                <div className="container">

                    <h3>OUR PRICING PLANS</h3>
                    <h1>Our Pricing Strategy</h1>

                    <span></span>

                    <div>

                        <div className="pricing-plan">

                            <h3>PREMIUM</h3>

                            <div>
                                <h1>$7.99</h1>
                                <p>Monthly</p>
                            </div>

                            <main>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Video quality</p>
                                    <h6  style={{color: '#e4d804'}}>Good</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Resolution</p>
                                    <h6>480p</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Screens you can watch</p>
                                    <h6>1</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Cancel anytime</p>
                                </div>
                            </main>

                            <button>Buy Now</button>

                        </div>

                        <div style={{border: '2px solid #e4d804'}} className="pricing-plan">

                            <h3>STANDART</h3>

                            <div>
                                <h1>$9.99</h1>
                                <p>Monthly</p>
                            </div>

                            <main>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Video quality</p>
                                    <h6 style={{color: '#e4d804'}}>Better</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Resolution</p>
                                    <h6>1080p</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Screens you can watch</p>
                                    <h6>1</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Cancel anytime</p>
                                </div>
                            </main>

                            <button>Buy Now</button>

                        </div>

                        <div className="pricing-plan">

                            <h3>PREMIUM</h3>

                            <div>
                                <h1>$11.99</h1>
                                <p>Monthly</p>
                            </div>

                            <main>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Video quality</p>
                                    <h6  style={{color: '#e4d804'}}>Best</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Resolution</p>
                                    <h6>4K+HDR</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Screens you can watch</p>
                                    <h6>4</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-check"></i>
                                    <p>Cancel anytime</p>
                                </div>
                            </main>

                            <button>Buy Now</button>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}