function runtime() {
    const clock = new Date();
    const hours = String(clock.getHours()).padStart(2,"0");
    const minutes = String(clock.getMinutes()).padStart(2,"0");
    time.innerText = `${hours}:${minutes}`;
    const hoursNo = clock.getHours()
    if(hoursNo >=5 && hoursNo < 12) {
        greeting.children[0].innerText = "Good morning!"
    } else if(hoursNo >=12 && hoursNo < 18) {
        greeting.children[0].innerText = "Good afternoon!"
    } else if(hoursNo >=18 && hoursNo < 21) {
        greeting.children[0].innerText = "Good evening!"
    } else {
        greeting.children[0].innerText = "Good night!"
    }
};

runtime();
setInterval(runtime, 1000);