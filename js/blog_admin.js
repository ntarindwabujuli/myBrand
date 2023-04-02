import {getAll} from './backend';
import endpoints from "./system/constants/endpoints.js";
import {getHeaders} from "./system/utilities.js";
import Secure from "./system/secureLs.js";

if(!Secure.getToken()){
    window.location.href = "login.html"
}
document.addEventListener("DOMContentLoaded", () => {
    let blog_container = document.getElementById('blog_container')
    let blog_single_view = document.getElementById('blog_single_view')

    let newMessageCount = document.getElementById('newMessageCount')
    let messagesContainer = document.getElementById('messageContainer')
    let messageClone = document.getElementById('messageClone')

    function addMessage(message){

        let messageView = messageClone.cloneNode(true)
        messageView.id = message._id
        messageView.querySelector("#names").textContent = message.names;
        messageView.querySelector("#email").textContent = message.email;
        messageView.querySelector("#message").textContent = message.message;


        messagesContainer.append(messageView)
    }

    getAll(endpoints.BLOGS).then((result) => {
        console.log(result)
        result?.forEach(eachBlog => {
            let blog_single_viewClone = blog_single_view.cloneNode(true)
            blog_single_viewClone.id = eachBlog.id +eachBlog.title +"description"
            blog_single_viewClone.querySelector('#title_view').innerText = eachBlog.title
            let edit_blog = blog_single_viewClone.querySelector('#edit_blog')
            edit_blog.id = "uniqueId"+eachBlog._id
            edit_blog.onclick = () =>{
                window.location.href = 'new_blog_form.html?id='+eachBlog._id
            }

            blog_container.appendChild(blog_single_viewClone)
        })
    }, error => {console.log(error)}).catch(error => console.error(error))

    getAll(endpoints.MESSAGES, getHeaders()).then(results => {
        newMessageCount.textContent = results?.length +"" || "";

        results?.forEach(each => {
            addMessage(each);
        });

    })
})