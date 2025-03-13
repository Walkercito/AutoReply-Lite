/* eslint-disable no-unused-vars */
// src/pages/homePage/HomePage.js
/* eslint-disable no-unused-vars */
// src/pages/homePage/HomePage.js
import '../../styles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import NavBar from '../../views/navbar/NavBar'
import Button from '../../ui/Button'

// Importamos los iconos como componentes SVG
const MessageSquareText = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8H7" />
        <path d="M13 12H7" />
    </svg>
)

const ArrowRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

const Sparkles = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
    </svg>
)

const HomePage = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80">
            {/* Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[10rem]"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[10rem]"></div>
                </div>
            </div>

            <NavBar />

            <main className="flex-1">
                {/* Hero Section */}
                <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="grid gap-6 md:gap-10"
                        >
                            {/* Contenido del hero - Modificado para mejor responsive */}
                            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
                                <motion.div variants={item} className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary mb-2"
                                        >
                                            <Sparkles className="mr-1 h-3 w-3" /> Nuevo lanzamiento
                                        </motion.div>
                                        <motion.h1
                                            variants={item}
                                            className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                                        >
                                            Automatiza tus respuestas en Email y{' '}
                                            <span className="inline-block">
                                                <TypeAnimation
                                                    sequence={['WhatsApp', 2000, 'Telegram', 2000, 'Instagram', 2000]}
                                                    wrapper="span"
                                                    speed={50}
                                                    repeat={Infinity}
                                                    className="typing-text"
                                                    style={{
                                                        display: 'inline-block',
                                                        backgroundImage: 'linear-gradient(to right, #25D366, #128C7E)', // WhatsApp colors
                                                        backgroundClip: 'text',
                                                        WebkitBackgroundClip: 'text',
                                                        color: 'transparent'
                                                    }}
                                                    preRenderFirstString={true}
                                                />
                                            </span>{' '}
                                            de forma sencilla.
                                        </motion.h1>
                                        <motion.p variants={item} className="max-w-[600px] text-muted-foreground md:text-xl">
                                            AutoReply-Lite permite a pequeños negocios responder automáticamente a clientes con reglas simples,
                                            sin necesidad de conocimientos técnicos.
                                        </motion.p>
                                    </div>
                                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-2">
                                        <Button
                                            size="lg"
                                            className="px-8 bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 transition-opacity group"
                                        >
                                            <Link to="/login" className="flex items-center text-white">
                                                Probar Gratis
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </motion.div>

                                    <motion.div variants={item} className="flex items-center gap-4 mt-6">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div
                                                    key={i}
                                                    className="w-8 h-8 rounded-full border-2 border-background dark:border-gray-800 overflow-hidden bg-muted"
                                                >
                                                    <img
                                                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                                        width={32}
                                                        height={32}
                                                        alt={`User ${i}`}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <span className="font-medium text-foreground">+120</span> negocios confían en nosotros
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative flex items-center justify-center mt-8 lg:mt-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur-xl"></div>
                                    <div className="relative bg-gradient-to-r from-background/80 to-background/90 backdrop-blur-sm border rounded-3xl p-1 shadow-xl">
                                        <img
                                            src="/placeholder.svg?height=500&width=500&text=AutoReply-Lite+Dashboard"
                                            width={500}
                                            height={500}
                                            alt="AutoReply-Lite Dashboard"
                                            className="rounded-2xl object-cover w-full"
                                        />

                                        <div className="absolute -bottom-4 -right-4 bg-background dark:bg-gray-800 rounded-xl shadow-lg p-4 border">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium">Respondiendo automáticamente</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating elements */}
                        <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-violet-500/5 rounded-full blur-xl"></div>
                    </div>
                </section>

                {/* Resto de secciones... */}
                {/* Puedes agregar aquí las secciones de características, planes, testimonios, etc. */}
            </main>

            {/* Footer */}
            <footer id="contacto" className="w-full border-t bg-background dark:bg-transparent py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-full blur opacity-70"></div>
                                    <div className="relative bg-background dark:bg-gray-800 rounded-full p-1">
                                        <MessageSquareText className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                                    AutoReply-Lite
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Automatiza tus respuestas en Email y WhatsApp de forma sencilla. Ahorra tiempo y mejora la satisfacción
                                de tus clientes.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground">Producto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="#caracteristicas" className="hover:text-primary transition-colors">
                                        Características
                                    </a>
                                </li>
                                <li>
                                    <a href="#planes" className="hover:text-primary transition-colors">
                                        Planes
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground">Legal</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Términos y condiciones
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Política de privacidad
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground">Contacto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="mailto:info@autoreply-lite.com" className="hover:text-primary transition-colors">
                                        info@autoreply-lite.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} AutoReply-Lite. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
