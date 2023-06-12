var previewContainer = document.querySelector('.product-prev')
var  previewBox = previewContainer.querySelectorAll('.preview')


    document.querySelectorAll('.product-container .aboutBtn').forEach(product =>{
        product.onclick = () =>{
            previewContainer.style.display = 'flex'
            let name = product.getAttribute('data-name')
            previewBox.forEach(preview =>{
                var target = preview.getAttribute('data-target')
                if(name == target){
                    preview.classList.add("active")
               }
            })
        }
    })


previewBox.forEach(close =>{
    close.querySelector("#closePro").onclick = () =>{
        close.classList.remove('active')
        console.log(1) 
        previewContainer.style.display = 'none'   
    }
})


// FLITERING PRODUCTS 
var filteringBtn = document.querySelectorAll("#buttons .btn");

var items = document.querySelectorAll(".product-container .card");
window.addEventListener('DOMContentLoaded', ()=>{
  
})
var filterFunction = (e) => {
  var activeBtn = document.querySelector(".active");
  activeBtn.classList.remove("active");
  e.target.classList.add("active");
  items.forEach(card =>{
    card.classList.add("hide")
    card.style.margin = '20px'
    if(card.dataset.name == e.target.dataset.name || e.target.dataset.name == 'all'){
        card.classList.remove("hide")

    }
    // var NotFound = document.querySelector('.no-found')
    // if(card.dataset.name != e.target.dataset.name){
    //     NotFound.style.display = 'block'
    // }else{
    //     NotFound.style.display = 'none'

    // }
  })
};

filteringBtn.forEach(buttons => buttons.addEventListener("click", filterFunction));


// FILTERING SEARCHBOX
