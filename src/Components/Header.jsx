import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    useEffect(() => {
        if (openMobileMenu) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        // useEffect içindeki işlemler bittiğinde temizlik yapmak için return içinde bir fonksiyon döndürün
        return () => {
          document.body.style.overflow = 'auto'; // Component kaldırıldığında varsayılan değeri geri yükleyin
        };
      }, [openMobileMenu]);

    return (
        <>
        <header className="header">

            <div className="container">

                <img src="./img/elements/logo.png" alt="" />

                <ul className="nav">
                    <li><NavLink to={'/'}>HOME</NavLink></li>
                    <li><NavLink to={'/movie'}>MOVIE</NavLink></li>
                    <li><NavLink to={'/tvshow'}>TV SHOW</NavLink></li>
                    <li><NavLink to={'/pricing'}>PRICING</NavLink></li>
                    <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
                </ul>

                <button onClick={() => (openMobileMenu === false && setOpenMobileMenu(true))}><i class="fa-solid fa-bars"></i></button>

                <div>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    <p>SIGN IN</p>
                </div>

            </div>

        </header>
        {openMobileMenu === true && 
        <div className="mobile-menu">

            <header>
                <img src="./img/elements/logo.png" alt="" />
                <button onClick={() => (setOpenMobileMenu(false))}><i class="fa-solid fa-xmark"></i></button>
            </header>

            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/movie'}>Movie</NavLink></li>
                <li><NavLink to={'/tvshow'}>Tv Show</NavLink></li>
                <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
            
        </div>}
        </>
    )
}