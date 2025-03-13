// src/ui/Button.js

const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }) => {
    // Estilos base
    const baseStyles = 'font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

    // Variantes
    const variantStyles = {
        primary: 'bg-gradient-to-r from-primary to-violet-500 text-white hover:opacity-90',
        ghost: 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
    }

    // Tamaños
    const sizeStyles = {
        default: 'px-4 py-2 text-sm',
        sm: 'px-3 py-1.5 text-xs',
        lg: 'px-6 py-3 text-base',
        icon: 'p-2' // Para botones que solo contienen un ícono
    }

    // Combina los estilos
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}

export default Button
