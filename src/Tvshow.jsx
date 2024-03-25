import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Tvshow() {

    const [newRelease, setNewRelease] = useState(1);

    return (
        <div className="full-page">

            <div className="page-top-hero">

                <div className="container">
                    <Header />

                    <h1>Tv <span>Show</span></h1>
                </div>

            </div>

            <div className="tvshow-new-tvshow">

                <div className="container">

                    <header>

                        <h1>New Tv Show</h1>

                        <div>
                            <button style={newRelease === 1 ? {border: '2px solid #E4D804'} : {}} onClick={() => (setNewRelease(1))}>Animation</button>
                            <button style={newRelease === 2 ? {border: '2px solid #E4D804'} : {}} onClick={() => (setNewRelease(2))}>Movies</button>
                            <button style={newRelease === 3 ? {border: '2px solid #E4D804'} : {}} onClick={() => (setNewRelease(3))}>Romantic</button>
                        </div>

                    </header>

                    <main>

                    {newRelease === 1 &&
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

                    {newRelease === 2 &&
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

                    {newRelease === 3 &&
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

                    </main>

                </div>

            </div>

            <Footer />

        </div>
    )
}