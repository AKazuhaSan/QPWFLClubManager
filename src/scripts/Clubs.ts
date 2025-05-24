import axios from "axios"

const container = document.getElementById('container')!
axios.get("jsons/description.json").then(res => res.data).then(text => console.log(text))