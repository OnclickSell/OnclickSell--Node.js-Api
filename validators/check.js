


const { rules_list } = require('./rules');
const { RulesFunctions } = require('./rules');
const { messages } = require('./rules');
let error_messages = [];
let reject = false
let err = ''


exports.check = (request, rules, callback) => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < rules.length; i++) {

            rules_exists(rules[i].rules)
            .then(result => {
    
                validate (request, rules[i].field, rules[i].rules).then(value => {
                    return (error_messages.length > 0 ? reject(error_messages) : resolve('passed'))
                })
    
            }).catch(error => {
                reject(error)
                throw error
            })
        }
    })
}





const rules_exists = (rules) => {
    return new Promise((resolve, reject) => {

        let ExtractedRules = [...rules.split('|')];
    
        for(let i = 0; i < ExtractedRules.length; i++) {
            if(rules_list.indexOf(ExtractedRules[i].split(':')[0]) === -1) {
                reject('The ' + ExtractedRules[i] + ' doesn\'t exist')
            }
        }
        
        resolve('success')

    })

}




const validate = (data, field_name, rules) => {
    return new Promise((resolve, reject) => {

        let ExtractedRules = [...rules.split('|')];

        for(let i = 0; i < ExtractedRules.length; i++) {

            if(!RulesFunctions[ExtractedRules[i].split(':')[0]](data[field_name], ExtractedRules[i].split(':')[1])) {
                add_message(field_name, ExtractedRules[i])
                resolve(error_messages)
            } else {
                resolve(error_messages)
            }
            
        }
    })
    
}

const add_message = (field_name, rule) => {
    let each_message = {}
    error_messages.push(
        each_message[field_name] = messages[rule.split(':')[0]](field_name, rule.split(':')[1])
    )
}





