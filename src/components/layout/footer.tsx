import { Link } from '@tanstack/react-router'
import { navigationSections } from '@/lib/navigation'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SITE, CONTACT } from '@/lib/userinfo'
import { Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-background text-secondary-foreground border-t border-border">
            <p className="text-xl font-bold text-foreground/90">
                        Gabriella's Portifolio
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6 max-w-6xl mx-auto px-4 py-2">
                <div>
                    <p className="uppercase label-technical mb-2 font-bold text-muted-foreground/80">
                        About
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        {SITE.description}
                    </p>
                </div>
                <div>
                    <p className="uppercase label-technical mb-2 font-bold text-muted-foreground/80">
                        Navigation
                    </p>
                    <nav className="space-y-1.5 text-sm text-muted-foreground">
                        <ul>
                            <li>
                                <Link to="/home" className="hover:text-muted-foreground">
                                    Home
                                </Link>
                            </li>
                            {navigationSections.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to} className="hover:text-muted-foreground">
                                {item.label}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className="uppercase label-technical mb-2 font-bold text-muted-foreground/80">
                        Contact
                    </p>
                    <nav className="space-y-1.5 text-sm text-muted-foreground">
                        <ul>
                            <li>
                                <a href={`mailto:${CONTACT.email}`} className="hover:text-muted-foreground">
                                    <Mail className="inline-block mr-1 mt-0.5 size-4" />
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li>
                                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">
                                    <FaLinkedin className="inline-block mr-1 mt-0.7" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex justify-between max-w-6xl mx-auto px-4 py-2 border-t border-border">
                <p className="mt-4 text-center md:text-left text-sm text-muted-foreground/60">
                © {new Date().getFullYear()} Gabriella Corrêa. All rights reserved.
                </p>
                <div className="flex mt-2 text-center md:text-left text-sm text-muted-foreground/60">
                    Developed by
                    <FaGithub className="inline-block ml-2 mr-1 mt-0.5" />
                    <a href="https://github.com/gabriellacorrea" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-muted-foreground transition-colors">gabriellatcc</a>
                </div>
            </div>
        </footer>
    )
}