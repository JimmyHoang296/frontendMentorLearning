var contactForm = document.getElementById("contactForm")
var submitBtn = document.getElementById('submitBtn')
var queryTypes = document.querySelectorAll('[name="queryType"]')

queryTypes.forEach(item => {
    item.addEventListener('click',(e)=>{
        queryTypes.forEach( item => {
        if (item.checked){
            item.parentNode.classList.add('selected')
        }else{
            item.parentNode.classList.remove('selected')
        }
    })
    })
})


const validation = {
    firstName:{
        validate: (val)=> {if (val){return 0}else{return 1}},
        errMes:["This field is required"]
    },
    lastName:{
        validate: (val)=> {if (val){return 0}else{return 1}},
        errMes:["This field is required"]
    },
    email:{
        validate: (val) => {
            console.log(val)
            if (val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
              return 0; // Invalid: empty string
            } else if (!val) {
              return 1; // Valid: matches email regex
            } else if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
              return 2; 
            }
          },
        errMes:["This field is required","Please enter a valid email address"]
    },
    queryType:{
        validate: (val)=> {if (val){return 0}else{return 1}},
        errMes:["This field is required"]
    },
    message:{
        validate: (val)=> {if (val){return 0}else{return 1}},
        errMes:["This field is required"]
    },
    consent:{
        validate: (val)=> {if (val){return 0}else{return 1}},
        errMes:["This field is required"]
    },
}

submitBtn.addEventListener("click",()=>{
    const formData = new FormData(contactForm);
    const data = {};
formData.forEach((value, key) => {
  data[key] = value;
});
    // validation
    var isDataValid = true
    Object.keys(validation).forEach(field =>{
        const {validate, errMes} = validation[field]
        console.log(field,validate(data[field]))
        if (validate(data[field])){
            isDataValid= false
            var parentNode = document.querySelector(`[name="${field}"]`).closest('.input-container')
            parentNode.classList.add('err')
            parentNode.querySelector('.errMsg').innerHTML = errMes[validate(data[field])-1]
        }else{
            var parentNode = document.querySelector(`[name="${field}"]`).closest('.input-container')
            parentNode.classList.remove('err')
        }
    })
    if (isDataValid){
        console.log(data)
        document.querySelector('.notify').style.display = 'block'
    }else{
        console.log('invalid data')
    }

    
})
