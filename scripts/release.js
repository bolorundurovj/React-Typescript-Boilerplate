#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    log(`❌ Command failed: ${command}`, 'red');
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

function bumpVersion(type) {
  const validTypes = ['patch', 'minor', 'major'];
  if (!validTypes.includes(type)) {
    log(`❌ Invalid version type. Use: ${validTypes.join(', ')}`, 'red');
    process.exit(1);
  }

  log(`🚀 Starting release process for ${type} version...`, 'cyan');

  // Check if working directory is clean
  try {
    exec('git diff-index --quiet HEAD --');
  } catch (error) {
    log(
      '❌ Working directory is not clean. Please commit or stash your changes.',
      'red'
    );
    process.exit(1);
  }

  // Run tests
  log('🧪 Running tests...', 'yellow');
  exec('yarn test:run');

  // Build project
  log('🔨 Building project...', 'yellow');
  exec('yarn build');

  // Generate changelog
  log('📝 Generating changelog...', 'yellow');
  exec('yarn changelog');

  // Bump version
  log(`📦 Bumping ${type} version...`, 'yellow');
  exec(`yarn version --${type} --no-git-tag-version`);

  // Get new version
  const newVersion = getCurrentVersion();
  log(`✅ Version bumped to ${newVersion}`, 'green');

  // Add all changes
  log('📝 Staging changes...', 'yellow');
  exec('git add .');

  // Commit changes
  log('💾 Committing changes...', 'yellow');
  exec(`git commit -m "chore: release ${newVersion}"`);

  // Create tag
  log('🏷️  Creating git tag...', 'yellow');
  exec(`git tag -a v${newVersion} -m "Release ${newVersion}"`);

  // Push changes and tags
  log('🚀 Pushing to remote...', 'yellow');
  exec('git push origin main');
  exec('git push origin --tags');

  log(`🎉 Release ${newVersion} completed successfully!`, 'green');
  log(`📋 Next steps:`, 'cyan');
  log(
    `   1. Check the GitHub release: https://github.com/bolorundurovj/React-Javascript-Boilerplate/releases`,
    'blue'
  );
  log(
    `   2. Verify the deployment: https://bolorundurovj.github.io/React-Javascript-Boilerplate/`,
    'blue'
  );
  log(`   3. Share the release with your community!`, 'blue');
}

function showHelp() {
  log('📖 React JavaScript Boilerplate - Release Script', 'bright');
  log('');
  log('Usage:', 'cyan');
  log('  node scripts/release.js <type>', 'blue');
  log('');
  log('Types:', 'cyan');
  log('  patch  - Bug fixes and minor changes (0.0.1)', 'blue');
  log('  minor  - New features, backwards compatible (0.1.0)', 'blue');
  log('  major  - Breaking changes (1.0.0)', 'blue');
  log('');
  log('Examples:', 'cyan');
  log('  node scripts/release.js patch', 'blue');
  log('  node scripts/release.js minor', 'blue');
  log('  node scripts/release.js major', 'blue');
  log('');
  log('This script will:', 'cyan');
  log('  1. Run tests to ensure everything works', 'blue');
  log('  2. Build the project', 'blue');
  log('  3. Generate/update the changelog', 'blue');
  log('  4. Bump the version in package.json', 'blue');
  log('  5. Commit and tag the changes', 'blue');
  log('  6. Push to remote repository', 'blue');
  log('  7. Trigger GitHub Actions release workflow', 'blue');
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

const type = args[0];
bumpVersion(type);
