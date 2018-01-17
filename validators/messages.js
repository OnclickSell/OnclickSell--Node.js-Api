const messages = {
    required: 'The :field cannot be empty',
    min: 'The :field must be at least :value characters',
    max: 'The :field must not be more than :value characters',
    email: 'The :field does not contain a valid email address',
    password: 'The :field does not contain a valid password',
    url: 'The :field does not contain a valid URL',
}

exports.parseMessages = (field, value) => {

    let message = messages[field].replace(":field", field);
    message = messages[field].replace(":value", value);
    return message;
}
