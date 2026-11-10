import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeSwitch } from '@/components/layout/theme-switch'
import { navigationSections } from '@/lib/navigation'

const styles = {
    navigationClass: 'flex items-center text-secondary-foreground/70 hover:text-chart-4 transition-colors group relative',
    underline: 'absolute -bottom-px left-0 h-0.5 w-0 bg-chart-4 transition-all group-hover:w-full',
    mobileLink: 'block px-4 py-3 text-secondary-foreground/70 hover:text-chart-4 hover:bg-accent/50 transition-colors',
}

const links = [{ label: 'Home', to: '/home' }, ...navigationSections]

export function Header() {
    return (
        <header className="bg-sidebar text-sidebar-foreground shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-stretch justify-between">
            <div className="shrink-0 flex items-center py-3 text-2xl gap-0.5 font-bold text-foreground/90 group">
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
            <div className="flex items-stretch gap-3 md:gap-6">
                <nav className="hidden md:flex items-stretch gap-6">
                {links.map(({ label, to }) => (
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
                <Sheet>
                    <SheetTrigger
                        render={
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden self-center"
                            aria-label="Abrir menu"
                        />
                        }
                    >
                        <Menu className="size-6" />
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-72 gap-0 bg-sidebar text-sidebar-foreground border-sidebar-border p-0"
                    >
                        <SheetHeader className="px-5 pt-5 pb-2">
                        <SheetTitle className="text-2xl font-bold text-sidebar-foreground">
                            <span className="text-sidebar-primary">&lt;</span>
                            Gabriella's Portfolio
                            <span className="text-sidebar-primary">/&gt;</span>
                        </SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col px-5 border-t border-sidebar-border">
                        {links.map(({ label, to }) => (
                            <SheetClose
                            key={to}
                            render={
                                <Link
                                to={to}
                                className="border-b border-sidebar-border py-4 text-lg font-semibold text-sidebar-foreground transition-colors hover:text-sidebar-primary"
                                activeProps={{
                                    className:
                                    'border-b border-sidebar-border py-4 text-lg font-semibold text-sidebar-primary',
                                }}
                                />
                            }
                            >
                            {label}
                            </SheetClose>
                        ))}
                        </nav>
                    </SheetContent>
                    </Sheet>
            </div>
            </div>
        </div>
        </header>
    )
}