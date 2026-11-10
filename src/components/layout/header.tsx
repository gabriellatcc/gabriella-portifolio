import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { navigationSections } from '@/lib/navigation'
import { Mail } from 'lucide-react'

export function Header() {
    return (
        <header className="bg-background text-foreground shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
            <div className="shrink-0 flex items-center text-3xl gap-0.5 font-bold text-foreground/90 group">
                <span className="text-primary transition-transform group-hover:-translate-x-0.5">
                    &lt;
                </span>
                <span className="inline-block text-foreground transition-transform duration-200 group-hover:scale-101">
                    Gabriella's Portfolio
                </span>
                <span className="ml-1 text-primary transition-transform group-hover:translate-x-0.5">
                    /&gt;
                </span>
            </div>
            <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-6">
                    <Link
                    to="/home"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    activeProps={{ className: 'text-foreground font-semibold' }}
                    >
                    Home
                    </Link>
                {navigationSections.map(({ label, to }) => (
                    <Link
                    key={to}
                    to={to}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    activeProps={{ className: 'text-foreground font-semibold' }}
                    >
                    {label}
                    </Link>
                ))}
                </nav>
                <ThemeToggle />
            </div>
            <div className="flex items-center gap-3">
                <a href="mailto:gabriellatccorrea@gmail.com" className="bg-ring/10 text-chart-2 border border-chart-2/30 hover:bg-chart-2/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Contact Me</span>
                </a>
            </div>
            </div>
        </div>
        </header>
    )
}