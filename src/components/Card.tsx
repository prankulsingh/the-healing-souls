import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    className?: string
}

export default function Card({
                                 children,
                                 className = '',
                             }: CardProps) {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {children}
        </div>
    )
}
