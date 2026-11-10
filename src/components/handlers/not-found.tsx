import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-foreground/70">Page Not Found.</p>
      <Link to="/home" className="mt-6 inline-block underline">
        Hit the road dude, go back to Home
      </Link>
    </div>
  )
}