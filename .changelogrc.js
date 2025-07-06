module.exports = {
  preset: 'conventionalcommits',
  releaseCount: 0,
  outputUnreleased: true,
  lernaPackage: false,
  tagPrefix: 'v',
  warn: function (message) {
    console.warn('Warning:', message);
  },
  transform: function (commit, context) {
    let discard = true;
    const issues = [];

    commit.notes.forEach((note) => {
      note.title = 'BREAKING CHANGES';
      discard = false;
    });

    if (commit.type === 'feat') {
      commit.type = 'Features';
    } else if (commit.type === 'fix') {
      commit.type = 'Bug Fixes';
    } else if (commit.type === 'perf') {
      commit.type = 'Performance Improvements';
    } else if (commit.type === 'revert') {
      commit.type = 'Reverts';
    } else if (discard) {
      return false;
    } else if (commit.type === 'docs') {
      commit.type = 'Documentation';
    } else if (commit.type === 'style') {
      commit.type = 'Styles';
    } else if (commit.type === 'refactor') {
      commit.type = 'Code Refactoring';
    } else if (commit.type === 'test') {
      commit.type = 'Tests';
    } else if (commit.type === 'build') {
      commit.type = 'Build System';
    } else if (commit.type === 'ci') {
      commit.type = 'Continuous Integration';
    } else if (commit.type === 'chore') {
      commit.type = 'Chores';
    }

    if (commit.scope === '*') {
      commit.scope = '';
    }

    if (typeof commit.hash === 'string') {
      commit.shortHash = commit.hash.substring(0, 7);
    }

    // References
    if (commit.references) {
      commit.references.forEach((reference) => {
        issues.push(reference.issue);
      });
    }

    return commit;
  },
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['subject', 'scope'],
  noteGroupsSort: 'title',
  notesSort: 'text',
};
