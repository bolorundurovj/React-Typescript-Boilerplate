# Contributing to React JavaScript Boilerplate

Thank you for your interest in contributing to React JavaScript Boilerplate! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

We welcome contributions from the community! Here are the main ways you can contribute:

- 🐛 **Bug Reports**: Report bugs and issues
- 💡 **Feature Requests**: Suggest new features and improvements
- 📝 **Documentation**: Improve or add documentation
- 🔧 **Code Contributions**: Submit pull requests with code changes
- 🧪 **Testing**: Help improve test coverage
- 🌟 **Star the Repository**: Show your support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- Yarn 1.22.0 or higher
- Git

### Setting Up the Development Environment

1. **Fork the repository**

   ```bash
   # Fork on GitHub first, then clone your fork
   git clone https://github.com/YOUR_USERNAME/React-Javascript-Boilerplate.git
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

4. **Run tests to ensure everything works**
   ```bash
   yarn test
   ```

## 📋 Development Workflow

### 1. Create a Feature Branch

Always create a new branch for your changes:

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Check code quality
yarn lint
yarn format:check

# Fix auto-fixable issues
yarn lint:fix
yarn format
```

### 4. Commit Your Changes

Use conventional commit messages:

```bash
# Good commit messages
git commit -m "feat: add new button component"
git commit -m "fix(ui): resolve button alignment issue"
git commit -m "docs: update README with new features"
git commit -m "test: add unit tests for Button component"

# Avoid these
git commit -m "updated stuff"
git commit -m "fix"
git commit -m "wip"
```

### 5. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- Clear title and description
- Reference to any related issues
- Screenshots for UI changes
- Test results

## 📝 Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Prefer `const` over `let` and `var`
- Use arrow functions for consistency
- Use destructuring when possible
- Add JSDoc comments for complex functions

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow the existing design patterns
- Ensure responsive design
- Maintain accessibility standards

### Testing

- Write tests for all new features
- Aim for good test coverage
- Use descriptive test names
- Test both success and error cases

## 🧪 Testing Guidelines

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with UI
yarn test:ui

# Generate coverage report
yarn test:coverage

# Run tests once
yarn test:run
```

### Writing Tests

- Test component rendering
- Test user interactions
- Test error states
- Test accessibility features
- Use meaningful test descriptions

### Test Structure

```javascript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test rendering
  });

  it('should handle user interactions', () => {
    // Test interactions
  });

  it('should handle error states', () => {
    // Test error handling
  });
});
```

## 📚 Documentation Guidelines

### README Updates

- Keep installation instructions up to date
- Document new features
- Update examples and code snippets
- Maintain clear project structure

### Code Comments

- Add comments for complex logic
- Use JSDoc for function documentation
- Explain "why" not just "what"
- Keep comments up to date with code changes

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, browser, Node.js version)
5. **Screenshots** if applicable
6. **Console errors** if any

### Bug Report Template

```markdown
## Bug Description

Brief description of the issue

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Node.js Version: [e.g. 18.0.0]
- Yarn Version: [e.g. 1.22.0]

## Additional Information

Any other context, screenshots, or error messages
```

## 💡 Feature Requests

When suggesting features:

1. **Clear description** of the feature
2. **Use case** and benefits
3. **Implementation ideas** (optional)
4. **Mockups or examples** (if applicable)

### Feature Request Template

```markdown
## Feature Description

Brief description of the requested feature

## Use Case

Why this feature would be useful

## Proposed Implementation

How you think it could be implemented (optional)

## Examples

Any examples or mockups (optional)
```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure tests pass**

   ```bash
   yarn test:run
   ```

2. **Check code quality**

   ```bash
   yarn lint
   yarn format:check
   ```

3. **Update documentation** if needed

4. **Test your changes** thoroughly

### Pull Request Guidelines

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Reference issues** using keywords (e.g., "Fixes #123")
- **Include screenshots** for UI changes
- **Add tests** for new features
- **Update documentation** as needed

### Pull Request Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Checklist

- [ ] I have read the [CONTRIBUTING.md](CONTRIBUTING.md) file
- [ ] My code follows the project's style guidelines
- [ ] I have tested my changes thoroughly
- [ ] I have updated the documentation as needed
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 📞 Getting Help

If you need help or have questions:

- 📧 **Email**: [ulha2x7m4@mozmail.com](mailto:ulha2x7m4@mozmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/bolorundurovj/React-Javascript-Boilerplate/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/bolorundurovj/React-Javascript-Boilerplate/discussions)

## 🙏 Recognition

Contributors will be recognized in:

- The project's README file
- Release notes
- GitHub contributors page

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to React JavaScript Boilerplate!** 🎉

Your contributions help make this project better for everyone in the community.

## 📋 Automated Changelog

This project uses an automated changelog system that generates changelog entries from your commit messages.

### Commit Message Format

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
<type>(<scope>): <description>

# Examples:
feat: add new user authentication feature
fix(ui): resolve button alignment issue
docs: update README with new features
test: add unit tests for Button component
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Making Releases

When contributing features or fixes that should be included in a release:

1. **Ensure your commits follow conventional format**
2. **Write descriptive commit messages**
3. **Reference issues when applicable**

The maintainers will handle the release process using the automated release script:

```bash
# Patch release (bug fixes)
yarn release:patch

# Minor release (new features)
yarn release:minor

# Major release (breaking changes)
yarn release:major
```

For more details, see [docs/CHANGELOG.md](docs/CHANGELOG.md).
