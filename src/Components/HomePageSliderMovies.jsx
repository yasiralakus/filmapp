import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

export default function HomePageSliderMovies() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper fade-in"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">

                <img src="./img/home-page/img06.jpg" alt="" />
                <header>
                    <h1>The Hikers</h1>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">

                <img src="./img/home-page/img06.jpg" alt="" />
                <header>
                    <h1>The Hikers</h1>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
