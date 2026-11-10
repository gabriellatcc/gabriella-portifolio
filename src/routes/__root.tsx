import {
    createRootRoute,
    Outlet,
} from '@tanstack/react-router'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NotFound } from '@/components/handlers/not-found'
import { RootError } from '@/components/handlers/root-error'
// import { Pending } from '@/components/handlers/pending'

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <Outlet />
        </main>
        <Footer />
        </div>
    ),
    notFoundComponent: NotFound,
    errorComponent: RootError,
    // pendingComponent: Pending,
})