// 存放撈回來的資料陣列
var data;
var dataRecords = [];

var xhr = new XMLHttpRequest();

function updateList(zone) {
    dataRecords = [];
    document.querySelector('ul').innerHTML = '';
    for(var i = 0; i < data.length; i++) {
        if(data[i].Zone === zone) {
            dataRecords.push({
                ticketInfo: data[i].Ticketinfo,
                zone: data[i].Zone,
                name: data[i].Name,
                openTime: data[i].Opentime,
                picture: data[i].Picture1,
                address: data[i].Add,
                tel: data[i].Tel
            });
        }
    }

    document.querySelector('div.content h2').textContent = zone;

    for(var i = 0; i < dataRecords.length; i++){
        document.querySelector('ul').innerHTML += 
            '<li><div class="image" style="background-image: url(' + dataRecords[i].picture + ');">' +
            '<h3>' + dataRecords[i].name + '</h3>' +
            '<p>' + zone + '</p>' +
            '</div>' + 
            '<p class="time"><img src="images/icons_clock.png">' + dataRecords[i].openTime + '</p>' + 
            '<p class="address"><img src="images/icons_pin.png">' + dataRecords[i].address + '</p>' +
            '<p class="tel"><img src="images/icons_phone.png">' + dataRecords[i].tel + '</p>' +
            '<img src="images/icons_tag.png"><p class="free">' + dataRecords[i].ticketInfo + '</p>' +
            '</li>';
    }
}

xhr.onload = function() {
    if(xhr.status === 200) {
        // console.log(JSON.parse(xhr.responseText));
        data = JSON.parse(xhr.responseText).result.records;
        // console.log(data);

        document.querySelector('input[value="三民區"]').addEventListener('click', function() {
            updateList(document.querySelector('input[value="三民區"]').value);
        }, false);

        document.querySelector('input[value="苓雅區"]').addEventListener('click', function() {
            updateList(document.querySelector('input[value="苓雅區"]').value);
        }, false);

        document.querySelector('input[value="新興區"]').addEventListener('click', function() {
            updateList(document.querySelector('input[value="新興區"]').value);
        }, false);

        document.querySelector('input[value="鹽埕區"]').addEventListener('click', function() {
            updateList(document.querySelector('input[value="鹽埕區"]').value);
        }, false);

        document.querySelector('select').addEventListener('change', function() {
            updateList(document.querySelector('select').value);
        }, false);
    }
}

xhr.open('get', 'js/data.json', true);
xhr.send(null);

window.addEventListener('scroll', function(e){
    if(window.scrollY < 500) {
        document.querySelector('div.go_top').style.display = 'none';
    } else {
        document.querySelector('div.go_top').style.display = 'block';
    }
}, false);