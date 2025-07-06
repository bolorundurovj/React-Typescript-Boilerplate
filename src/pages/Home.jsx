import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { ArrowRight, Zap, Shield, Code, Palette } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast Development',
      description: 'Built with Vite for lightning-fast development and hot module replacement.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Type Safe',
      description: 'Full TypeScript support with strict type checking and IntelliSense.',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Modern Stack',
      description: 'React 18, Tailwind CSS, and shadcn/ui components for modern web development.',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Beautiful UI',
      description: 'Pre-built components with dark mode support and responsive design.',
    },
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            React JavaScript Boilerplate
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A minimal and flexible boilerplate for building modern web applications
            with React and JavaScript. Get started quickly with best practices and
            essential tooling pre-configured.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build modern web apps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This boilerplate comes with all the essential tools and configurations
            you need to start building production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clone this repository and start building your next great application.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              asChild
            >
              <a 
                href="https://github.com/bolorundurovj/React-Javascript-Boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clone Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 