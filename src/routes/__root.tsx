import {
    createRootRoute,
    Outlet,
} from '@tanstack/react-router'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NotFound } from '@/components/handlers/not-found'
import { RootError } from '@/components/handlers/root-error'
// import { Pending } from '@/components/handlers/pending'
import Rays from "@/components/spell-ui/light-rays";

export const Route = createRootRoute({
    component: () => (
        <div className="relative min-h-screen flex flex-col text-foreground">
            <Rays backgroundColor="var(--sidebar)" style={{ zIndex: 0 }} />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
        ),
    notFoundComponent: NotFound,
    errorComponent: RootError,
    // pendingComponent: Pending,
})