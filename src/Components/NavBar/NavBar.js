import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faCaretUp, faHome } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import Logo from '../../Assets/logo matokun3.png'
import useDarkMode from '../../CustomHooks/useDarkMode'

const NavBar = (darkImages, setDarkImages) => {

    const changeTheme = () => {
        setDarkMode(darkMode => !darkMode)
        changeDarkImages()
    }

    const [darkMode, setDarkMode] = useDarkMode()

    const changeDarkImages = () => {
        darkImages.setDarkImages(!darkImages.darkImages)
    }

    return (
        <nav className='top-nav'>
            <div className="logo">
                <NavLink to='/portfolio-react/'><img src={Logo} alt="" /></NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to='/portfolio-react/'>
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-react/portfolio'>Portafolio</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-react/skills'>Habilidades</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-react/about'>Sobre mí</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
            </ul>
            <div className="theme-button">
                {
                    darkMode === false
                        ? <FontAwesomeIcon className='theme-icon' icon={faSun} />
                        : <FontAwesomeIcon className='theme-icon' icon={faMoon} />
                }
                <div className="slider-container" onClick={() => changeTheme()}>
                    <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
                </div>
            </div>
        </nav>
        // <nav className='top-nav'>
        //     <div className="logo">
        //         <NavLink to='/'><img src={Logo} alt="" /></NavLink>
        //     </div>
        //     <ul>
        //         <li>
        //             <NavLink to='/'>
        //                 <FontAwesomeIcon icon={faHome} />
        //             </NavLink>
        //             <div className="pointer-container">
        //                 <FontAwesomeIcon className='pointer' icon={faCaretUp} />
        //             </div>
        //         </li>
        //         <li>
        //             <NavLink to='/portfolio'>Portafolio</NavLink>
        //             <div className="pointer-container">
        //                 <FontAwesomeIcon className='pointer' icon={faCaretUp} />
        //             </div>
        //         </li>
        //         <li>
        //             <NavLink to='/skills'>Habilidades</NavLink>
        //             <div className="pointer-container">
        //                 <FontAwesomeIcon className='pointer' icon={faCaretUp} />
        //             </div>
        //         </li>
        //         <li>
        //             <NavLink to='/about'>Sobre mí</NavLink>
        //             <div className="pointer-container">
        //                 <FontAwesomeIcon className='pointer' icon={faCaretUp} />
        //             </div>
        //         </li>
        //     </ul>
        //     <div className="theme-button">
        //         {
        //             darkMode === false
        //                 ? <FontAwesomeIcon className='theme-icon' icon={faSun} />
        //                 : <FontAwesomeIcon className='theme-icon' icon={faMoon} />
        //         }
        //         <div className="slider-container" onClick={() => changeTheme()}>
        //             <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar