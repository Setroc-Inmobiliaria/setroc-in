import * as React from "react"
import { useState } from "react"
import logo from "../assets/SETROC.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { FaHouseDamage } from "react-icons/fa"
import { FaCubes } from "react-icons/fa6"
import { IoPeople } from "react-icons/io5"
import { MdPhoneAndroid } from "react-icons/md"
import { Link } from "gatsby"
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa"
import "./landing/LandingPage.css"

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleNavbar = () => {
    setShowNavbar(true)
  }

  const toggleCloseNavbar = () => {
    setShowNavbar(false)
  }

  return (
    <header className="w-full h-32">
      <div className="w-full h-full flex flex-row md:justify-around justify-between items-center">
        <div className="h-full">
         <Link to="/"> <img className="h-full" src={logo} alt="SETROC" /></Link>
        </div>

        {/* Navegación en pantallas grandes */}
        <ul className="hidden md:flex flex-row w-full md:w-5/12 justify-between font-afacad text-xl">
          <div className="flex flex-row gap-5 justify-start items-center ">
            <Link to="/propiedades">
              <li>Encuentra tu propiedad</li>
            </Link>
          </div>
          <div className="flex flex-row gap-5 justify-start items-center">
            <Link to="/servicios">
              <li>Servicios</li>
            </Link>
          </div>

          <div className="flex flex-row gap-5 justify-start items-center">
            <Link to="/nosotros">
              <li>Nosotros</li>
            </Link>
          </div>
          <div className="flex flex-row gap-5 justify-start items-center ">
            <Link to="/contacto">
              <li>Contactanos</li>
            </Link>
          </div>
        </ul>

        {/* Icono de hamburguesa en pantallas pequeñas */}
        <span className="md:hidden relative flex right-6">
          <GiHamburgerMenu color="black" size={65} onClick={toggleNavbar} />
        </span>

        {/* Menú desplegable en pantallas pequeñas */}

        <div
          className={`md:hidden z-50 fixed flex top-0 h-full bg-p6 w-full border border-gray-300 ${
            showNavbar
              ? "left-0 transition-all duration-500 ease-out"
              : `left-[1000px] transition-all duration-700 ease-out`
          }`}
        >
          <ul className="flex flex-col relative top-44 w-full items-center h-full gap-24 font-afacad text-2xl">
            <GrClose
              size={35}
              className="flex left-[80%] absolute -top-28"
              onClick={toggleCloseNavbar}
            />
            <div className="flex flex-row gap-5 justify-start items-center">
              <FaHouseDamage size={35} />
              <Link to="/propiedades">
                <li>Encuentra tu propiedad</li>
              </Link>
            </div>
            <div className="flex flex-row gap-5 justify-start items-center">
              <FaCubes size={35} />
              <Link to="/servicios">
                <li>Servicios</li>
              </Link>
            </div>

            <div className="flex flex-row gap-5 justify-start items-center">
              <IoPeople size={35} />
              <Link to="/nosotros">
                <li>Nosotros</li>
              </Link>
            </div>
            <div className="flex flex-row gap-5 justify-start items-center ">
              <MdPhoneAndroid size={35} />
              <Link to="/contacto">
                <li>Contactanos</li>
              </Link>
            </div>

            <div className="flex flex-row w-full justify-evenly relative top-16">
              <li>
                <a
                  href="https://www.facebook.com/setroc.inmobiliario?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF size={45} color="#3b5998" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@setroc.inmobiliario?_t=8i6w7rOUpV7&_r=1"
                  target="_blank"
                  rel="noreferrer"

                >
                  <FaTiktok size={45} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/setroc.inmobiliaria?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  target="_blank"
                  rel="noreferrer"

                >
                  <FaInstagram size={45} />
                </a>
              </li>
              <li>
                <FaYoutube color="#CD201F" size={45} />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
