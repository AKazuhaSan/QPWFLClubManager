
const officalWebstieButton = document.getElementById("OfficalButton")!
const suggestionButton = document.getElementById("Suggestion")!

officalWebstieButton.addEventListener('click', () => {
    console.log("hello")
    window.open('https://qphs.shwfl.edu.cn/', '_blank')
})

suggestionButton.addEventListener('click', () => {
    window.open("Suggestion.html", '_blank')
})