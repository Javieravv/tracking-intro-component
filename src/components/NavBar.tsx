import { FC, useState } from "react"
import './css/navbar.scss'

export const NavBar:FC = () => {
    const [viewBottonMenu, setViewBottonMenu] = useState(false)

    const handleClickMenu = () => {
        setViewBottonMenu(!viewBottonMenu)
    }


    return (
        <nav className="">
            <div className="img-menu">
                <img src="Images/logo.svg" alt="Logo imagen" />
            </div>
            <ul className={`options-menu ${viewBottonMenu ? "options-menu view-menu" : ""}`}>
                <li>PRODUCT</li>
                <li>FEATURES</li>
                <li>PRICING</li>
                <li className="li-divider"> {!viewBottonMenu ? "*" : <hr/>}</li>
                <li className="li-login">LOGIN</li>
            </ul>
            <div className="icono-menu"
                onClick={ handleClickMenu }
            >
                {
                    (!viewBottonMenu) 
                    ? <img src="/Images/icon-hamburger.svg" alt="Menu" />
                    : <img src="/Images/icon-close.svg" alt="Menu" />
                }
                
            </div>
        </nav>
    )
}
