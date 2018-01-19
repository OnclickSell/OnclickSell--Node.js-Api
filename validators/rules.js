
exports.rules_list = [
    'min',
    'max',
    'required',
    'url',
    'password',
    'email'
];



exports.messages = {
    min: (field_name, value) => {
        return 'The ' + field_name + ' field must be at least ' + value + ' characters'
    },
    max: (field_name, value) => {
        return 'The ' + field_name + ' field cannot be more than ' + value + ' characters'
    },
    required: (field_name) => {
        return 'The ' + field_name + ' field cannot be left empty'
    },
    url: (field_name) => {
        return 'The ' + field_name + ' field is not a valid url'
    },
    email: (field_name) => {
        return 'The ' + field_name + ' field does not contain a valid email address'
    },
    password: (field_name) => {
        return 'The ' + field_name + ' field does not contain a valid password'
    }
}




exports.RulesFunctions = {
    
        required: function(data) {
            if(data.length >= 1) {
                return true;
            } else {
                return false
            }
        },
  
        max: function(data, value) {
            if(data.length <= value){
                return true
            }else {
                return false
            }
        },
  
        min: function(data, value) {
            if(data.length >= value){
                return true
            }else {
                return false
            }
        },
   
        email: function(data) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {  
                return true
            } else { 
                return false
            }  
        },
   
        password: function(data) {
            let passw=  /^[A-Za-z]\w{7,14}$/; 
            if (data.match(passw)) {  
                return true
            } else { 
                return false 
            }  
        },
   
        url: function(data) {
            let urlRegex=  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
            if (urlRegex.test(data)) {  
                return true
            } else { 
                return false 
            }  
        }
}


