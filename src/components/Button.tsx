import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
    href?: string
    onClick?: () => void
    children: ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

export default function Button({
                                   href,
                                   onClick,
                                   children,
                                   variant = 'primary',
                                   className = '',
                               }: ButtonProps) {
    const base = 'inline-block font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2'
    const styles = {
        primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50',
    }
    const cls = `${base} ${styles[variant]} ${className}`

    if (href) {
        return (
            <Link href={href} className={cls}>
                {children}
            </Link>
        )
    }
    return (
        <button onClick={onClick} className={cls}>
            {children}
        </button>
    )
}
