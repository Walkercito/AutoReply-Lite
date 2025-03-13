/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/views/navbar/NavBar.js
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { Menu, X, Moon, Sun, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // Verificar si el usuario prefiere el modo oscuro
        if (typeof window !== 'undefined') {
            const isDark =
                localStorage.getItem('darkMode') === 'true' ||
                (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            setIsDarkMode(isDark)
            if (isDark) {
                document.documentElement.classList.add('dark')
            }
        }

        // Efecto de scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Cambiar entre modo oscuro y claro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
        }
    }

    return (
        <header
            className={`sticky top-0 z-40 w-full backdrop-blur-lg transition-all duration-300 ${
                scrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="w-full flex h-16 items-center justify-between bg-background text-foreground px-4">
                {/* Logo y nombre */}
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                        <div className="relative bg-background dark:bg-background/20 rounded-full p-1">
                            <MessageSquare className="h-6 w-6 text-primary" /> {/* Ícono corregido */}
                        </div>
                    </div>
                    <span className="text-xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
                        AutoReply-Lite
                    </span>
                </div>

                {/* Navegación para desktop */}
                <nav className="hidden md:flex items-center gap-6 ">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Inicio
                    </Link>
                    <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
                        Características
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
                        Planes
                    </Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contacto
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="ml-2"
                        aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </nav>

                {/* Botones para móvil */}
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        className="hidden md:inline-flex bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 transition-opacity"
                    >
                        Comenzar ahora
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="md:hidden mr-2"
                        aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t"
                >
                    <div className="container py-4 flex flex-col gap-4">
                        <Link to="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Inicio
                        </Link>
                        <Link to="/features" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Características
                        </Link>
                        <Link to="/pricing" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Planes
                        </Link>
                        <Link to="/contact" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Contacto
                        </Link>
                        <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 transition-opacity"
                        >
                            Comenzar ahora
                        </Button>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default NavBar
