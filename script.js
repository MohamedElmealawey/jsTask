var allproducts=document.querySelectorAll(".box-container .box");
var Btns=document.querySelectorAll(".box .btn");
var list=document.querySelector("#list");
var sidelist=document.querySelector(".sidelist");
var close=document.querySelector("#close-btn");
var container=document.querySelector(".sidelist .box-container");
var totIner=document.querySelector("#tot");
var Buy=document.querySelector("#buy");
var Close=document.querySelector(".close");
var num=document.querySelector(".left span");
var leftN=document.querySelector(".left .number");
var totalprice=0;
var count=1;

list.addEventListener("click",()=>{
    sidelist.classList.toggle("active");
})

close.addEventListener("click",()=>{
    sidelist.classList.remove("active");
})

Btns.forEach((item)=>{
    item.addEventListener("click",()=>{
        var PSrc=item.getAttribute("src");
        var PTitle=item.getAttribute("title");
        var Pprice=item.getAttribute("price");
        
        container.innerHTML+=`
            <div class="box">
                <div class="image">
                    <img src="${PSrc}" alt="">
                </div>
                <div class="content">
                    <h3 class="title">${PTitle}</h3>
                    <span class="price">${Pprice} <span>$</span></span>
                </div>
                <a href="#" class="close">
                    <i class="fas fa-times"></i>
                </a>
            </div>
        `;
        if(container.innerHTML!=0){
            num.innerHTML=count++;
            leftN.classList.add("active");
        }else{
            leftN.classList.remove("active");
        }

        totalprice+=Number(Pprice);

        if(totIner.innerHTML!==0){
            Buy.classList.add("active");
        }
        totIner.innerHTML=totalprice;

    })
})
