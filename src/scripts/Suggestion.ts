import axios from "axios"
import './stylesheets/Suggestion.css'

//匿名复选框
const AnonymousCheckBox =  document.getElementById("Anonymous") as HTMLInputElement
const UsernameInput = document.getElementById("usernameInput") as HTMLInputElement
const usernameBox = document.getElementById('usernameBox')
AnonymousCheckBox.addEventListener('change', () => {
    if (AnonymousCheckBox.checked == true) {
        UsernameInput.readOnly = true
        usernameBox!.style.textDecoration = 'line-through'
    } else {
        UsernameInput.readOnly = false
        usernameBox!.style.textDecoration = 'none'
    }
})

//提交
const SubmitButton = document.getElementById("Submit") as HTMLInputElement
const TextArea =  document.getElementById("Content") as HTMLTextAreaElement
SubmitButton.addEventListener('click', () => {
    axios.post("/api/suggestion", {
        id: -1,
        user: "测试",
        content: TextArea.value
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
})