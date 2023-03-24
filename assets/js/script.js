// map variables
const mapApiKey = "AIzaSyCtJSDbUKLSn6_t86GsjWt6dLbqj9KeDb8";
var map;
var seasonArr_1 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];				
var seasonArr_2 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_3 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_4 = [["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"]];
var seasonArr_5 = [["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_6 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_7 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_8 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_9 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var seasonArr_10 = [["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"]];
var seasonArr_11 = [["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"]];
var seasonArr_12 = [["Watamu","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Bloubergstrand","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"puttalam"]];
var allSeasons = [seasonArr_1, seasonArr_2, seasonArr_3, seasonArr_4, seasonArr_5, seasonArr_6, seasonArr_7, seasonArr_8, seasonArr_9, seasonArr_10, seasonArr_11, seasonArr_12];
var locations = seasonArr_1; // set initial locations
// weather variables
const myApiKey = "2ca732745c4860a1e30f12f65cec56c5";
var lat = "";
var lon = "";

// --------------------------- MODAL FUNCTIONS ---------------------------//

function monthEl() {
  document.getElementById("searchForm")
  preventDefault();
}

// Get the modal and close button
const modal = document.getElementById("signup-modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
const openBtn = document.getElementById("open-modal-btn");

// When the user clicks the button, open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// --------------------------- JUMBOTRON FUNCTIONS ---------------------------//
const jumbotron = document.getElementById("jumbotron");
const jumbotronBtn = document.getElementById("jumbotron-btn");

const photoApi = "https://api.unsplash.com/search/photos";
const query = "kitesurfing";
const drewApi = "MqP7xY07ZIp89anmqF3xFmp56jkIcUAdvqQ0biaCO9w"; 

const imageContainer = document.getElementById("image-container");

fetch(`${endpoint}?query=${query}&client_id=${clientId}`)
  .then(response => response.json())
  .then(data => {
    const imageUrls = data.results.map(result => result.urls.regular);

    let slideContent = "";
    for (let i = 0; i < imageUrls.length; i += 3) {
      slideContent += `
        <div class="slide">
          <img src="${imageUrls[i]}"/>
          ${i+1 < imageUrls.length ? `<img src="${imageUrls[i+1]}"/>` : ""}
          ${i+2 < imageUrls.length ? `<img src="${imageUrls[i+2]}"/>` : ""}
          ${i+3 < imageUrls.length ? `<img src="${imageUrls[i+3]}"/>` : ""}
        </div>
      `;
    }
    imageContainer.innerHTML = slideContent;


    $(imageContainer).slick({
      autoplay: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1
    });
  })
  .catch(error => console.log(error));
// --------------------------- WEATHER FUNCTIONS ---------------------------//

function getWeather(city) {
  //format the OpenWeather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    + city.replace(/ /g, "%20")
    + "&APPID="
    + myApiKey
    + "&units=metric";
  console.log(apiUrl);

  // make a request to the url
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayWeatherToday(data);
        });
      } else {
        alert(`Error: ${response.statusText}`);
      }
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      alert("Unable to connect to OpenWeather");
    });
}

var displayWeatherToday = function (city) {  
    // populate today
    console.log(city);
    $("#city-search-term").text(city.name +", " + city.sys.country);
    $("#cityImage").attr("src", "./assets/css/img/1general.jpg");
    $("#date").text(moment().format("DD/MM/YY"));
    $("#apiTemp").text("Temperature: " + Math.round(city.main.temp*10)/10 + "°C");
    $("#apiHumidity").text("Humidity: " + city.main.humidity);
    $("#apiWind").text("Wind Speed: " + city.wind.speed + "KPH");
    $("#lorem").text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reiciendis iure magni vero nihil, debitis rerum cumque optio id asperiores quasi perferendis a. Nobis ipsam placeat, laudantium eius rerum facere.");
    var iconCode = city.weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png"
    $('#icon').attr('src',iconUrl);
};

var getWeatherForecast = function(city) {
    // using Geocoding api to convert city into longitude/latitude 
    //format the Geocoding api url
    var geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" 
        + city.replace(/ /g,"%20") 
        + "&limit=5&appid=" + myApiKey
        + "&units=metric"; 
    console.log(geoApiUrl);

    // make a request to the url
    fetch(geoApiUrl)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    lat = data[0].lat;
                    lon = data[0].lon;
                    var name = data[0].name;
                    var country = data[0].country;
                    console.log(lat+name+country+lon);

                    // format the forecast api url
                    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" 
                        + lat 
                        + "&lon=" + lon
                        + "&appid=" + myApiKey
                        + "&units=metric"; 
                    console.log(apiUrl);

                    fetch(apiUrl)
                        .then(function(response) {
                            if (response.ok) {
                                console.log(response);
                                response.json().then(function(data) {
                                    console.log(data);
                                    displayWeatherForecast(data);
                                });
                            } else {
                                alert(`Error: ${response.statusText}`);
                            }
                        })
                        .catch(function(error) {
                            // Notice this `.catch()` getting chained onto the end of the `.then()` method
                            alert("Unable to connect to OpenWeather");
                        });
                });
            }
        })
        .catch(function(error) {
            // Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to OpenWeather");
        })
};

