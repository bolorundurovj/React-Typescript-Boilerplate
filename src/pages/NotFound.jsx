import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="container px-4 py-24 mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-muted-foreground">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound

 