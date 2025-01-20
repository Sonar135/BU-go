let fields=document.querySelectorAll(".field")
let data=document.querySelectorAll("#data");
let sale_submit=document.querySelector("#sale_submit")








fields.forEach((field, i) =>{
    setTimeout(() => {
        field.style.display = 'flex'; 
      }, i * 100); 
})




data.forEach((datum, i)=> {

    datum.addEventListener("input", ()=>{
        let allFilled = Array.from(data).every((field) => field.value.trim() !== '');
    sale_submit.disabled = !allFilled;

    

    })
 
    
   
});