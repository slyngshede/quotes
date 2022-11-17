function get_data(uri) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", uri, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
}

function get_random_fortune(data) {
    const fortunes = data.split("%");
    const text = fortunes[Math.floor(Math.random() * fortunes.length)].split("--");
    let fortune = {text: text[0], author:""};
    if(text.length > 1){
        fortune.author = text[1];
    }


    fortune.text = fortune.text.trim().replaceAll("\n", "<br />");
    return fortune;
}

fortunes = get_data('stoic.txt');
fortune = get_random_fortune(fortunes);
document.getElementById('quote').innerHTML = fortune.text
document.getElementById('author').innerHTML = fortune.author
