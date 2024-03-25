import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

export default function HomePageSliderTV() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
            1220: {
                slidesPerView: 4,
            },
            950: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
          }}
        className="mySwiper fade-in"
      >
        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
      </Swiper>
    </>
  );
}
