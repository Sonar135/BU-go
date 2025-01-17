import { offices } from "./datasets.js";



offices.forEach((building, i)=>{
    console.log(building)

    document.querySelector(".hall").innerHTML+=`
    
                         <div class="build_cont">
                    <div class="pill">
                        <img src="images/2022-11-15.jpg" alt="">
                        href=""><div class="overlay">
                            <h1>${building.name}</h1>
                        </div>
                    </div>

                    <h4>${building.name}</h4>

                    <a href="main.html?v=${building.coordinates.latitude}&q=${building.coordinates.longitude}" class="button">View In Map  <div class="ico"><i class="fa-solid fa-location-arrow"></i></div> </a>
                </div>

    `

    let buttons=document.querySelectorAll(".build_cont")
    let icons=document.querySelectorAll(".ico")

    
    buttons.forEach((button, i)=>{
        button.addEventListener("mouseenter", ()=>{
            icons[i].classList.add("logo_bounce")
        })

        button.addEventListener("mouseleave", ()=>{
            icons[i].classList.remove("logo_bounce")
        })
    })

   


  

})