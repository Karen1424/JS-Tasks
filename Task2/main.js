const name1 = document.getElementById("name");
const lastName = document.getElementById("last name");
const email = document.getElementById("email");
const password = document.getElementById("password");
    let domValid = "";
    let isValid = "";
    let pasValid = "";
    function register(){
        if(name1.value.length < 2 || name1.value[0].toUpperCase() !== name1.value[0]){
            document.getElementById("nameValidation").style.color = "red";
        }
        if(name1.value.length < 2 || name1.value[0].toUpperCase() !== name1.value[0]){
            document.getElementById("lastNameValidation").style.color = "red";
        }
        if(email.value.length!== 0){
            let count = 0;
            let result = email.value.split('');
        
            for(let i = 0; i < result.length;++i){
                if(result[i] === "@" && count < 3){
                    document.getElementById("emailValidation").style.color = "red";
                }
                ++count;
            
                if(result[i] === " "){
                    document.getElementById("emailValidation").style.color = "red";
                }
            }
        
        
                for(let i = result.length-1; i>result.length-4; --i){
                     domValid += result[i];
                }
                
                if(true){
                                        
                     isValid = domValid.split('').reverse().join('');
                     
                     if(isValid == "com"||isValid == ".ru"|| isValid == "org"||isValid == ".ru"||
                     isValid == "net" || isValid == ".us"||isValid == ".am"||isValid == "info"){
                       console.log("correct email"); 
                     } 
                     else{
                        document.getElementById("emailValidation").style.color = "red";
                     }
                }
            }
            if(password.value.length>=8 && password.value.length<=32){
                let pasCount1 = 0;
                let pascount2 = 0;
                let pasValid = password.value.split('');
                for(let i = 0; i < pasValid.length;++i){
                    if(pasValid[i].toLowerCase() != pasValid[i]){
                        ++pasCount1;
                    }
                    if(pasValid[i] >= '0' && pasValid[i] <= '9'){
                        ++pascount2;
                    }
                }
                if(pascount2 === 0 || pasCount1 === 0){
                    document.getElementById("passwordValidation").style.color = "red";
                }
                
            }else{
                document.getElementById("passwordValidation").style.color = "red";
            }
        
        }    
