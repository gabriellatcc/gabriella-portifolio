import { Link } from '@tanstack/react-router'
import { navigationSections } from '@/lib/navigation'
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-background text-secondary-foreground border-t border-border">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
                <div>
                    <span className="text-xl font-bold text-foreground">
                        Gabriella's Portifolio
                    </span>
                </div>
                <div>
                    <nav className="flex  gap-6">
                        {navigationSections.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                            activeProps={{ className: 'text-foreground font-semibold' }}
                        >
                            {label}
                        </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="flex justify-between max-w-6xl mx-auto px-4 py-2 border-t border-border">
                <p className="mt-4 text-center md:text-left text-sm text-foreground/60">
                © {new Date().getFullYear()} Gabriella Corrêa. All rights reserved.
                </p>
                <div className="flex mt-2 text-center md:text-left text-sm text-foreground/60">
                    Developed by
                    <FaGithub className="inline-block ml-2 mr-1 mt-0.5" />
                    <a href="https://github.com/gabriellacorrea" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">gabriellatcc</a>
                </div>
            </div>
        </footer>
    )
}