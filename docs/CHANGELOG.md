# Automated Changelog System

This project uses an automated changelog system that generates changelog entries based on conventional commit messages. This ensures consistent, well-structured changelogs that are automatically updated with each release.

## 🎯 Overview

The automated changelog system consists of:

- **conventional-changelog-cli**: Generates changelog from git commits
- **conventional-changelog-conventionalcommits**: Preset for conventional commits format
- **GitHub Actions workflow**: Automated releases with changelog generation
- **Release script**: Helper script for version bumping and releases

## 📝 Conventional Commits

The changelog is generated from commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

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

### Examples

```bash
# Feature
git commit -m "feat: add user authentication"

# Bug fix with scope
git commit -m "fix(ui): resolve button alignment issue"

# Documentation
git commit -m "docs: update README with new features"

# Breaking change
git commit -m "feat!: change API interface"

# With body and footer
git commit -m "feat: add user authentication

This adds JWT-based authentication with refresh tokens.

Closes #123"
```

## 🚀 Making Releases

### Using the Release Script (Recommended)

The easiest way to create a release is using the provided release script:

```bash
# Patch release (0.0.1) - Bug fixes
yarn release:patch

# Minor release (0.1.0) - New features
yarn release:minor

# Major release (1.0.0) - Breaking changes
yarn release:major
```

The release script will:

1. ✅ Check if working directory is clean
2. 🧪 Run all tests
3. 🔨 Build the project
4. 📝 Generate/update the changelog
5. 📦 Bump the version in package.json
6. 💾 Commit and tag the changes
7. 🚀 Push to remote repository
8. 🔄 Trigger GitHub Actions release workflow

### Manual Release Process

If you prefer to do it manually:

```bash
# 1. Ensure working directory is clean
git status

# 2. Run tests
yarn test:run

# 3. Build project
yarn build

# 4. Generate changelog
yarn changelog

# 5. Bump version (patch, minor, or major)
yarn version --patch --no-git-tag-version

# 6. Add changes
git add .

# 7. Commit
git commit -m "chore: release v1.0.0"

# 8. Create tag
git tag -a v1.0.0 -m "Release v1.0.0"

# 9. Push
git push origin main
git push origin --tags
```

## 📋 Changelog Generation

### Generate Changelog

```bash
# Generate changelog for unreleased commits
yarn changelog

# Generate full changelog from the beginning
yarn changelog:first
```

### Changelog Structure

The generated changelog follows the [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
# Changelog

## [Unreleased]

### Features

- New feature 1
- New feature 2

### Bug Fixes

- Bug fix 1
- Bug fix 2

### Breaking Changes

- Breaking change 1

## [1.0.0] - 2024-01-01

### Features

- Initial release
```

## 🔧 Configuration

### .changelogrc.js

The changelog generation is configured in `.changelogrc.js`:

```javascript
module.exports = {
  preset: 'conventionalcommits',
  releaseCount: 0,
  outputUnreleased: true,
  tagPrefix: 'v',
  // ... more configuration
};
```

### Customization

You can customize the changelog generation by modifying:

- **Commit types**: Add new types or modify existing ones
- **Grouping**: Change how commits are grouped
- **Formatting**: Modify the output format
- **Filtering**: Exclude certain commits or types

## 🤖 GitHub Actions Integration

### Automated Release Workflow

When you push a tag (e.g., `v1.0.0`), the GitHub Actions workflow will:

1. **Checkout** the repository
2. **Setup** Node.js environment
3. **Install** dependencies
4. **Run tests** to ensure quality
5. **Build** the project
6. **Generate** changelog
7. **Create** GitHub release with changelog
8. **Upload** release assets
9. **Update** CHANGELOG.md

### Workflow File

The workflow is defined in `.github/workflows/release.yml` and triggers on tag pushes.

## 📊 Best Practices

### Writing Good Commit Messages

1. **Use conventional commit format**

   ```bash
   feat: add user authentication
   fix(ui): resolve button alignment
   docs: update installation guide
   ```

2. **Be descriptive but concise**

   ```bash
   # Good
   feat: add dark mode toggle with persistent storage

   # Bad
   feat: add stuff
   ```

3. **Use scopes when relevant**

   ```bash
   feat(ui): add new button component
   fix(auth): resolve login validation issue
   ```

4. **Reference issues when applicable**

   ```bash
   fix: resolve navigation bug

   Closes #123
   Fixes #456
   ```

### Release Frequency

- **Patch releases**: Bug fixes and minor improvements
- **Minor releases**: New features (backwards compatible)
- **Major releases**: Breaking changes

### Pre-release Checklist

Before making a release:

1. ✅ All tests pass
2. ✅ Code is linted and formatted
3. ✅ Documentation is up to date
4. ✅ Working directory is clean
5. ✅ Commit messages follow conventional format

## 🐛 Troubleshooting

### Common Issues

**Changelog is empty**

- Ensure commits follow conventional format
- Check if commits are within the version range
- Verify `.changelogrc.js` configuration

**Release script fails**

- Check if working directory is clean
- Ensure all tests pass
- Verify git remote is configured

**GitHub Actions workflow fails**

- Check workflow logs for specific errors
- Ensure repository has proper permissions
- Verify tag format (should start with 'v')

### Getting Help

If you encounter issues:

1. Check the [conventional-changelog documentation](https://github.com/conventional-changelog/conventional-changelog)
2. Review the [Conventional Commits specification](https://www.conventionalcommits.org/)
3. Open an issue in the repository

## 📚 Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
