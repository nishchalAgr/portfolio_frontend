let pagesHtml = "";
let moreProjectsHtml = `<h3 class='list_element' onclick='window.open("https://github.com/nishchalAgr?tab=repositories")'>> More Projects</h3>`;
let arrToHtml = (arr) => {
    let html = '';
    for(let s of arr) {
        html += `<h3 class="list_element" onclick="window.open('${s}')">> ${s}</h3>`;
    }
    html += moreProjectsHtml;
    console.log(html);
    return html;
}

let toggleList = (elem, str) => {
    let curr = document.getElementById(elem.id + '_list');
    if(curr.innerHTML != "") {
        curr.innerHTML = "";
        return;
    }
    curr.innerHTML = str;
}

let toggleOther = () => {
    toggleVisibilityById("list_element_desc");
}

let toggleVisibilityById = (id) => {
    let elem = document.getElementById(id);
    let display = elem.style.display;
    console.log(display);
    if(display == "none") elem.style.display = "block";
    else elem.style.display = "none";
}

let url = "https://portfolio-server-na.herokuapp.com/pages";
let getPages = async () => {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors"
    });
    console.log(response);
    const data = await response.json();
    pagesHtml = arrToHtml(data.pages);
    document.getElementById("body").style.display = "block";
};