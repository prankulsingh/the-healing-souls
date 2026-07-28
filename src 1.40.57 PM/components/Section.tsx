import { ReactNode } from 'react'

type SectionProps = {
    children: ReactNode
    id?: string
    className?: string
}

export default function Section({
                                    children,
                                    id,
                                    className = '',
                                }: SectionProps) {
    return (
        <section id={id} className={`py-section ${className}`}>
            {children}
        </section>
    )
}
