function monthEl() {
  document.getElementById("searchForm")
  preventDefault();
  
}

// Get a reference to the button element
const myButton1 = document.getElementById("button1");

// Add an event listener to the button
myButton1.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_1.length; i++) {
    const data = seasonArr_1[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton2 = document.getElementById("button2");

// Add an event listener to the button
myButton2.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_2.length; i++) {
    const data = seasonArr_2[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton3 = document.getElementById("button3");

// Add an event listener to the button
myButton3.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_3.length; i++) {
    const data = seasonArr_3[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton4 = document.getElementById("button4");

// Add an event listener to the button
myButton4.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_4.length; i++) {
    const data = seasonArr_4[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton5 = document.getElementById("button5");

// Add an event listener to the button
myButton5.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_5.length; i++) {
    const data = seasonArr_5[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton6 = document.getElementById("button6");

// Add an event listener to the button
myButton6.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_6.length; i++) {
    const data = seasonArr_6[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton7 = document.getElementById("button7");

// Add an event listener to the button
myButton7.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_7.length; i++) {
    const data = seasonArr_7[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton8 = document.getElementById("button8");

// Add an event listener to the button
myButton8.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_8.length; i++) {
    const data = seasonArr_8[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton9 = document.getElementById("button9");

// Add an event listener to the button
myButton9.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_9.length; i++) {
    const data = seasonArr_9[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton10 = document.getElementById("button10");

// Add an event listener to the button
myButton10.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_10.length; i++) {
    const data = seasonArr_10[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton11 = document.getElementById("button11");

// Add an event listener to the button
myButton11.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_11.length; i++) {
    const data = seasonArr_11[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

const myButton12 = document.getElementById("button12");

// Add an event listener to the button
myButton12.addEventListener("click", (event) => {
event.preventDefault();
  // Loop through the season array and apply it to Google Maps
  for (let i = 0; i < seasonArr_12.length; i++) {
    const data = seasonArr_12[i];
    // Add a marker to the map at the given position
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.title
    });
  }
});

// Get the modal and close button
const modal = document.getElementById("signup-modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
const openBtn = document.getElementById("open-modal-btn");

// When the user clicks the button, open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Arrays for the map
var seasonArr_1 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];

const mapApiKey = "AIzaSyCtJSDbUKLSn6_t86GsjWt6dLbqj9KeDb8"
var seasonArr_1 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];				
var seasonArr_2 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_3 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_4 = [["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"]];
var seasonArr_5 = [["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_6 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_7 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_8 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Lanzarote, Famara","29.1157476","-13.5559527",148,"kitesurf-lanzarote-famara-canary-islands"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_9 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];
var seasonArr_10 = [["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Marsala, Lo Stagnone","37.8882145","12.4714460",121,"kitesurf-marsala-lo-stagnone-sicily-italy"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["Tarifa","36.0134134","-5.6047388",150,"kitesurf-tarifa-spain"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Camber Sands","50.9313082","0.8049013",139,"kitesurf-camber-sands-united-kingdom"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Lake Garda - Malcesine & Navene","45.7940235","10.8335710",140,"kitesurf-lake-garda-malcesine-navene-italy"],["Esposende, Cavado River","41.5282839","-8.7814479",127,"kitesurf-esposende-cavado-river-portugal"]];
var seasonArr_11 = [["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Essaouira Bay","31.5061699","-9.7661591",125,"kitesurf-essaouira-bay-morocco"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Safaga, Soma Bay","26.8564696","33.9575303",118,"kitesurf-safaga-soma-bay-egypt"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"]];
var seasonArr_12 = [["Watamu Beach","-3.3546866","40.0170135",120,"kitesurf-watamu-beach-kenya"],["Mui Ne","10.9341368","108.2864947",142,"kitesurf-mui-ne-vietnam"],["Jericoacoara & Prea","-2.8123580","-40.4203163",136,"kitesurf-jericoacoara-prea-brazil"],["Jambiani","-6.3165949","39.5458169",129,"kitesurf-jambiani-zanzibar"],["Fuerteventura, Playa Sotavento","28.1307545","-14.2445413",119,"kitesurf-fuerteventura-playa-sotavento-canary-islands"],["Blougbergstrand, Cape Town","-33.8241693","18.4770965",146,"kitesurf-blougbergstrand-cape-town-south-africa"],["Dakhla","23.9200652","-15.7648696",124,"kitesurf-dakhla-morocco"],["Safety Bay, Perth","-32.3054511","115.7129860",137,"kitesurf-safety-bay-perth-australia"],["Paracas","-13.8580624","-76.2534428",126,"kitesurf-paracas-peru"],["La Ventana - Baja California Sur","24.0462212","-109.9872173",122,"kitesurf-la-ventana-baja-california-sur-mexico"],["Sal, Santa Maria","16.6142328","-22.8972836",149,"kitesurf-sal-santa-maria-cabo-verde"],["Christchurch Estuary","-43.5493254","172.7045802",147,"kitesurf-christchurch-estuary-new-zealand"],["Punta Chame","8.6521188","-79.7033000",138,"kitesurf-punta-chame-panama"],["Paje","-6.2662258","39.5356086",131,"kitesurf-paje-zanzibar"],["Boracay  Island","11.9657799","121.9285980",143,"kitesurf-boracay-island-philippines"],["Providenciales - Long Bay Beach","21.7721084","-72.1634656",128,"kitesurf-providenciales-long-bay-beach-turks-and-caicos"],["Kalpitiya","8.2265547","79.7349542",141,"kitesurf-kalpitiya-sri-lanka"]];



// API and key all linked up
// weather API and sports API
// json response 
// local storage for sign up sheet

// Insert interactive map and marker
// This function MUST be placed towards the end
function initMap() {
    const blouberg = {lat: -3.35263, lng: 40.01689};
    
    // create map, centered at Blouberg
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: blouberg,
    });

    let currentInfoWindow;
    // create a function that will loop through the array and create markers for all locations
    // create markers for all locations
    for (var i=0; i<${locationArr}.length; i++) {
        const location = seasonArr_1[i];
        const marker = new google.maps.Marker({
            position: {lat: parseFloat(location[1]), lng: parseFloat(location[2])},
            map: map,
            title: location[0],
        });
        
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
    
window.initMap = initMap;
    
// The initMap function is used as a callback. This is to prevent GoogleMaps API callback before the 
// script is run and the function is properly defined. This is to ensure proper loading sequence.
// Note the <script> tag at the bottom of the body in the index.html file is removed
const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key='+ mapApiKey+'&callback=initMap';
document.head.appendChild(googleMapsScript);

