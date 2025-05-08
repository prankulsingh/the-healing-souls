'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'
import Button from './Button'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Resources', href: '/resources' },
    { label: 'Tests', href: '/tests' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav
            role="navigation"
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200"
        >
            <Container className="flex items-center justify-between py-4">
                <Link href="/" className="text-2xl font-bold text-primary">
                    Healing Souls
                </Link>

                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`text-neutral-700 hover:text-primary ${
                                        isActive ? 'font-semibold text-primary' : ''
                                    }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="hidden md:block">
                    <Button
                        href="https://instagram.com/TheHealingSouls"
                        variant="primary"
                        className="whitespace-nowrap"
                    >
                        Book Free Consultation
                    </Button>
                </div>

                {/* Mobile menu toggle can go here in phase 2 */}
            </Container>
        </nav>
    )
}
