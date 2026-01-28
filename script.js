var ol=document.getElementById("overlay")
var pop=document.getElementById("pop")
var pbtn=document.getElementById("popbtn")
pbtn.addEventListener('click',function(event){
    ol.style.display="block"
})
var te=document.getElementById("title")
var ae=document.getElementById("author")
var desce=document.getElementById("desc")
var abtn=document.getElementById("add")
var cbtn=document.getElementById("can")
var dbtn=document.getElementById("def-del")
var book=document.getElementById("n-book")
var dbook=document.getElementById("def-book")
abtn.addEventListener('click',function(event){
    var title=te.value
    var author="-"+ae.value
    var desc=desce.value
    console.log(title,author,desc)
    var div= document.createElement('div')
    div.setAttribute('id','def-book')
    div.innerHTML=`<h2>${title}</h2><h3>${author}</h3><p>${desc}</p><button id=\"def-del\" onclick=\"del(event)\">Delete</button>`
    book.append(div)
    ol.style.display="none"

})
cbtn.addEventListener('click',function(event){
    ol.style.display="none"
})
function del(event){
    
    event.target.parentElement.remove()

}

