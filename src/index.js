// write your code here
document.addEventListener('DOMContentLoaded',fetchData)
const title = document.getElementById('card-title')
const image = document.getElementById('card-image')
const comments = document.querySelectorAll('li')

function fetchData(){
    fetch('http://localhost:3000/images/1')
    .then(res => res.json())
    .then(data=> {
        title.innerText=data.title
        imageSrc= data.image
        image.src = imageSrc
        comments[0].innerText = data.comments[0].content
        comments[1].innerText = data.comments[1].content
        comments[2].innerText = data.comments[2].content



    })
}
