var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        console.log(xhr);
    }
}

xhr.open('get', 'data.json', true);
xhr.send(null);