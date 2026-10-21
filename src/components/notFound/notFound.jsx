
import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                Looks like this page doesn't exist or has been moved.
            </p>
        </div>
    )
}

export default NotFound
