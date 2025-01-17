const buildings=[
  {
      name:"Ameyo",
      image:"",
      coordinates:{
          latitude:"6.895030345896131",
          longitude:"3.7250587786492497"
      },
  },

  {
    name:"BBS",
    image:"",
    coordinates:{
        latitude:"6.89072291334421",
        longitude:"3.7240046288794098"
    },
},


{
    name:"SAT",
    image:"",
    coordinates:{
        latitude:"6.888844522542642",
        longitude:"3.7229143071147894"
    },
},

{
    name:"chemistry lab",
    image:"",
    coordinates:{
        latitude:"6.888053100437225",
        longitude:"3.72295837214855"
    },
},

{
    name:"engineering sch",
    image:"",
    coordinates:{
        latitude:"6.8895027",
        longitude:"3.7240833"
    },
},

{
    name:"EAH",
    image:"",
    coordinates:{
        latitude:"6.890244297687223",
        longitude:"3.7207006961518774"
    },
},

{
    name:"new horizon",
    image:"",
    coordinates:{
        latitude:"6.890481261704027",
        longitude:"3.723260912472078"
    },
},

{
    name:"600 seaters",
    image:"",
    coordinates:{
        latitude:"6.89143472387291",
        longitude:"3.7168539244662586"
    },
},

{
    name:"bucodel",
    image:"",
    coordinates:{
        latitude:"6.893230135980139",
        longitude:"3.7105850392087416"
    },
},

  {
      name:'Queen Esther',
      image:"",
      coordinates:{
          latitude:"6.893354076307076",
          longitude:"3.7242952884990785"
      },
  },


  {
      name:"FAD",
      image:"",
      coordinates:{
          latitude:"6.8938551248289395",
          longitude:"3.724757133980804"
      },
  },

  {
      name:"Crystal",
      image:"",
      coordinates:{
          latitude:"6.892606765688201",
          longitude:"3.728013768174291"
      },
  },


  {
      name:"Platinum",
      image:"",
      coordinates:{
          latitude:"6.891898667331963",
          longitude:"3.7274856946267096"
      },
  },


  {
      name:"Ogden",
      image:"",
      coordinates:{
          latitude:"6.893204798859399",
          longitude:"3.7267069301270497"
      },
  },


  {
      name:"Havilah Gold",
      image:"",
      coordinates:{
          latitude:"6.894934536100923",
          longitude:" 3.7260806996710825"
      },
  },


  {
    name:"Sapphire",
    image:"",
    coordinates:{
        latitude:"6.8914392",
        longitude:"3.7263655"
    },
},

{
  name:"White",
  image:"",
  coordinates:{
      latitude:"6.893796419854033",
      longitude:"3.726307960727902"
  },
},


{
  name:"Diamond",
  image:"",
  coordinates:{
      latitude:"6.89154295890297",
      longitude:"3.7274378052376718"
  },
},

{
  name:"Nyberg",
  image:"",
  coordinates:{
      latitude:"6.892612513800621",
      longitude:"3.7254955154433476"
  },
},

{
  name:"Samuel Akande",
  image:"",
  coordinates:{
      latitude:"6.894150538061167",
      longitude:"3.7235165322496346"
  },
},


{
  name:"Neal wilson",
  image:"",
  coordinates:{
      latitude:"6.893551542017954",
      longitude:"3.7213153832225165"
  },
},

{
  name:"winslow",
  image:"",
  coordinates:{
      latitude:"6.893929261765801",
      longitude:"3.72175869916458"
  },
},

{
  name:"emerald",
  image:"",
  coordinates:{
      latitude:"6.8936647",
      longitude:"3.7198149"
  },
},

{
  name:"gideon",
  image:"",
  coordinates:{
      latitude:"6.894552441711924",
      longitude:"3.722331661846355"
  },
},

{
  name:"bethel",
  image:"",
  coordinates:{
      latitude:"6.894524972387451",
      longitude:"3.7231185567621097"
  },
},


{
  name:"welch",
  image:"",
  coordinates:{
      latitude:"6.8913045443968",
      longitude:"3.7217132667544566"
  },
},


{
  name:"nelson mandela",
  image:"",
  coordinates:{
      latitude:"6.893605386498164",
      longitude:"3.72306544464822"
  },
},

{
  name:"topaz",
  image:"",
  coordinates:{
      latitude:"6.893767817468163",
      longitude:"3.720621690740852"
  },
},


{
  name:"adeleke",
  image:"",
  coordinates:{
      latitude:"6.8927832362599",
      longitude:"3.7210867566787056"
  },
},

{
  name:"busary",
  image:"",
  coordinates:{
      latitude:"6.890125898004287",
      longitude:"3.7229927134898433"
  },
},


{
  name:"entrepreneurship",
  image:"",
  coordinates:{
      latitude:"6.8891578",
      longitude:"3.7263045"
  },
},


{
  name:"farm house",
  image:"",
  coordinates:{
      latitude:"6.8902486",
      longitude:"3.7259833"
  },
},


{
  name:"bumu",
  image:"",
  coordinates:{
      latitude:"6.892521",
      longitude:"3.720413"
  },
},


{
  name:"registry",
  image:"",
  coordinates:{
      latitude:"6.889482832565852",
      longitude:"3.7223997255545282"
  },
},

{
  name:"alumi building",
  image:"",
  coordinates:{
      latitude:"6.892664413865216",
      longitude:"3.7205273643296155"
  },
},

]






