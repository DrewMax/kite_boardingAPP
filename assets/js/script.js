// querySelectors to HTML
const searchForm = document.querySelector(".searchForm");
const submitBtn = document.querySelector(".submitBtn");

var tasks = [];

var saveBtn = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// request and response API
// GET && POST for API

// API and key all linked up
// weather API and sports API
// json response 
// local storage for sign up sheet
// interactive map
// animated news reel


function test() {
    console.log("this is a test")
}

test();

document.addEventListener("click", submitBtn())