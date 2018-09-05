function displayScorecard() {
    document.getElementById('schedule-1').style.opacity = '0.3';
    document.getElementById('scorecard-1').style.display = 'flex';
    document.getElementById('scorecard-1').style.left = '0px';
    document.getElementById('scorecard-1').style.top = '200px';
    document.getElementById('scorecard-1').style.zIndex = '1';
    document.getElementById('scorecard-1').style.position = 'fixed';
    document.getElementById('scorecard-1').style.width = '100%';
}

function displaySchedule() {
    document.getElementById('scorecard-1').style.display = 'none';
    document.getElementById('schedule-1').style.display = 'block';
    document.getElementById('schedule-1').style.opacity = '1';
}