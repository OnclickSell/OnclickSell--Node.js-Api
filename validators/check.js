


const rules = require('./rules');
const messages = require('./messages');
const validRules = {};
const NewRules = [];
let onlyFields = [];
let test1 = {};
let test2 = [];
let test3;
let test4;


exports.check = (data, rules, callback) => {
    rules.forEach(item => {
        NewRules.push(FieldParser(item))
        validate(onlyFields, NewRules);
        // console.log(onlyFields)
    });
return callback(' ')
 return callback(NewRules);

}


const validate = (fields_name, all_rules) => {
    for(let i = 0; i < fields_name.length; i++) {
        if (rules.RuleExist(all_rules[i][fields_name[i]])) {
            rules.ApplyRules(all_rules[i][fields_name[i]])
        } else {
            console.log('failed')
        }
    }
}






const FieldParser = (rule) => {
    let ExtractedField;
    let ExtractedRules;
    let Combined = {};
    ExtractedField = rule.match(/\<([^)]+)\>/)[1];
    onlyFields.push(ExtractedField);
    ExtractedRules = rule.replace(/\<([^)]+)\>/, '').trim();
    ExtractedRules = ExtractedRules.split('|');
    Combined[ExtractedField] = trimRules(ExtractedRules);
    return Combined;

    function trimRules(rules) {
        for(let i = 0; i < rules.length; i++) {
            if (rules[i].length === 0 || rules[i] === null) {
                rules.splice(i, 1)
            }
        }
        return rules
    }
}


const RuleParser = (rules) => {
    let fields = rules.split('->');
    let AllRules = []
    
    SingleRules.forEach(rule => {
        AllRules.push({ rule: rule.split(':')[0], value: rule.split(':')[1]})
    })

    AllRules.forEach(rule => {
        validationRules.forEach(validationRule => {
            if (validationRule.name === rule.rule) {
                validationRule.rule(field_name, input, rule);
            }
        })
    }) 
}

