import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { CheckCircle, Package, Settings, Users } from 'lucide-react'

const About = () => {
  const techStack = [
    'React 18',
    'JavaScript (ES6+)',
    'Vite',
    'Tailwind CSS',
    'shadcn/ui',
    'React Router',
    'Vitest',
    'Testing Library',
    'ESLint',
    'Prettier',
  ]

  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Modern Tooling',
      description: 'Built with the latest tools and libraries for optimal development experience.',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Pre-configured',
      description: 'Everything is set up and ready to go. No complex configuration needed.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Best Practices',
      description: 'Follows React and JavaScript best practices for maintainable code.',
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            About This Boilerplate
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This React JavaScript boilerplate is designed to help you start building
            modern web applications quickly and efficiently. It includes all the
            essential tools and configurations you need to get up and running.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
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

        {/* Tech Stack */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Stack</CardTitle>
            <CardDescription>
              This boilerplate is built with modern, battle-tested technologies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg border bg-card"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Getting Started</CardTitle>
            <CardDescription>
              Follow these steps to get your project up and running.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-2">1. Clone the repository</h4>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  git clone https://github.com/bolorundurovj/React-Javascript-Boilerplate.git
                </code>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-2">2. Install dependencies</h4>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  yarn install
                </code>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-2">3. Start the development server</h4>
                <code className="text-sm bg-background px-2 py-1 rounded">
                  yarn dev
                </code>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-2">4. Open your browser</h4>
                <p className="text-sm text-muted-foreground">
                  Navigate to <code className="bg-background px-1 rounded">http://localhost:5173</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About 