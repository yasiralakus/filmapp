import { Link } from "react-router-dom";

export default function Footer() {



    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="container">

                    <div>
                        <Link><img src="./img/elements/logo.png" alt="" /></Link>

                        <ul>
                            <li>
                                <Link>HOME</Link>
                            </li>
                            <li>
                                <Link>MOVIE</Link>
                            </li>
                            <li>
                                <Link>TV SHOW</Link>
                            </li>
                            <li>
                                <Link>PAGES</Link>
                            </li>
                            <li>
                                <Link>PRICING</Link>
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
                                <Link>FAQ</Link>
                            </li>
                            <li>
                                <Link>HELP CENTER</Link>
                            </li>
                            <li>
                                <Link>TERMS OF USE</Link>
                            </li>
                            <li>
                                <Link>PRIVACY</Link>
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

                    <p>Copyright © 2021. All Rights Reserved. Coded by <Link to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link></p>

                    <img src="./img/elements/cards.png" alt="" />

                </div>


            </div>


        </footer>
    )
}