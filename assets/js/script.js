const mapApiKey = "AIzaSyCtJSDbUKLSn6_t86GsjWt6dLbqj9KeDb8"
var locations = [
    ["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],
    ["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],
    ["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],
    ["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],
    ["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],
    ["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],
    ["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],
    ["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],
    ["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],
    ["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"],
    ["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],
    ["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],
    ["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],
    ["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],
    ["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],
    ["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],
    ["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"]
];

// querySelectors to HTML

// request and response API
// GET && POST for API

// API and key all linked up
// weather API and sports API
// json response 
// local storage for sign up sheet

// Insert interactive map and marker
window.addEventListener("load", function() {
    // ensures that the map is loaded after the rest of the
    function initMap() {
        const blouberg = {lat: -3.35263, lng: 40.01689};
        
        // create map, centered at Blouberg
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: blouberg,
        });
    
        // create markers for all locations
        for (var i=0; i<locations.length; i++) {
            const location = locations[i];
            const marker = new google.maps.Marker({
                position: {lat: parseFloat(location[1]), lng: parseFloat(location[2])},
                map: map,
                title: location[0],
            });
    
            marker.addEventListener('click', function() {
                console.log("marker clicked", location[0]);
            });
        };
    };
    
    window.initMap = initMap;
    


});
  

// animated news reel


