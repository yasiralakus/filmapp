import { Link } from "react-router-dom";

export default function Footer( {languageEnglish} ) {



    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="container">

                    <div>
                        <Link><img src="./img/elements/logo.png" alt="" /></Link>

                        <ul>
                            <li>
                                <Link>{languageEnglish === true ? 'HOME' : 'ANASAYFA'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'MOVIE' : 'FILMLER'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'TV SHOW' : 'TV ŞOVU'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'PAGES' : 'SAYFALAR'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'PRICING' : 'FIYATLANDIRMA'}</Link>
                            </li>
                        </ul>

                        <form>
                            <input type="text" placeholder="Find Favorite Movie"/>
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <Link>{languageEnglish === true ? 'FAQ' : 'SSS'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'HELP CENTER' : 'YARDIM MERKEZI'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'TERM OF USE' : 'KULLANIM SARTLARI'}</Link>
                            </li>
                            <li>
                                <Link>{languageEnglish === true ? 'PRIVACY' : 'GIZLILIK'}</Link>
                            </li>
                        </ul>

                        <div>
                            <Link><i class="fa-brands fa-facebook-f"></i></Link>
                            <Link><i class="fa-brands fa-twitter"></i></Link>
                            <Link><i class="fa-brands fa-pinterest-p"></i></Link>
                            <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>

                    

                </div>

            </div>

            <div className="footer-bottom">

                <div className="container">

                    {languageEnglish === true ? 
                    <p>Copyright © 2024. All Rights Reserved. Coded by <Link to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link></p>
                    :
                    <p>Telif Hakkı © 2024. Tüm Hakları Saklıdır. <Link to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link> tarafından kodlandı.</p>}

                    <img src="./img/elements/cards.png" alt="" />

                </div>


            </div>


        </footer>
    )
}