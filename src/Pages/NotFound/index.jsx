import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { Button } from "../../Components/Button"

function NotFound() {
return (
    <Layout>
        <div className="flex flex-col items-center text-center w-80 gap-2">
            <span className="font-mono text-accent text-sm tracking-wide">ERROR 404</span>
            <h1 className="font-display text-3xl">Page not tagged</h1>
            <p className="font-body text-sm text-ink/60 mb-6">
                We couldn&apos;t find what you&apos;re looking for. It may have been moved or never existed.
            </p>
            <Link to="/" className="w-full">
                <Button>Back to shop</Button>
            </Link>
        </div>
    </Layout>
)
}

export default NotFound
