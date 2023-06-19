const $btnYes=document.querySelector("#btnYes"),
      $btnNo=document.querySelector("#btnNo");

$btnNo.addEventListener("mouseover",()=>{
    let x=window.innerWidth,
        y=window.innerHeight;
        console.log(x)
    let newX=Math.floor(Math.random()*x)+1,
        newY=Math.random()*y;
  
    $btnNo.style.position="absolute";
    $btnNo.style.left=newX+"px";
    $btnNo.style.top=newY+"px"

})


$btnYes.addEventListener("click",()=>{
    let $div=document.createElement("div"),
        $fragment=document.createDocumentFragment();
    $div.innerHTML="<h1>Me esforzare por hacerte muy feliz</h1>";
    $div.style.backgroundColor="chocolate";
    $fragment.appendChild($div);
    
    document.querySelector(".container").appendChild($fragment);
})