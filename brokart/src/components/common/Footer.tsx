import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground mt-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold">BroKart</h3>
                        <p className="text-sm opacity-90">Your trusted online shopping destination for quality products.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-sm">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Home
                            </Link>
                            <Link href="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Shop
                            </Link>
                            <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                About Us
                            </Link>
                            <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-sm">Support</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                FAQ
                            </Link>
                            <Link href="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Shipping Info
                            </Link>
                            <Link href="/returns" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Returns
                            </Link>
                            <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-sm">Contact</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <Phone size={16} />
                                +1 (234) 567-890
                            </a>
                            <a
                                href="mailto:support@brokart.com"
                                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <Mail size={16} />
                                support@brokart.com
                            </a>
                            <div className="flex items-center gap-2 opacity-80">
                                <MapPin size={16} />
                                <span>123 Commerce St, City</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary-foreground/20 my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm opacity-80">&copy; {currentYear} BroKart. All rights reserved.</p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
