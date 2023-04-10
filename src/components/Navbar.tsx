import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useClickTargetOutsite, useDocTitle } from '../hooks'
const Navbar = () => {
  const [active, setActive] = useState('') // nav path 
  const [showMenu, setShowMenu] = useState(false) // mobile menu
  const { t, i18n } = useTranslation()
  useDocTitle(`GeorgeH | ${t(active ? active : 'Resume')}`)
  const handleChanegI18n = () => {
    const lang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    const hashName = window.location.hash.slice(1)
    if (hashName) {
      setActive(hashName[0].toUpperCase() + hashName.slice(1))
    }
  }, [])

  const menuRef = useRef(null)
  useClickTargetOutsite(menuRef, () => {
    showMenu && setShowMenu(false)
  })
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed 
      top-0 z-20 backdrop-filter backdrop-blur-md bg-[rgba(0,0,0,0.2)]
      border-solid border-b-gray-600 border-b-[1px]
      `}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={"https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/GeorgeH.jpg"} alt="logo" className='w-9 h-9 object-contain rounded-full' />
          <p className='text-xl font-bold text-white cursor-pointer flex'>
            GeorgeH &nbsp;<span className='sm:block hidden'>| &nbsp;{t('Introduction')}</span>
          </p>
        </Link>
        <div className='flex items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`}
                    className={`${active === title ? 'text-white' : 'text-secondary'
                      } hover:text-white cursor-pointer font-medium text-lg`}
                    onClick={() => {
                      setActive(title)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {t(title)}
                  </a>
                </li>
              ))
            }
          </ul>
          <div className="w-5 h-5 hidden sm:flex" onClick={handleChanegI18n}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" data-v-0ebb37a4="" className='w-6 h-6 fill-white'>
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ">
              </path>
            </svg>
          </div>
          <div>
            <a className="w-5 h-5 hidden sm:flex" href="https://github.com/GeorgeHcc" title="github" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" className='w-5 h-5 fill-white'>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            </a>
          </div>
        </div>
        <div ref={menuRef} className='sm:hidden flex justify-end items-center'>
          <img src={showMenu ? close : menu} alt="menu" className='w-6 h-6 sm:hidden block cursor-pointer'
            onClick={() => {
              setShowMenu(isShow => !isShow)
            }}
          />
          <div className={`${!showMenu ? 'hidden' : 'flex'} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <div className="w-5 h-5" onClick={handleChanegI18n}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" data-v-0ebb37a4="" className='w-5 h-5 fill-white'>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ">
                  </path>
                </svg>
              </div>
              {
                navLinks.map(({ id, title }) => (
                  <li key={id}>
                    <a href={`#${id}`}
                      className={`${active === title ? 'text-white' : 'text-secondary'}
                       hover:text-white cursor-pointer font-poppins font-medium text-md`}
                      onClick={() => {
                        setActive(title)
                        setShowMenu(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      {t(title)}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
