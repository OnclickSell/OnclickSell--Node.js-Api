
let ErrorMessages = [];
let fields_name = [];

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

exports.validate =  (inputs, rules, callback) => {

    getKeys(rules);

    fields_name.forEach(field_name => {
        attemptRule(field_name, inputs[field_name], rules[field_name]);
    });  
    return callback(ErrorMessages);
    
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


function getKeys(array) {
   let name;

    for (name in array) {
        fields_name.push(name);
    }
    return fields_name;
}

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

const attemptRule =  (field_name, input, rule_name) => {
    let SingleRules = rule_name.split('|');
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

/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/

const removeError = (error) => {
    for (let i = 0; i < ErrorMessages.length; i++) {
        if (ErrorMessages[i].field === error.field) {
            return ErrorMessages.slice(1, i)
        } else {
            return false
        }
    }
}

const addError = (error) => {
    for (let i = 0; i < ErrorMessages.length; i++) {
        if (ErrorMessages[i].field !== error.field) {
            return ErrorMessages.push(error)
        } else {
            return false
        }
    }
}
    




/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/


const PrepareErrorMessages = {
    required: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field is required'}
    },
    min: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field must be more than ' + rule.value + ' characters' }
    },
    max: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field must be less than ' + rule.value + ' characters' }
    },
    email: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field does not contain a valid email address'}
    },
    password: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field does not contain a valid password' }
    },
    url: (field, rule) => {
        return {field: field, message: 'The ' + field + ' field does not contain a valid URL' }
    }
}












