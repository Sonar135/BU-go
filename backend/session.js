fetch('session.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data);
                    
             

                  
                } else {
                   
                    window.location.href = 'login.html';
                }
            })
            .catch(error => console.error('Error:', error));