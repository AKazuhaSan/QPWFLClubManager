// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap JS（包含 Popper）
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './stylesheets/main.css'

const officalWebstieButton = document.getElementById("OfficalButton")!
const suggestionButton = document.getElementById("Suggestion")!

officalWebstieButton.addEventListener('click', () => {
    console.log("hello")
    window.open('https://qphs.shwfl.edu.cn/', '_blank')
})

suggestionButton.addEventListener('click', () => {
    window.open("Suggestion.html", '_blank')
})