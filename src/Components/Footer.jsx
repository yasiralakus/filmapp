import { Link } from "react-router-dom";

export default function Footer( {languageEnglish} ) {



    return (
        <>
        <div className="home-trial">
            <div className="container">
                <div>
                    <h1>TRIAL START FIRST 30 DAYS</h1>
                    <p>Enter your email to create or restart your membership.</p>
                </div>
                <form>
                    <input type="text" placeholder="Enter your email"/>
                    <button>GET STARTED</button>
                </form>
            </div>
        </div>
        <footer className="footer">

            <div className="footer-top">

                <div className="container">

                    <div>
                        <Link><img src="./img/elements/logo.png" alt="" /></Link>

                        <ul>
                            <li>
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li>
                                <Link to={'/movie'}>MOVIE</Link>
                            </li>
                            <li>
                                <Link to={'/tvshow'}>TV SHOW</Link>
                            </li>
                            <li>
                                <Link to={'/pricing'}>PRICING</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>CONTACT</Link>
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
                                <Link>TERM OF USE</Link>
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

                <p>Copyright © 2024. All Rights Reserved. Coded by <Link to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link></p>

                    <img src="./img/elements/cards.png" alt="" />

                </div>


            </div>


        </footer>
        </>
    )
}