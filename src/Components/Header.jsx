import { NavLink } from "react-router-dom";

export default function Header( {setLanguageEnglish, languageEnglish} ) {



    return (
        <header className="header">

            <div className="container">

                <img src="./img/elements/logo.png" alt="" />

                <ul className="nav">
                    <li><NavLink to={'/'}>{languageEnglish === true ? 'HOME' : 'ANASAYFA'}</NavLink></li>
                    <li><NavLink to={'/movie'}>{languageEnglish === true ? 'MOVIE' : 'FILM'}</NavLink></li>
                    <li><NavLink to={'/tvshow'}>{languageEnglish === true ? 'TV SHOW' : 'TV ŞOV'}</NavLink></li>
                    <li><NavLink to={'/pricing'}>{languageEnglish === true ? 'PRICING' : 'FİYATLANDIRMA'}</NavLink></li>
                    <li><NavLink to={'/blog'}>BLOG</NavLink></li>
                    <li><NavLink to={'/contacts'}>{languageEnglish === true ? 'CONTACT' : 'İLETİŞİM'}</NavLink></li>
                </ul>

                <div>

                    <div>
                        <button style={languageEnglish === false ? {color: '#E4D804'} : {}} onClick={() => (setLanguageEnglish(false))}>TR</button>
                        <p>-</p>
                        <button style={languageEnglish === true ? {color: '#E4D804'} : {}} onClick={() => (setLanguageEnglish(true))}>EN</button>
                    </div>

                    <button><i class="fa-solid fa-magnifying-glass"></i></button>

                    <p>{languageEnglish === true ? 'SIGN IN' : 'GİRİŞ YAP'}</p>

                </div>

            </div>

        </header>
    )
}