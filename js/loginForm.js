import {checkValidation, setAttributes, validate, patters} from "../js/validateAll.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("login_form");

    let fields = [
        {
            name:'email',
            field: 'input-field',
            error: 'email_error',
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'pattern',
                    value: patters.email
                }
            ]
        },
        {
            name:'password',
            field:"password_field",
            error:"password_error",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'pattern',
                    value: patters.password,
                    message:"enter valid password",
                    details:[
                        {name:'pattern', value:patters.uppercase, message:'At least 1 uppercase required'},
                        {name:'pattern', value:patters.lowercase, message:'At least 1 lower required'},
                        {name:'pattern', value:patters.digit, message:'At least 1 digit required'},
                        {name:'pattern', value:patters.specialCharacter, message:'At least 1 special character required'},
                        {name:'minlength', value:8, message:'At least 8 characters required'},
                    ]
                }
            ]
        },
    ]

    fields.forEach(eachField => {
        setAttributes(eachField)
        validate(eachField)

    })
    form.addEventListener("submit", (event) => {
        // if the email field is valid, we let the form submit
        let formData = new FormData(event.target)
        let isFormValid = checkValidation(fields)
        if(!isFormValid){
            event.preventDefault();
        }else {
            window.location.href = "dashboard.html";
        }
    });









})