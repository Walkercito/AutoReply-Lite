/* eslint-disable no-unused-vars */
// src/pages/homePage/HomePage.js
/* eslint-disable no-unused-vars */
// src/pages/homePage/HomePage.js
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

// Iconos SVG
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
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-[#0a0a23] dark:to-[#0a0a23]/90">
            {/* Fondo decorativo */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[10rem]" />
                    <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[10rem]" />
                </div>
            </div>

            <NavBar />

            <main className="flex-1">
                {/* Sección Hero */}
                <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={container}
                            className="grid gap-6 md:gap-10"
                        >
                            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
                                {/* Columna izquierda */}
                                <motion.div variants={item} className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary dark:bg-primary/10 dark:text-primary-200 dark:border-primary/30"
                                        >
                                            <Sparkles className="mr-1 h-3 w-3 text-current" /> Nuevo lanzamiento
                                        </motion.div>

                                        <motion.h1
                                            variants={item}
                                            className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground dark:from-primary via-foreground dark:via-primary/90 to-foreground/70 dark:to-primary/70 bg-clip-text text-transparent"
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
                                                        backgroundImage: 'linear-gradient(to right, #25D366, #128C7E)',
                                                        backgroundClip: 'text',
                                                        WebkitBackgroundClip: 'text',
                                                        color: 'transparent'
                                                    }}
                                                    preRenderFirstString={true}
                                                />
                                            </span>{' '}
                                            de forma sencilla.
                                        </motion.h1>

                                        <motion.p
                                            variants={item}
                                            className="max-w-[600px] text-muted-foreground dark:text-gray-300 md:text-xl"
                                        >
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
                                                    className="w-8 h-8 rounded-full border-2 border-background dark:border-gray-800 overflow-hidden bg-gradient-to-br from-primary/80 to-violet-500/80 flex items-center justify-center text-white text-xs font-bold"
                                                >
                                                    {i}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-sm text-muted-foreground dark:text-gray-400">
                                            <span className="font-medium text-foreground dark:text-primary">+120</span> negocios confían en nosotros
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Columna derecha - Imagen */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative flex items-center justify-center mt-8 lg:mt-0 px-4 sm:px-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur-xl" />
                                    <div className="relative bg-gradient-to-r from-background/80 to-background/90 dark:from-gray-900/80 dark:to-gray-900 backdrop-blur-sm border rounded-3xl p-1 shadow-xl w-full max-w-[90vw] md:max-w-none">
                                        <div
                                            className="rounded-2xl w-full h-[300px] md:h-[400px] max-w-[350px] md:max-w-[500px] mx-auto bg-gradient-to-br from-primary/10 to-violet-500/10 flex flex-col items-center justify-center p-6 text-center"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                                <MessageSquareText className="h-8 w-8 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">AutoReply-Lite Dashboard</h3>
                                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                                                Vista previa del panel de control que te permite gestionar todas tus respuestas automáticas
                                            </p>
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 md:-right-4 bg-background dark:bg-gray-800 rounded-xl shadow-lg p-3 md:p-4 border dark:border-gray-700 transform scale-75 md:scale-100">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs md:text-sm font-medium whitespace-nowrap dark:text-gray-200">
                                                    Respondiendo automáticamente
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Elementos decorativos */}
                        <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-violet-500/5 rounded-full blur-xl" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contacto" className="w-full border-t dark:border-gray-800 bg-background dark:bg-gray-900 py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <MessageSquareText className="h-6 w-6 text-primary dark:text-primary-400" />
                                <span className="text-xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                                    AutoReply-Lite
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Automatiza tus respuestas en Email y WhatsApp de forma sencilla. Ahorra tiempo y mejora la satisfacción
                                de tus clientes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground dark:text-gray-200">Producto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-400">
                                <li><a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a></li>
                                <li><a href="#planes" className="hover:text-primary transition-colors">Planes</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground dark:text-gray-200">Legal</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-foreground dark:text-gray-200">Contacto</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-400">
                                <li>
                                    <a href="mailto:info@autoreply-lite.com" className="hover:text-primary transition-colors">
                                        info@autoreply-lite.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t dark:border-gray-800 pt-8 text-center text-sm text-muted-foreground dark:text-gray-400">
                        <p>© {new Date().getFullYear()} AutoReply-Lite. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
