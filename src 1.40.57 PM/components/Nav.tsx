'use client'

import { useState } from 'react'
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
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav
            role="navigation"
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200"
        >
            <Container className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    Healing Souls
                </Link>

                {/* Desktop Links */}
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

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button
                        href="https://instagram.com/_the_healing_souls/"
                        variant="primary"
                        className="whitespace-nowrap"
                    >
                        Book Free Consultation
                    </Button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        {menuOpen ? (
                            // X icon
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white border-b border-neutral-200 shadow-sm">
                    <Container className="py-4">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`block text-lg text-neutral-700 hover:text-primary ${
                                                isActive ? 'font-semibold text-primary' : ''
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="mt-4">
                            <Button
                                href="https://instagram.com/_the_healing_souls/"
                                variant="primary"
                                className="w-full text-center"
                            >
                                Book Free Consultation
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    )
}
