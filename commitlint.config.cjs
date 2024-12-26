module.exports = {
    // extends: ['@commitlint/config-conventional'],
    extends: [],
    rules: {
        'header-min-length': [2, 'always', 20],
        // 'header-case-start-capital': [2, 'always'],
        // 'subject-full-stop': [2, 'never', '.'],
        'header-end-period': [2, 'always'],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [2, 'always', 'sentence-case'],
        'header-max-length': [2, 'always', 72],
    },
    plugins: [
        {
            rules: {
                'header-case-start-capital': ({ raw }) => {
                    return [
                        /^[A-Z]/.test(raw),
                        'Commit message must start with a capital letter',
                    ];
                },
                'header-end-period': ({ header }) => {
                    return [/\.$/.test(header), 'Commit message must end with a period'];
                },
            },
        },
    ],
};
