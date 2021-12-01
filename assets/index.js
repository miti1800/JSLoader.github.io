var loadingTime;

function get_user_data() {
    document.querySelector(".user-card-grid").classList.add('hide');
    document.querySelector(".loader").classList.remove('hide');
    loadingTime = setTimeout(showData, 1000);
}

function showData() {
    document.querySelector(".loader").classList.add('hide');
    document.querySelector(".user-card-grid").classList.remove('hide');
}