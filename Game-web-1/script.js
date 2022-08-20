let tabs = document.querySelectorAll(".tabs h2")[0];
let tabsContent = document.querySelectorAll(".content-info div")[0];
for(let i=0; i<tabsContent.length; i++)
{
    tabsContent[i].addEventListener("click",function(){
        tabs.getElementsByClassName("active")[0].classList.remove("active")
    });
}