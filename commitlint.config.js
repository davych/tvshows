module.exports = {
    extends:['@commitlint/config-conventional'],
    rules:{
        'references-empty':[2,'never'],
        "subject-case":[0,"never"]
    },
    parserPreset:{
        parseOpts:{
            issuePrefixes:['ZHIHU-']
        }
    }
};