function user_card_html(obj) {
    if(typeof(obj)!== 'object') return '';

    let html = `<div class="user-card" id="${obj['id']}">
                    <img src="${obj['avatar']}">
                    <div class="user-info">
                        <h4>${obj['first_name']} ${obj['last_name']}</h4>
                        <div class="user-mail-id">
                            <span class="iconify" data-icon="bytesize:mail" data-inline="false"></span>
                            <h6>${obj['email']}</h6>
                        </div>
                    </div>
                </div>`;

    return html;
}

var userData = '{"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'

var obj = JSON.parse(userData);

console.log(obj);

let html='';

for( let i=0; i<obj.data.length; i++){
    html += user_card_html(obj.data[i]);
}

console.log(html);

document.getElementById("user-cards").innerHTML=html;