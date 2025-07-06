# React JavaScript Boilerplate

A minimal and flexible boilerplate for building modern web applications with React and JavaScript. Get started quickly with best practices and essential tooling pre-configured.

## ✨ Features

- **⚡ Fast Development** - Built with Vite for lightning-fast development and hot module replacement
- **🎨 Modern UI** - Tailwind CSS with shadcn/ui components for beautiful, accessible interfaces
- **🌙 Dark Mode** - Built-in dark/light theme toggle with persistent storage
- **📱 Responsive** - Mobile-first responsive design with modern CSS
- **🧪 Testing** - Comprehensive test suite with Vitest and Testing Library
- **🔧 Developer Experience** - ESLint, Prettier, and TypeScript support
- **📦 Package Manager** - Yarn for fast, reliable dependency management
- **🚀 Production Ready** - Optimized build process with Vite
- **🔒 Git Hooks** - Pre-commit, commit-msg, and pre-push hooks for code quality
- **📋 Automated Changelog** - Generate changelog from conventional commit messages

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Routing**: React Router v6
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **Package Manager**: Yarn
- **Git Hooks**: Husky + lint-staged

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- Yarn 1.22.0 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bolorundurovj/React-Javascript-Boilerplate.git
   cd React-Javascript-Boilerplate
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   └── Label.jsx
│   ├── Layout.jsx      # Main layout component
│   └── __tests__/      # Component tests
├── contexts/           # React contexts
│   ├── ThemeContext.jsx
│   └── __tests__/      # Context tests
├── lib/                # Utility functions
│   └── utils.js
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── NotFound.jsx
│   └── __tests__/      # Page tests
├── test/               # Test configuration
│   └── setup.js
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🧪 Testing

This boilerplate includes comprehensive testing setup with Vitest and Testing Library.

### Run Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with UI
yarn test:ui

# Generate coverage report
yarn test:coverage
```

### Test Structure

- **Component Tests**: Test individual UI components
- **Context Tests**: Test React contexts and hooks
- **Page Tests**: Test page components and user interactions
- **Integration Tests**: Test component interactions

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with a custom configuration that includes:

- Custom color palette with CSS variables
- Dark mode support
- Responsive design utilities
- Custom animations and transitions

### shadcn/ui Components

Pre-built, accessible components that follow modern design patterns:

- **Button**: Multiple variants and sizes
- **Card**: Flexible card layouts
- **Input**: Form input components
- **Label**: Accessible form labels

### Customization

1. **Colors**: Modify CSS variables in `src/index.css`
2. **Components**: Customize shadcn/ui components in `src/components/ui/`
3. **Theme**: Update `tailwind.config.js` for custom configurations

## 🔧 Development

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build

# Testing
yarn test         # Run tests
yarn test:watch   # Run tests in watch mode
yarn test:ui      # Run tests with UI
yarn test:coverage # Generate coverage report

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint errors
yarn format       # Format code with Prettier
yarn format:check # Check code formatting

# Changelog & Releases
yarn changelog    # Generate changelog for unreleased commits
yarn changelog:first # Generate full changelog from beginning
yarn release:patch # Create patch release (0.0.1)
yarn release:minor # Create minor release (0.1.0)
yarn release:major # Create major release (1.0.0)
```

### Code Quality

- **ESLint**: JavaScript linting with React-specific rules
- **Prettier**: Code formatting for consistent style
- **TypeScript**: Type checking (optional, can be enabled)

### Git Hooks

This boilerplate includes pre-configured Git hooks to ensure code quality:

#### Pre-commit Hook

- Runs ESLint on staged JavaScript/JSX files
- Formats code with Prettier
- Automatically fixes auto-fixable issues

#### Commit Message Hook

- Enforces conventional commit message format
- Ensures descriptive and consistent commit messages
- Supports scoped commits (e.g., `feat(ui): add new button component`)

#### Pre-push Hook

- Runs all tests before pushing
- Prevents broken code from being pushed to remote
- Ensures code quality and test coverage

#### Conventional Commit Format

```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
Examples:
- feat: add user authentication
- fix(ui): resolve button alignment issue
- docs: update README with new features
- test: add unit tests for Button component
```

#### Disabling Hooks (if needed)

```bash
# Skip pre-commit hook for a single commit
git commit -m "your message" --no-verify

# Skip pre-push hook for a single push
git push --no-verify
```

## 📋 Automated Changelog

This boilerplate includes an automated changelog system that generates changelog entries based on conventional commit messages.

### How It Works

The changelog is automatically generated from your commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This ensures consistent, well-structured changelogs.

### Making Releases

#### Quick Release (Recommended)

```bash
# Patch release (0.0.1) - Bug fixes
yarn release:patch

# Minor release (0.1.0) - New features
yarn release:minor

# Major release (1.0.0) - Breaking changes
yarn release:major
```

The release script automatically:

1. ✅ Runs tests to ensure quality
2. 🔨 Builds the project
3. 📝 Generates/updates the changelog
4. 📦 Bumps the version
5. 🏷️ Creates a git tag
6. 🚀 Pushes to remote
7. 🔄 Triggers GitHub Actions release workflow

#### Manual Changelog Generation

```bash
# Generate changelog for unreleased commits
yarn changelog

# Generate full changelog from the beginning
yarn changelog:first
```

### Commit Message Format

The changelog is generated from commits that follow this format:

```bash
<type>(<scope>): <description>

# Examples:
feat: add user authentication
fix(ui): resolve button alignment issue
docs: update README with new features
test: add unit tests for Button component
```

### GitHub Actions Integration

When you create a release, the GitHub Actions workflow automatically:

- Runs tests and builds the project
- Generates a changelog
- Creates a GitHub release with the changelog
- Uploads release assets
- Updates the CHANGELOG.md file

For detailed documentation, see [docs/CHANGELOG.md](docs/CHANGELOG.md).

## 📦 Building for Production

```bash
# Build the project
yarn build

# Preview the production build
yarn preview
```

The build output will be in the `dist/` directory, optimized for production deployment.

## 🌐 Deployment

### GitHub Pages (Recommended)

This boilerplate is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment

1. **Push to main branch**

   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **gh-pages** branch and **/(root)** folder
   - Click **Save**

3. **Your site will be available at**
   ```
   https://YOUR_USERNAME.github.io/React-Javascript-Boilerplate/
   ```

#### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
yarn build

# Deploy to GitHub Pages (requires gh-pages package)
npx gh-pages -d dist
```

#### Custom Domain (Optional)

1. **Add your domain** to the `cname` field in `.github/workflows/deploy.yml`
2. **Create a CNAME file** in the `public/` directory with your domain
3. **Configure DNS** to point to `YOUR_USERNAME.github.io`

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Build the project: `yarn build`
2. Deploy the `dist/` folder to Netlify
3. Configure build settings if needed

### Other Platforms

The boilerplate works with any static hosting platform:

- **Firebase Hosting**: Google's hosting platform
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **DigitalOcean App Platform**: Simple deployment

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `yarn test`
5. Commit your changes: `git commit -m 'feat: add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Follow the existing code style
- Use conventional commit messages
- Write tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [React Router](https://reactrouter.com/) for client-side routing
- [Vitest](https://vitest.dev/) for the testing framework

## 📞 Support

If you have any questions or need help:

- 📧 Email: [contact@example.com](mailto:contact@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/bolorundurovj/React-Javascript-Boilerplate/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/bolorundurovj/React-Javascript-Boilerplate/discussions)

---

**Made with ❤️ by [Bolorunduro Valiant-Joshua](https://github.com/bolorundurovj)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bolorundurovj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bolorundurovb/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/bolorundurovb)
