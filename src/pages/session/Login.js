/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica de autenticación
        console.log('Login attempt with:', { email, password })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
            {/* Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[10rem]"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[10rem]"></div>
                </div>
            </div>

            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-flex items-center gap-2">
                        {/* Icono simplificado */}
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
                            className="h-6 w-6 text-primary dark:text-primary-400"
                        >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <path d="M13 8H7" />
                            <path d="M13 12H7" />
                        </svg>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                            AutoReply-Lite
                        </span>
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold">Iniciar sesión</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Ingresa tus credenciales para acceder a tu cuenta
                    </p>
                </div>

                <div className="bg-background/60 backdrop-blur-sm border rounded-lg p-6 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Contraseña
                                </label>
                                <a href="#" className="text-xs text-primary hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 transition-opacity"
                        >
                            Iniciar sesión
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        ¿No tienes una cuenta?{' '}
                        <a href="#" className="text-primary hover:underline">
                            Regístrate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
