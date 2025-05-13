import React, { useState, useEffect } from 'react'
import { header } from '../data'
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { btnText } = header

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full py-4 px-4 z-50 transition-all duration-300 ${
        isActive ? 'bg-white text-black shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="w-[150px]"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          <img src={header.logo} alt="Logo" className="w-full h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center justify-center bg-white border border-redapi rounded-[20px] w-[580px] h-[50px]"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>

        {/* CTA button - Desktop */}
        <div
          className="hidden lg:flex gap-x-3"
          data-aos="fade-down"
          data-aos-delay="1400"
        >
          <button className="btn hidden btn-sm btn-red text-white">
            {btnText}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMobileNav(!mobileNav)}
          aria-label="Abrir menu mobile"
        >
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-redapi" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-redapi" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 bottom-0 w-[80vw] max-w-sm bg-white shadow-2xl transition-all duration-300 z-40 lg:hidden ${
          mobileNav ? 'left-0' : '-left-full'
        }`}
      >
        <MobileNav setMobileNav={setMobileNav} />
      </div>

      {/* Overlay quando o menu está aberto */}
      {mobileNav && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileNav(false)}
        />
      )}
    </header>
  )
}

export default Header