import { Link } from '@tanstack/react-router'
import { ThemeSwitch } from '@/components/layout/theme-switch'
import { navigationSections } from '@/lib/navigation'

const styles = {
    navigationClass:
        'flex items-center text-secondary-foreground/70 hover:text-sidebar-accent-foreground transition-colors group relative',
    underline:
        'absolute -bottom-px left-0 h-0.5 w-0 bg-sidebar-accent transition-all group-hover:w-full',
};

export function Header() {
    return (
        <header className="bg-sidebar text-sidebar-foreground shadow-sm border-b border-border">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-stretch justify-between">
                    <div className="shrink-0 flex items-center py-3 text-3xl gap-0.5 font-bold text-foreground/90 group">
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
                    <div className="flex items-stretch gap-6">
                        <nav className="hidden md:flex items-stretch gap-6">
                            <Link
                                to="/home"
                                className={styles.navigationClass}
                                activeProps={{ className: 'text-foreground font-semibold' }}
                            >
                                Home
                                <span className={styles.underline} />
                            </Link>
                            {navigationSections.map(({ label, to }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className={styles.navigationClass}
                                    activeProps={{ className: 'text-foreground font-semibold' }}
                                >
                                    {label}
                                    <span className={styles.underline} />
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center">
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}