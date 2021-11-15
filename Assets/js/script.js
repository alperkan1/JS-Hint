const api_key = "ut3UjTtULYXvnMbdUa0wRe273zY";
const api_url = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${api_url}?api_key=${api_key}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    }
    else {
        throw new Error(data.Error);
    }

}

function displayStatus(data){
     let heading = "API Status Key";
     let results= "<div>Your key is valid until</div>"
    results += `<div class = "key-status">${data.expiry}</div>`;
    resultsModal.show();

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();
}