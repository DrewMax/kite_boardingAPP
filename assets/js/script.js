const fetchData = () => {
    const getRequest = new XMLHttpRequest();
  
    getRequest.open("GET", "database", true);
  
    getRequest.onload = function() {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        // need to figure out where to put all this data
        console.log(data);
      }
    };
  
    getRequest.onerror = function() {
      console.error("That didnt work!");
    };
  
    getRequest.send();
  }


function captureFormData() {
    const form = document.getElementById("searchForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      // get form data
      const data = {
       temperature: form.elements.temperature.value,
        location: form.elements.location.value,
        experience: form.elements.experience.value,
        pressure: form.elements.pressure.value,
        outdoor: form.elements.outdoor.value
      };
  
      let response = "";
      // need condtions for these if statement
      // need to create combinations that respond with different locations
      let location = getLocation(${location});



    if (data.temperature === "hot" && data.location === ) {
      fetchData();


    } if (data.location === "Cape Town" || data.location === "phuket") {
      fetchData();
    } if (data.experience === "Novice" || data.experience === "") {
      fetchData();
    }

    // display response
    console.log(response)
    });
  }
  
  function handleFormSubmit() {
    // retrieve form data from localStorage
    const jsonData = localStorage.getItem("formData");
  
    // convert JSON data to JavaScript object
    const data = JSON.parse(jsonData);
  
    // do something with the form data
    console.log(data);
  
    // clear form data from localStorage
    localStorage.removeItem("formData");
  }
  
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", handleFormSubmit);
  
  
  
  
  