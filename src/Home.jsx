import { useState } from "react";
import Header from "./Components/Header";
import HomePageSliderMovies from "./Components/HomePageSliderMovies";
import HomePageSliderTV from "./Components/HomePageSliderTV";
import HomePageSliderAnime from "./Components/HomePageSliderAnime";

export default function Home() {

    const [upcoming, setUpcoming] = useState(1);


    return (
        <div className="full-page">


            <div className="home-hero">

                <div className="container">

                    <Header />

                    <div>
                        <h3>Movflx</h3>

                        <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1>

                        <div>
                            <span>PG 18</span>
                            <span style={{backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff'}}>HD</span>
                            <p>Romance, Drama</p>
                            <p><i class="fa-solid fa-calendar-days"></i> 2021</p>
                            <p><i class="fa-regular fa-clock"></i> 128 min</p>
                        </div>

                        <button><i class="fa-solid fa-play"></i> WATCH NOW</button>
                    </div>


                </div>

            </div>

            <div className="upcoming-movies">

                <div className="container">

                    <header>

                        <h1>Upcoming Movies</h1>

                        <div>

                            <button className={upcoming === 1 ? 'selected' : {}} onClick={() => (setUpcoming(1))}>TV Shows</button>
                            <button className={upcoming === 2 ? 'selected' : {}} onClick={() => (setUpcoming(2))}>Movies</button>
                            <button className={upcoming === 3 ? 'selected' : {}} onClick={() => (setUpcoming(3))}>Anime</button>

                        </div>

                    </header>

                    {upcoming === 1 && <HomePageSliderTV />}

                    {upcoming === 2 && <HomePageSliderMovies />}

                    {upcoming === 3 && <HomePageSliderAnime />}

                </div>

            </div>

            <div className="home-our-services">

                <div className="container">

                    <img src="./img/elements/services.jpg" alt="" />

                    <div>

                        <h5>OUR SERVICES</h5>

                        <h1>Download Your Shows Watch Offline.</h1>

                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>

                        <div>

                            <div>
                                <p><i class="fa-solid fa-tv"></i></p>

                                <div>
                                    <h3>Enjoy on Your TV.</h3>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>

                            </div>

                            <div>
                                <p><i class="fa-solid fa-video"></i></p>

                                <div>
                                    <h3>Watch Everywhere.</h3>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}