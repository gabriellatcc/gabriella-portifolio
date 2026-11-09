import { ThemeToggle } from '@/components/layout/theme-toggle'

export function Header() {
    return (
        <header className="flex items-center justify-between p-4">
        <span className="font-semibold">Gabriella</span>
        <nav className="flex items-center gap-4">
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
            <ThemeToggle />
        </nav>
        </header>
    )
}