var displayWeatherForecast = function(city) {
    // clear old forecast cards
    $("#cardRows").empty();

    // Find the first list item that starts at 12:00 noon
    var firstNoonIndex = 0;
        for (var i = 0; i < city.list.length; i++) {
            if (city.list[i].dt_txt.includes('12:00:00')) {
             firstNoonIndex = i;
        break;
        }
    }

    // Populate forecast starting from firstNoonIndex
    console.log(city);
    for (var i = firstNoonIndex; i < city.list.length; i += 8) {
        var iconCode = city.list[i].weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
        var temp = Math.round(city.list[i].main.temp*10)/10 + "°C";
        var humidity = city.list[i].main.humidity;
        var $cardRows = $('#cardRows');
        $("#forecastHeading").text("5 day Forecast");


        // Create a new div with class and card structure
//------- DREW, PLEASE UPDATE TO USE FOUNDATION INSTEAD OF BOOTSTRAP!!!------//
        var $card = $('<div class="grid-x">' + 
                      '<div class="cell small-3 medium-3 large-2">' +
                        '<div class="card">' +
                            '<h5 class="card-header">' + city.list[i].dt_txt.split(" ")[0] + '</h5>' +
                            '<div class="card-body">' +
                                '<img id="iconDay' + i + '" src="' + iconUrl + '" alt="">' +
                                '<p id="tempDay' + i + '">Temperature: ' + temp + '</p>' +
                                '<p id="humidityDay' + i + '">Humidity: ' + humidity + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>');
        $cardRows.append($card);
    }
};

// ---------------------------- MAPS FUNCTIONS ----------------------------//

// This code will execute only after the page has finished loading THINK IT CAN BE REMOVED....
// document.addEventListener("DOMContentLoaded", function() {
  
    // This function MUST be placed towards the end
    var initMap = function() {
        const blouberg = {lat: -3.35263, lng: 40.01689};
        
        // create map, centered at Blouberg
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: blouberg,
        });

        // array to hold markers
        markers = [];

        createMarkers(map);
    };

    var createMarkers = function(map) {
        // clear existing markers
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
        
        console.log('locations:', locations);
        let currentInfoWindow;

        // create markers for all locations
        for (var i=0; i<locations.length; i++) {
            const location = locations[i];
            const marker = new google.maps.Marker({
                position: {lat: parseFloat(location[1]), lng: parseFloat(location[2])},
                map: map,
                title: location[0],
            });
            markers.push(marker); //it's supposed to be marker(s). Do NOT change to marker.

            const infowindow = new google.maps.InfoWindow({
                content: location[0],
                ariaLabel: location[0],
                });

            marker.addListener("click", () => {
                // Close the current info window if one is open
                if (currentInfoWindow) {
                    currentInfoWindow.close();
                }

                // Set the current info window to the one that was just opened
                currentInfoWindow = infowindow;
                const clickedLocation = infowindow.getContent().trim().toLowerCase();
                console.log(clickedLocation);
                getWeather(clickedLocation);
                getWeatherForecast(clickedLocation);

                // Open the new info window
                infowindow.open({
                    anchor: marker,
                    map,
                });
            });

            google.maps.event.addListener(map, 'click', function() {
                // Close the current info window if one is open
                if (currentInfoWindow) {
                    currentInfoWindow.close();
                }            
            });
        }
    };

    // create event handlers for buttons 1 to 12
    for (var i = 1; i <= 12; i++) {
        document.getElementById('button' + i).addEventListener('click', (function(index) {
            return function(event) {
                event.preventDefault();
                locations = allSeasons[index];
                console.log(locations);
                console.log(typeof map, map instanceof google.maps.Map);
                createMarkers(map);
                console.log("button", index, locations);
            };
        })(i-1)); //passing the current value of i to the immediately-invoked function expression (IIFE) as a parameter called index
                    //The return function(event) creates a new function that is the actual event listener function. By passing the 
                    // value of i as index to the IIFE, we create a closure that captures the current value of i for each button event listener.
                    // Since JavaScript passes parameters by value, and not by reference, we can't simply pass the value of i directly without 
                    // creating a closure as they would all use the last value of i (which would be 12) since the loop completes before the event listeners are triggered.
                    // Wrapping the event listener function in an IIFE that takes i as a parameter and returns the actual event listener function, 
                    // we are effectively creating a new closure with a new variable index that has a different value for each event listener function.
    };

    window.initMap = initMap;

// });


// The initMap function is used as a callback. This is to prevent GoogleMaps API callback before the 
// script is run and the function is properly defined. This is to ensure proper loading sequence.
// Note the <script> tag at the bottom of the body in the index.html file is removed
const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key='+ mapApiKey+'&callback=initMap';
document.head.appendChild(googleMapsScript);