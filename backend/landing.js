fetch('backend/session.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data);


                    document.querySelector(".last_cont ul").innerHTML=`  <a href="logout.php"> <li>logout</li></a>`
                    document.querySelector(".buttons").innerHTML=` <a href="main.html" class="button">View Map</a>`
                    

                    
                  
                }


                else{
                     document.querySelector(".last_cont ul").innerHTML=`  <a href="login.html"> <li>login</li></a>`
                }
            })
            .catch(error => console.error('Error:', error));