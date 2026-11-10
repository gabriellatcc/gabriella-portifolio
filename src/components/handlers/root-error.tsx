import { useRouter, type ErrorComponentProps } from '@tanstack/react-router'

export function RootError({ error, reset }: ErrorComponentProps) {
    const router = useRouter()

    const message =
        import.meta.env.DEV && error instanceof Error
        ? error.message
        : 'Try again in a moment.'

    return (
        <div className="py-16 text-center">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-2 text-foreground/70">{message}</p>
            <button
                className="mt-6 underline"
                onClick={() => {
                reset()
                router.invalidate()
                }}
            >
                Try again
            </button>
        </div>
    )
}