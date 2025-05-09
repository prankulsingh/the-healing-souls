import { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode
    className?: string
}

export default function Container({
                                      children,
                                      className = '',
                                  }: ContainerProps) {
    return (
        <div className={`container mx-auto px-6 ${className}`}>
            {children}
        </div>
    )
}
