fetch('backend/session.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data);


                    document.querySelector(".last_cont ul").innerHTML=`  <a href="logout.php"> <li>logout</li></a>`
         
                    

                  
                } else {
                   
                    window.location.href = 'login.html';
                }
            })
            .catch(error => console.error('Error:', error));