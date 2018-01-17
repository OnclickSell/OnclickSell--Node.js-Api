
const rules = [
    'min',
    'max',
    'required',
    'url',
    'password',
    'email'
];

exports.RuleExist = (rule) => {
    let state = false;
    for(let i = 0; i < rule.length; i++) {
        if (rules.indexOf(rule[i]) !== -1) {
          state = true;  
        }
    }
    return state
}

exports.ApplyRules = (rule, value) => {
    // for(let i = 0; i < RulesFunctions.length; i++) {
    //     // console.log(RulesFunctions[i].rule, rule[i])
    //     if (rule.findIndex('min') !== 0) {
    //         RulesFunctions[i].function(value);
    //         console.log(RulesFunctions[i])
    //     }
    // }
}

const RulesFunctions = [
    {
        rule: 'required',
        function: function(data) {
            if(input.length >= 1) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        rule: 'max',
        function: function(data) {
            if(data.length <= rule.value){
                return true
            }else {
                return false
            }
        }
    },
    {
        rule: 'min',
        function: function(data) {
            if(data.length >= rule.value){
                return true
            }else {
                return false
            }
        }
    },
    {
        rule: 'email',
        function: function(data) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {  
                return true
            } else { 
                false 
            }  
        }
    },
    {
        rule: 'password',
        function: function(data) {
            let passw=  /^[A-Za-z]\w{7,14}$/; 
            if (data.match(passw)) {  
                return true
            } else { 
                return false 
            }  
        }
    },
    {
        rule: 'url',
        function: function(data) {
            let urlRegex=  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
            if (urlRegex.test(data)) {  
                return true
            } else { 
                return false 
            }  
        }
    }
]


