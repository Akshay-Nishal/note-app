// let inp_area = document.getElementById('note-input')
// let note_area = document.getElementById('note-area')
// let title = document.getElementById('title')
// let details = document.getElementById('details')
// console.log(title,details);


// var x = 0

// let addbtn = document.getElementById('add');
// addbtn.addEventListener("click",function(){
//     let heading = document.getElementById('title').value
//     let desc = document.getElementById('details').value
//     let note = document.createElement('div')
//     let t = 'note'+x
//     note.setAttribute('class', `note note${x}`)
//     if(heading){
//         note.innerHTML=`<h3>${heading}</h3>
//         <p>${desc}</p>
//         <button id="del">Delete</button>`
//         note_area.appendChild(note)
//         document.getElementById('title').value = ''
//         document.getElementById('details').value = ''
//     }
    
//     let del = document.getElementById('del')
//     del.addEventListener('click', function(){
//         let q=  '.'+t
//         let d = document.querySelector(q)
//         d.remove()
//         // d.style.display='none'
//         // console.log();
//     })
//     x=x+1



//     // console.log(t);
//     // let del = document.getElementById('del')
//     // del.addEventListener('click',function(e){
//     //     console.log(e);
//     //     let x = document.getElementsByClassName(t)
//     //     x[0].remove
//     // })
//     // x=x+1
// })

    
let inp_area = document.getElementById('note-input')
let note_area = document.getElementById('note-area')
let title = document.getElementById('title')
let details = document.getElementById('details')
console.log(title,details);


let addbtn = document.getElementById('add');
addbtn.addEventListener("click",function(){
    let heading = document.getElementById('title').value
    let desc = document.getElementById('details').value
    let note = document.createElement('div')
    note.classList.add('note')
    if(heading){
        note.innerHTML=`<h3>${heading}</h3>
        <p>${desc}</p>
        <button id="del">Delete</button>`
        note_area.appendChild(note)
        document.getElementById('title').value = ''
        document.getElementById('details').value = ''
    }
    var clr = note.querySelector('#del')
    clr.addEventListener('click', ()=>{
        note.remove();
    })
})
    
    
  
    
  