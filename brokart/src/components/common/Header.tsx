"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "../ui/button"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: "Shop", href: "#" },
        { label: "Categories", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
                        <span>BroKart</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Search - Hidden on mobile */}
                        <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-48">
                            <Search className="w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="ml-2 bg-transparent text-sm outline-none w-full placeholder-muted-foreground"
                            />
                        </div>

                        {/* Cart Icon */}
                        <button className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                                0
                            </span>
                        </button>

                        {/* User Icon */}
                        <Button className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors hidden sm:block">
                            <User className="w-5 h-5" />
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden border-t border-border py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        {/* Mobile Search */}
                        <div className="px-4 py-2">
                            <div className="flex items-center bg-muted rounded-lg px-3 py-2">
                                <Search className="w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="ml-2 bg-transparent text-sm outline-none w-full placeholder-muted-foreground"
                                />
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}