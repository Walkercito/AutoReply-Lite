/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/views/navbar/NavBar.js
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/views/navbar/NavBar.js
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { Menu, X, Moon, Sun, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // Mejor inicialización del modo oscuro
        const savedMode = localStorage.getItem('darkMode')
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialMode = savedMode !== null ? savedMode === 'true' : systemDark

        setIsDarkMode(initialMode)
        document.documentElement.classList.toggle('dark', initialMode)

        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Toggle mejorado con actualización funcional
    const toggleDarkMode = () => {
        setIsDarkMode(prev => {
            const newMode = !prev
            document.documentElement.classList.toggle('dark', newMode)
            localStorage.setItem('darkMode', newMode)
            return newMode
        })
    }

    return (
        <header
            className={`sticky top-0 z-40 w-full backdrop-blur-lg transition-all duration-300 ${scrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl text-transparent">
                        AutoReply-Lite
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Inicio
                    </Link>
                    <Link to="/features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Características
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Planes
                    </Link>
                    <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Contacto
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="hover:bg-accent/20 text-foreground"
                        aria-label={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        className="hidden md:inline-flex bg-gradient-to-r from-primary to-violet-500 hover:opacity-90"
                    >
                        <Link to="/login" className="text-white">Comenzar ahora</Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="md:hidden mr-2 hover:bg-accent/20 text-foreground"
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden hover:bg-accent/20 text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
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
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link to="/" className="text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Inicio
                        </Link>
                        <Link to="/features" className="text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Características
                        </Link>
                        <Link to="/pricing" className="text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Planes
                        </Link>
                        <Link to="/contact" className="text-sm text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Contacto
                        </Link>
                        <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-primary to-violet-500 hover:opacity-90"
                        >
                            <Link to="/login" className="w-full text-white">Comenzar ahora</Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default NavBar
