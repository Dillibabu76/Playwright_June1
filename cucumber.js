module.exports = {
    default: {
        require: [
            'support/hooks.js',
            'stepDefinitions/*.js'
        ],
        format: [
            'progress'
        ]
    }
};