buildings.forEach(building=>{
  document.querySelector(".locations ul").innerHTML+=`
      <li><i class="fa-solid fa-location-dot"></i>${building.name}</li>
  `
})


let form=document.querySelector("#form")



const urlParams = new URLSearchParams(window.location.search);


const branch_lat = urlParams.get('v');
const branch_long = urlParams.get('q');










// console.log(`latitude: ${branch_lat} and longitude: ${branch_long}`)

const input = document.getElementById('destination');
const locations = document.querySelector(".locations")
let items=document.querySelectorAll(".locations ul li")






function initMap() {
  
    // Coordinates for Babcock University
    const babcockUniversity = { lat: 6.893956, lng: 3.718715 };
    
    const mockLocation = { lat:6.892839277599381, lng:3.7238590597861876 }; 
  
    // Define a bounding box around Babcock University
    const bounds = {
      north: 6.89518, 
      south: 6.882, 
      east: 3.730, 
      west: 3.7158957026299593 
    };
    
    // Map options
    const mapOptions = {
        
      zoom: 19, // Suitable zoom level for the campus
      center: mockLocation, // Center the map on Babcock University
      restriction: {
        latLngBounds: bounds, // Restrict map to the bounding box
        strictBounds: false   // Allow some panning outside bounds before snapping back
      }
    };
  
    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);



    
  
    // Add a marker for Babcock University
    new google.maps.Marker({
      position: mockLocation,
      map: map,
      title: 'my location'
    });


    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);



    google.maps.event.addListenerOnce(map, 'idle', () => {
      if(branch_lat!=="" || branch_long!==""){
        document.querySelector("#coords").value=`${branch_lat}, ${branch_long}`
        const submitEvent = new Event("submit", { bubbles: true, cancelable: true  });
      
    
        form.dispatchEvent(submitEvent);
      }
    });


    

   

    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        let matchFound = false; 
    
        items.forEach((item, i) => {
          if (item.textContent.toLowerCase().includes(input.value.trim().toLowerCase())) {

         
              items[i].style.display = "flex"; 
           
            
            matchFound = true; 
          } else {
            items[i].style.display = "none"; 
          }
        });
    
        if (matchFound) {
          locations.classList.add("active"); 
        } else {
          locations.classList.remove("active"); 
        }
    
      } else {

        locations.classList.remove("active");
        items.forEach((item) => {
          item.style.display = "none";
        });
      }
    });



    items.forEach((item, i)=>{
      item.addEventListener("click", ()=>{
        input.value=buildings[i].name
        document.querySelector("#coords").value=`${buildings[i].coordinates.latitude}, ${buildings[i].coordinates.longitude}`

        const submitEvent = new Event("submit", { bubbles: true, cancelable: true  });


        form.dispatchEvent(submitEvent);
        locations.classList.remove("active"); 
      })
    })



    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
     
        const form_data= new FormData(form)
    
        let get_coords=form_data.get("coords")

        const coordinateMatch = get_coords.match(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/);
        if (coordinateMatch) {
          const lat = parseFloat(coordinateMatch[1]);
          const lng = parseFloat(coordinateMatch[3]);
          calculateRoute({ lat, lng });
          // console.log({ lat, lng });
        }
    
    });
    




    function calculateRoute(destination) {
      directionsService.route(
        {
          origin: mockLocation,
          destination: destination,
          travelMode: google.maps.TravelMode.WALKING // Options: DRIVING, BICYCLING, TRANSIT
        },
        (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
          } else {
            alert('Directions request failed due to: ' + status);
          }
        }
      );
    }

  }
  






  navigator.geolocation.getCurrentPosition((position) => {
    const userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  
    const destination = { lat: 37.7749, lng: -122.4194 }; // Replace with your destination
    getRoute(map, userLocation, destination);
  });
  


