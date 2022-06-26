// write your code here
document.addEventListener('DOMContentLoaded',fetchData)
const title = document.getElementById('card-title')
const image = document.getElementById('card-image')
const comments = document.querySelectorAll('li')
list = document.getElementById('comments-list')

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

const likeBtn =document.getElementById('like-button')
likeBtn.addEventListener('click',likerCount)

function likerCount(event){
    event.preventDefault() 
    let likes = document.getElementById('like-count')
    let liked=likes.innerText.split(' ')
    let number =  parseInt(liked[0])
    number = number + 1
    likes.innerText= number + ' ' +'likes'

}
const commentContainer = document.getElementById('comment-form')
commentContainer.addEventListener('submit', addNewComment)
const commentValue = document.getElementById('comment')

function addNewComment(event) {
    event.preventDefault()
    const newComment = commentValue.value;
    let newLine =document.createElement('li')
    newLine.innerText=newComment
    list.appendChild(newLine)
    commentContainer.reset()
   



}