function takeOff() {
    document.getElementById("estado").innerText = "Houston, we have liftoff!";
}

function hoverAbort() {
    document.getElementById("abort").style.backgroundColor = "red";
}

function resetAbort() {
    document.getElementById("abort").style.backgroundColor = "";
}

function abortMission() {
    if (confirm("Are you sure you want to abort the mission?")) {
        document.getElementById("estado").innerText = "Mission aborted! Space shuttle returning home.";
    }
}
