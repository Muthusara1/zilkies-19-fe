function filterOption() {
    var e = document.getElementById("dropdown1");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser == "TeamDetails") {
        document.getElementById('team1').style.display = 'flex';
        document.getElementById('player1').style.display = 'none';
    }
    else if (strUser == "PlayerDetails") {
        document.getElementById('player1').style.display = 'flex';
        document.getElementById('team1').style.display = 'none';
    }
}