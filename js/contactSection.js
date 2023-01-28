import {checkValidation, setAttributes, validate, patters} from "../js/validateAll.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("contact_form");

    let fields = [
        {
            name:'names',
            field:"names_field",
            error:"names_error",
            conditions:[
                {
                    name:'required',
                    value: true
                },
                {
                    name:'minlength',
                    value:3,
                },
                {
                    name:'maxlength',
                    value:25,
                }
            ]
        },
        {
            name:'email',
            field: 'email_field',
            error: 'email_error',
            conditions:[
                {
                    name:'required',
                    value: true
                },
                {
                    name:'pattern',
                    value:patters.email,
                }
            ]
        },
       
        {
            name:'description',
            field:"description_field",
            error:"description_error",
            conditions:[
                {
                    name:'required',
                    value: true
                },
                {
                    name:'minlength',
                    value:5,
                },
                {
                    name: "maxlength",
                    value: 70
                }
            ]
        },
    ]

    fields.forEach(eachField => {
        setAttributes(eachField)
        validate(eachField)

    })
   
        
        
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // if the email field is valid, we let the form submit
        let formData = new FormData(event.target)
        let userName = document.getElementById("names_field").value.trim();
        let userEmail = document.getElementById("email_field").value.trim();
        let userMessage = document.getElementById("description_field").value.trim();
        let user ={
            names: userName,
            email: userEmail,
            message:userMessage,
        }
        var usersFeedback;
        if(checkValidation(fields)){
            
            if(localStorage.getItem("myPerson")){
            usersFeedback= JSON.parse(localStorage.getItem("myPerson"));
            usersFeedback.push(user); 
            }else{
                usersFeedback = [];
                usersFeedback.push(user);
                
            }
            localStorage.setItem("myPerson",JSON.stringify(usersFeedback));
            location.reload();
        }
         

       
       console.log(user);
        let isFormValid = checkValidation(fields)
        if(!isFormValid){
            event.preventDefault();
        }
        
    });








})
