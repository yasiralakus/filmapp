import { useState } from "react";
import Header from "./Components/Header";
import HomePageSliderMovies from "./Components/HomePageSliderMovies";
import HomePageSliderTV from "./Components/HomePageSliderTV";
import HomePageSliderAnime from "./Components/HomePageSliderAnime";
import Footer from "./Components/Footer";

export default function Home() {

    const [upcoming, setUpcoming] = useState(1);
    const [topRated, setTopRated] = useState(1);
    const [languageEnglish, setLanguageEnglish] = useState(true)
    console.log(languageEnglish)

    return (
        <div className="full-page">

            <div className="home-hero">

                <div className="container">

                    <Header setLanguageEnglish={setLanguageEnglish} languageEnglish={languageEnglish}/>

                    <div>
                        <h3>Movflx</h3>

                        {languageEnglish === true ? <h1>Unlimited <span>Movie</span>, TVs Shows, & More.</h1> :
                        <h1>Sınırsız <span>Film</span>, TV Şovları, ve Daha Fazlası.</h1>}

                        <div>
                            <span>PG 18</span>
                            <span style={{backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff'}}>HD</span>
                            <p>{languageEnglish === true ? 'Romance, Drama' : 'Romantizm, Dram'}</p>
                            <p><i class="fa-solid fa-calendar-days"></i> 2021</p>
                            <p><i class="fa-regular fa-clock"></i> 128 {languageEnglish === true ? 'min' : 'dk'}</p>
                        </div>

                        <button><i class="fa-solid fa-play"></i> {languageEnglish === true ? 'WATCH NOW' : 'ŞİMDİ İZLE'}</button>
                    </div>


                </div>

            </div>

            <div className="upcoming-movies">

                <div className="container">

                    <header>

                        <h1>{languageEnglish === true ? 'Upcoming Movies' : 'Eklenecek Filmler'}</h1>

                        <div>

                            <button className={upcoming === 1 ? 'selected' : {}} onClick={() => (setUpcoming(1))}>{languageEnglish === true ? 'TV Shows' : 'TV Şovları'}</button>
                            <button className={upcoming === 2 ? 'selected' : {}} onClick={() => (setUpcoming(2))}>{languageEnglish === true ? 'Movies' : 'Filmler'}</button>
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

                        <h5>{languageEnglish === true ? 'OUR SERVICES' : 'HIZMETLERIMIZ'}</h5>

                        <h1>{languageEnglish === true ? 'Download Your Shows Watch Offline.' : 'Programlarınızı İndirin Çevrimdışı İzleyin.'}</h1>

                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>

                        <div>

                            <div>
                                <p><i class="fa-solid fa-tv"></i></p>

                                <div>
                                    <h3>{languageEnglish === true ? 'Enjoy on Your TV.' : "TV'nizde keyfini çıkarın."}</h3>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>

                            </div>

                            <div>
                                <p><i class="fa-solid fa-video"></i></p>

                                <div>
                                    <h3>{languageEnglish === true ? 'Watch Everywhere.' : "Her Yerde İzle."}</h3>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="home-top-rated">

                <div className="container">

                    <h1>{languageEnglish === true ? 'Top Rated Movies' : 'En Fazla Beğenilen Filmler'}</h1>

                    <header>
                        <button style={topRated === 1 ? {color: '#E4D804'} : {}} onClick={() => (setTopRated(1))}>{languageEnglish === true ? 'TV SHOWS' : 'TV ŞOVLARI'}</button>
                        <button style={topRated === 2 ? {color: '#E4D804'} : {}} onClick={() => (setTopRated(2))}>{languageEnglish === true ? 'MOVIES' : 'FILMLER'}</button>
                        <button style={topRated === 3 ? {color: '#E4D804'} : {}} onClick={() => (setTopRated(3))}>{languageEnglish === true ? 'DOCUMENTARY' : 'BELGESEL'}</button>
                        <button style={topRated === 4 ? {color: '#E4D804'} : {}} onClick={() => (setTopRated(4))}>{languageEnglish === true ? 'SPORTS' : 'SPOR'}</button>
                    </header>

                    {topRated === 1 &&
                    <div className="fade-in">
                        <div className="card">
                            <img src="./img/home-page/img01.jpg" alt="" />
                            <header>
                                <h1>Women's Day</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img02.jpg" alt="" />
                            <header>
                                <h1>The Perfect Match</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img03.jpg" alt="" />
                            <header>
                                <h1>The Dog Woof</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img04.jpg" alt="" />
                            <header>
                                <h1>The Easy Reach</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img05.jpg" alt="" />
                            <header>
                                <h1>The Cooking</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img06.jpg" alt="" />
                            <header>
                                <h1>The Hikaru</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img07.jpg" alt="" />
                            <header>
                                <h1>Life Quotes</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img08.jpg" alt="" />
                            <header>
                                <h1>The Beachball</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                    </div>
                    }

                    {topRated === 2 &&
                    <div className="fade-in">
                        <div className="card">
                            <img src="./img/home-page/img02.jpg" alt="" />
                            <header>
                                <h1>The Perfect Match</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img04.jpg" alt="" />
                            <header>
                                <h1>The Easy Reach</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img06.jpg" alt="" />
                            <header>
                                <h1>The Hikaru</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img08.jpg" alt="" />
                            <header>
                                <h1>The Beachball</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                    </div>
                    }
                    
                    {topRated === 3 &&
                    <div className="fade-in">
                        <div className="card">
                            <img src="./img/home-page/img01.jpg" alt="" />
                            <header>
                                <h1>Women's Day</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img03.jpg" alt="" />
                            <header>
                                <h1>The Dog Woof</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img05.jpg" alt="" />
                            <header>
                                <h1>The Cooking</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img07.jpg" alt="" />
                            <header>
                                <h1>Life Quotes</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                    </div>
                    }

                    {topRated === 4 &&
                    <div className="fade-in">
                        <div className="card">
                            <img src="./img/home-page/img02.jpg" alt="" />
                            <header>
                                <h1>The Perfect Match</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img04.jpg" alt="" />
                            <header>
                                <h1>The Easy Reach</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img06.jpg" alt="" />
                            <header>
                                <h1>The Hikaru</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                        <div className="card">
                            <img src="./img/home-page/img08.jpg" alt="" />
                            <header>
                                <h1>The Beachball</h1>
                                <p>2021</p>
                            </header>
                            <main>
                                <span>HD</span>
                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>
                            </main>
                        </div>
                    </div>
                    }


                </div>

            </div>

            <div className="home-live-movie">
                <div className="container">

                    <div>
                        <h1>{languageEnglish === true ? 'Live Movie & TV Shows For Friends & Family' : 'Arkadaşlar ve Aile İçin Canlı Film ve TV Programları'}</h1>

                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>

                        <div>
                            <h3>20K+</h3>
                            <p>{languageEnglish === true ? 'Active Customer' : 'Aktif Kullanıcı'}</p>
                        </div>

                        <button><i class="fa-solid fa-play"></i> {languageEnglish === true ? 'WATCH NOW' : 'ŞİMDİ İZLE'}</button>
                    </div>

                    <img src="./img/elements/live.png" alt="" />

                </div>

            </div>

            <div className="home-world-best">

                <div className="container">

                    <h1>{languageEnglish === true ? 'World Best TV Series' : 'Dünyanın En İyi Dizileri'}</h1>

                    <div>
                        <div className="card">

                            <img src="./img/home-page/img10.jpg" alt="" />
                            <header>
                                <h1>Women's Day</h1>
                                <p>2021</p>
                            </header>

                            <main>

                                <span>HD</span>

                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>

                            </main>

                        </div>
                        <div className="card">

                            <img src="./img/home-page/img09.jpg" alt="" />
                            <header>
                                <h1>The Perfect Match</h1>
                                <p>2021</p>
                            </header>

                            <main>

                                <span>HD</span>

                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>

                            </main>

                        </div>
                        <div className="card">

                            <img src="./img/home-page/img03.jpg" alt="" />
                            <header>
                                <h1>The Dog Woof</h1>
                                <p>2021</p>
                            </header>

                            <main>

                                <span>HD</span>

                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>

                            </main>

                        </div>
                        <div className="card">

                            <img src="./img/home-page/img04.jpg" alt="" />
                            <header>
                                <h1>The Easy Reach</h1>
                                <p>2021</p>
                            </header>

                            <main>

                                <span>HD</span>

                                <div>
                                    <p><i class="fa-regular fa-clock"></i> 128 min</p>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 3.5</p>
                                </div>

                            </main>

                        </div>
                    </div>

                </div>

            </div>

            <div className="home-trial">

                <div className="container">

                    <div>
                        <h1>{languageEnglish === true ? 'TRIAL START FIRST 30 DAYS.' : '30 GÜNLÜK DENEME SÜRECİNİ BAŞLAT.'}</h1>
                        <p>{languageEnglish === true ? 'Enter your email to create or restart your membership.' : 'Üyeliğinizi oluşturmak veya yeniden başlatmak için e-posta adresinizi girin.'}</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Enter your email"/>
                        <button>{languageEnglish === true ? 'GET STARTED' : 'BAŞLA'}</button>
                    </form>

                </div>

            </div>

            <Footer languageEnglish={languageEnglish}/>

        </div>
    )
}