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
// This function MUST be placed towards the end
function initMap() {
    const blouberg = {lat: -3.35263, lng: 40.01689};
    
    // create map, centered at Blouberg
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: blouberg,
    });

    let currentInfoWindow;

    // create markers for all locations
    for (var i=0; i<seasonArr_1.length; i++) {
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


  

// animated news reel


