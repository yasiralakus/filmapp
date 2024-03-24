import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <header className="header">

            <div className="container">

                <img src="./img/elements/logo.png" alt="" />

                <ul className="nav">
                    <li><NavLink to={'/'}>HOME</NavLink></li>
                    <li><NavLink to={'/movie'}>MOVIE</NavLink></li>
                    <li><NavLink to={'/tvshow'}>TV SHOW</NavLink></li>
                    <li><NavLink to={'/pricing'}>PRICING</NavLink></li>
                    <li><NavLink to={'/blog'}>BLOG</NavLink></li>
                    <li><NavLink to={'/contacts'}>CONTACTS</NavLink></li>
                </ul>

                

                <div>

                    <button><i class="fa-solid fa-magnifying-glass"></i></button>

                    <p>SIGN IN</p>

                </div>

            </div>

        </header>
    )
}