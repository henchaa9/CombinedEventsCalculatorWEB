
function time(result) {
    if (result.includes(":")) {
        var a = result.split(":")
        var b = a[1].split(".")
        var c = parseFloat((parseInt(a[0]) * 60 + parseInt(b[0])).toString() + "." + b[1]) 
    }
    else {
        var s = 0
        for (let i=0; i<=result.length; i++) {
            if (result[i] === ".") {
                s++;
            }
        }
        if (s > 1) {
            var a = result.split(".")
            var c = parseFloat((parseInt(a[0]) * 60 + parseInt(a[1])).toString() + "." + a[2])
        }
        else {return parseFloat(result)}
    }

    return c
}


function distance(result){
    if (result.includes(".")) {
        a = result.split(".")
        if (a[1].length > 1) {
            return parseFloat(parseInt(a[0]) * 100 + parseInt(a[1].substring(0, 2)))
        }
        else {return parseFloat(parseInt(a[0]) * 100 + parseInt(a[1].substring(0, 2)) * 10)}
    }
    else {
        return parseFloat(parseInt(result) * 100)
    }
}

function mens_decathlon() {

    const hundred_in = document.getElementById("md-100m-in");
    const longjump_in = document.getElementById("md-longjump-in");
    const shotput_in = document.getElementById("md-shotput-in");
    const highjump_in = document.getElementById("md-highjump-in");
    const fourhun_in = document.getElementById("md-400m-in");
    const hurdles_in = document.getElementById("md-hurdles-in");
    const discus_in = document.getElementById("md-discus-in");
    const pole_in = document.getElementById("md-pole-in");
    const javelin_in = document.getElementById("md-javelin-in");
    const fifteenhun_in = document.getElementById("md-1500m-in");

    let hundred_out = document.getElementById("md-100m-out");
    let longjump_out = document.getElementById("md-longjump-out");
    let shotput_out = document.getElementById("md-shotput-out");
    let highjump_out = document.getElementById("md-highjump-out");
    let fourhun_out = document.getElementById("md-400m-out");
    let hurdles_out = document.getElementById("md-hurdles-out");
    let discus_out = document.getElementById("md-discus-out");
    let pole_out = document.getElementById("md-pole-out");
    let javelin_out = document.getElementById("md-javelin-out");
    let fifteenhun_out = document.getElementById("md-1500m-out");
    let total_out = document.getElementById("md-result-span");


    let total = 0
    let hunscore = 0
    let longscore = 0
    let shotscore = 0
    let highscore = 0
    let fourscore = 0
    let hurdlescore = 0
    let discusscore = 0
    let polescore = 0
    let javelinscore = 0
    let fifteenscore = 0


    function hundred(result) {
        const a = 25.4347
        const b = 18
        const c = 1.81
        if (0 < result <= 18) {
            hunscore = parseInt((a * (b - result)**c))
        }
    }


    function longjump(result) {
        const a = 0.14354
        const b = 220
        const c = 1.4
        if (result >= 220) {
            longscore = parseInt((a * (result - b)**c))
        }
    }


    function shotput(result) {
        const a = 51.39
        const b = 1.5
        const c = 1.05
        if (result >= 1.50) {
            shotscore = parseInt((a * (result - b)**c))
        }
    }


    function highjump(result) {
        const a = 0.8465
        const b = 75
        const c = 1.42
        if (result >= 75) {
            highscore = parseInt((a * (result - b)**c))
        }
    }

    function fourhun(result) {
        const a = 1.53775
        const b = 82
        const c = 1.81
        if (0 < result <= 82) {
            fourscore = parseInt((a * (b - result)**c))
        }
    }


    function hurdles(result) {
        const a = 5.74352
        const b = 28.5
        const c = 1.92
        if (0 < result <= 28.5) {
            hurdlescore = parseInt((a * (b - result)**c))
        }
    }


    function discus(result) {
        const a = 12.91
        const b = 4
        const c = 1.1
        if (result >= 4) {
            discusscore = parseInt((a * (result - b)**c))
        }
    }


    function pole(result) {
        const a = 0.2797
        const b = 100
        const c = 1.35
        if (result >= 100) {
            polescore = parseInt((a * (result - b)**c))
        }
    }


    function javelin(result) {
        const a = 10.14
        const b = 7
        const c = 1.08
        if (result >= 7) {
            javelinscore = parseInt((a * (result - b)**c))
        }
    }


    function fifteenhun(result) {
        const a = 0.03768
        const b = 480
        const c = 1.85
        if (0 < result <= 480) {
            fifteenscore = parseInt((a * (b - result)**c))
        }
    }


    hundred_in.addEventListener("input", function() {
        if (hundred_in.value === "") {
            hunscore = 0
            total = longscore + shotscore + highscore + fourscore + 
                hurdlescore + discusscore + polescore + javelinscore + fifteenscore

            hundred_out.innerHTML = hunscore
            total_out.innerHTML = total
        }
        else {
            hundred(time(hundred_in.value))

            if(!isNaN(hunscore)) {
                total = hunscore + longscore + shotscore + highscore + fourscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                hundred_out.innerHTML = hunscore
                total_out.innerHTML = total
            }
            else {
                hunscore = 0
                total = longscore + shotscore + highscore + fourscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                hundred_out.innerHTML = hunscore
                total_out.innerHTML = total
            }
        }
    })


    longjump_in.addEventListener("input", function() {
        if (longjump_in.value === "") {
            longscore = 0
            total = hunscore + shotscore + highscore + fourscore + 
                hurdlescore + discusscore + polescore + javelinscore + fifteenscore

            longjump_out.innerHTML = longscore
            total_out.innerHTML = total
        }
        else {
            longjump(distance(longjump_in.value))

            if (!isNaN(longscore)) {
                total = longscore + hunscore + shotscore + highscore + fourscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                longjump_out.innerHTML = longscore
                total_out.innerHTML = total
            }
        }
    })


    shotput_in.addEventListener("input", function() {
        if (shotput_in.value === "") {
            shotscore = 0
            total = hunscore + longscore + highscore + fourscore + 
                hurdlescore + discusscore + polescore + javelinscore + fifteenscore

            shotput_out.innerHTML = shotscore
            total_out.innerHTML = total
        }
        else {
            shotput(parseFloat(shotput_in.value))

            if (!isNaN(shotscore)) {
                total = shotscore + hunscore + longscore + highscore + fourscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                shotput_out.innerHTML = shotscore
                total_out.innerHTML = total
            }
        }
    })


    highjump_in.addEventListener("input", function() {
        if (highjump_in.value === "") {
            highscore = 0
            total = hunscore + shotscore + longscore + fourscore + 
                hurdlescore + discusscore + polescore + javelinscore + fifteenscore

            highjump_out.innerHTML = highscore
            total_out.innerHTML = total
        }
        else {
            highjump(distance(highjump_in.value))

            if (!isNaN(highscore)) {
                total = highscore + hunscore + shotscore + longscore + fourscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                highjump_out.innerHTML = highscore
                total_out.innerHTML = total
            }
        }
    })


    fourhun_in.addEventListener("input", function() {
        if (fourhun_in.value === "") {
            fourscore = 0
            total = longscore + shotscore + highscore + hunscore + 
                hurdlescore + discusscore + polescore + javelinscore + fifteenscore

            fourhun_out.innerHTML = fourscore
            total_out.innerHTML = total
        }
        else {
            fourhun(time(fourhun_in.value))

            if(!isNaN(fourscore)) {
                total = fourscore + longscore + shotscore + highscore + hunscore + 
                    hurdlescore + discusscore + polescore + javelinscore + fifteenscore

                fourhun_out.innerHTML = fourscore
                total_out.innerHTML = total
            }
        }
    })


    hurdles_in.addEventListener("input", function() {
        if (hurdles_in.value === "") {
            hurdlescore = 0
            total = longscore + shotscore + highscore + hunscore + 
                fourscore + discusscore + polescore + javelinscore + fifteenscore

            hurdles_out.innerHTML = hurdlescore
            total_out.innerHTML = total
        }
        else {
            hurdles(time(hurdles_in.value))

            if(!isNaN(hurdlescore)) {
                total = hurdlescore + longscore + shotscore + highscore + hunscore + 
                    fourscore + discusscore + polescore + javelinscore + fifteenscore

                hurdles_out.innerHTML = hurdlescore
                total_out.innerHTML = total
            }
            else {
                hurdlescore = 0
                total = longscore + shotscore + highscore + hunscore + 
                    fourscore + discusscore + polescore + javelinscore + fifteenscore

                hurdles_out.innerHTML = hurdlescore
                total_out.innerHTML = total
            }
        }
    })


    discus_in.addEventListener("input", function() {
        if (discus_in.value === "") {
            discusscore = 0
            total = hunscore + longscore + highscore + fourscore + 
                hurdlescore + shotscore + polescore + javelinscore + fifteenscore

            discus_out.innerHTML = discusscore
            total_out.innerHTML = total
        }
        else {
            discus(parseFloat(discus_in.value))

            if (!isNaN(discusscore)) {
                total = discusscore + hunscore + longscore + highscore + fourscore + 
                    hurdlescore + shotscore + polescore + javelinscore + fifteenscore

                discus_out.innerHTML = discusscore
                total_out.innerHTML = total
            }
        }
    })


    pole_in.addEventListener("input", function() {
        if (pole_in.value === "") {
            polescore = 0
            total = hunscore + shotscore + longscore + fourscore + 
                hurdlescore + discusscore + highscore + javelinscore + fifteenscore

            pole_out.innerHTML = polescore
            total_out.innerHTML = total
        }
        else {
            pole(distance(pole_in.value))

            if (!isNaN(polescore)) {
                total = polescore + hunscore + shotscore + longscore + fourscore + 
                    hurdlescore + discusscore + highscore + javelinscore + fifteenscore

                pole_out.innerHTML = polescore
                total_out.innerHTML = total
            }
        }
    })


    javelin_in.addEventListener("input", function() {
        if (javelin_in.value === "") {
            javelinscore = 0
            total = hunscore + longscore + highscore + fourscore + 
                hurdlescore + shotscore + polescore + discusscore + fifteenscore

            javelin_out.innerHTML = javelinscore
            total_out.innerHTML = total
        }
        else {
            javelin(parseFloat(javelin_in.value))

            if (!isNaN(javelinscore)) {
                total = javelinscore + hunscore + longscore + highscore + fourscore + 
                    hurdlescore + shotscore + polescore + discusscore + fifteenscore

                javelin_out.innerHTML = javelinscore
                total_out.innerHTML = total
            }
        }
    })


    fifteenhun_in.addEventListener("input", function() {
        if (fifteenhun_in.value === "") {
            fifteenscore = 0
            total = longscore + shotscore + highscore + hunscore + 
                fourscore + discusscore + polescore + javelinscore + hurdlescore

            fifteenhun_out.innerHTML = fifteenscore
            total_out.innerHTML = total
        }
        else {
            fifteenhun(time(fifteenhun_in.value))

            if(!isNaN(fifteenscore)) {
                total = fifteenscore + longscore + shotscore + highscore + hunscore + 
                    fourscore + discusscore + polescore + javelinscore + hurdlescore

                fifteenhun_out.innerHTML = fifteenscore
                total_out.innerHTML = total
            }
        }
    })
}

function mens_heptathlon() {

    const sixty_in = document.getElementById("mh-60m-in");
    const longjump_in = document.getElementById("mh-longjump-in");
    const shotput_in = document.getElementById("mh-shotput-in");
    const highjump_in = document.getElementById("mh-highjump-in");
    const hurdles_in = document.getElementById("mh-hurdles-in");
    const pole_in = document.getElementById("mh-pole-in");
    const thousand_in = document.getElementById("mh-1000m-in");

    let sixty_out = document.getElementById("mh-60m-out");
    let longjump_out = document.getElementById("mh-longjump-out");
    let shotput_out = document.getElementById("mh-shotput-out");
    let highjump_out = document.getElementById("mh-highjump-out");
    let hurdles_out = document.getElementById("mh-hurdles-out");
    let pole_out = document.getElementById("mh-pole-out");
    let thousand_out = document.getElementById("mh-1000m-out");
    let total_out = document.getElementById("mh-result-span");


    let total = 0
    let sixtyscore = 0
    let longscore = 0
    let shotscore = 0
    let highscore = 0
    let hurdlescore = 0
    let polescore = 0
    let thousandscore = 0


    function sixty(result) {
        const a = 58.015
        const b = 11.5
        const c = 1.81
        if (0 < result <= 11.5) {
            sixtyscore = parseInt((a * (b - result)**c))
        }
    }


    function longjump(result) {
        const a = 0.14354
        const b = 220
        const c = 1.4
        if (result >= 220) {
            longscore = parseInt((a * (result - b)**c))
        }
    }


    function shotput(result) {
        const a = 51.39
        const b = 1.5
        const c = 1.05
        if (result >= 1.50) {
            shotscore = parseInt((a * (result - b)**c))
        }
    }


    function highjump(result) {
        const a = 0.8465
        const b = 75
        const c = 1.42
        if (result >= 75) {
            highscore = parseInt((a * (result - b)**c))
        }
    }


    function hurdles(result) {
        const a = 20.5173
        const b = 15.5
        const c = 1.92
        if (0 < result <= 15.5) {
            hurdlescore = parseInt((a * (b - result)**c))
        }
    }


    function pole(result) {
        const a = 0.2797
        const b = 100
        const c = 1.35
        if (result >= 100) {
            polescore = parseInt((a * (result - b)**c))
        }
    }


    function thousand(result) {
        const a = 0.08713
        const b = 305.5
        const c = 1.85
        if (0 < result <= 305) {
            thousandscore = parseInt((a * (b - result)**c))
        }
    }


    sixty_in.addEventListener("input", function() {
        if (sixty_in.value === "") {
            sixtyscore = 0
            total = longscore + shotscore + highscore + 
                hurdlescore + polescore + thousandscore

            sixty_out.innerHTML = sixtyscore
            total_out.innerHTML = total
        }
        else {
            sixty(time(sixty_in.value))

            if(!isNaN(sixtyscore)) {
                total = sixtyscore + longscore + shotscore + highscore + 
                    hurdlescore + polescore + thousandscore

                sixty_out.innerHTML = sixtyscore
                total_out.innerHTML = total
            }
            else {
                sixtyscore = 0
                total = longscore + shotscore + highscore + 
                    hurdlescore + polescore + thousandscore

                sixty_out.innerHTML = sixtyscore
                total_out.innerHTML = total
            }
        }
    })


    longjump_in.addEventListener("input", function() {
        if (longjump_in.value === "") {
            longscore = 0
            total = sixtyscore + shotscore + highscore + 
                hurdlescore + polescore + thousandscore

            longjump_out.innerHTML = longscore
            total_out.innerHTML = total
        }
        else {
            longjump(distance(longjump_in.value))

            if (!isNaN(longscore)) {
                total = longscore + sixtyscore + shotscore + highscore + 
                    hurdlescore + polescore + thousandscore

                longjump_out.innerHTML = longscore
                total_out.innerHTML = total
            }
        }
    })


    shotput_in.addEventListener("input", function() {
        if (shotput_in.value === "") {
            shotscore = 0
            total = sixtyscore + longscore + highscore + 
                hurdlescore + polescore + thousandscore

            shotput_out.innerHTML = shotscore
            total_out.innerHTML = total
        }
        else {
            shotput(parseFloat(shotput_in.value))

            if (!isNaN(shotscore)) {
                total = shotscore + sixtyscore + longscore + highscore + 
                    hurdlescore + polescore + thousandscore

                shotput_out.innerHTML = shotscore
                total_out.innerHTML = total
            }
        }
    })


    highjump_in.addEventListener("input", function() {
        if (highjump_in.value === "") {
            highscore = 0
            total = sixtyscore + shotscore + longscore + 
                hurdlescore + polescore + thousandscore

            highjump_out.innerHTML = highscore
            total_out.innerHTML = total
        }
        else {
            highjump(distance(highjump_in.value))

            if (!isNaN(highscore)) {
                total = highscore + sixtyscore + shotscore + longscore + 
                    hurdlescore + polescore + thousandscore

                highjump_out.innerHTML = highscore
                total_out.innerHTML = total
            }
        }
    })


    hurdles_in.addEventListener("input", function() {
        if (hurdles_in.value === "") {
            hurdlescore = 0
            total = sixtyscore + shotscore + longscore + 
                highscore + polescore + thousandscore

            hurdles_out.innerHTML = hurdlescore
            total_out.innerHTML = total
        }
        else {
            hurdles(time(hurdles_in.value))

            if (!isNaN(hurdlescore)) {
                total = highscore + sixtyscore + shotscore + longscore + 
                    hurdlescore + polescore + thousandscore

                hurdles_out.innerHTML = hurdlescore
                total_out.innerHTML = total
            }
        }
    })


    pole_in.addEventListener("input", function() {
        if (pole_in.value === "") {
            polescore = 0
            total = sixtyscore + shotscore + longscore + 
                hurdlescore + highscore + thousandscore

            pole_out.innerHTML = polescore
            total_out.innerHTML = total
        }
        else {
            pole(distance(pole_in.value))

            if (!isNaN(polescore)) {
                total = polescore + sixtyscore + shotscore + longscore + 
                    hurdlescore + highscore + thousandscore

                pole_out.innerHTML = polescore
                total_out.innerHTML = total
            }
        }
    })


    thousand_in.addEventListener("input", function() {
        if (thousand_in.value === "") {
            thousandscore = 0
            total = longscore + shotscore + highscore + sixtyscore + 
                polescore + hurdlescore

            thousand_out.innerHTML = thousandscore
            total_out.innerHTML = total
        }
        else {
            thousand(time(thousand_in.value))

            if(!isNaN(thousandscore)) {
                total = thousandscore + longscore + shotscore + highscore + sixtyscore + 
                    polescore + hurdlescore

                thousand_out.innerHTML = thousandscore
                total_out.innerHTML = total
            }
        }
    })
}

mens_decathlon()

const open_menu = document.getElementById("open-menu")
const close_menu = document.getElementById("close-menu")
const nav = document.querySelector("nav")

open_menu.addEventListener("click", () => {
    nav.classList.add("show-menu")
})

close_menu.addEventListener("click", () => {
    nav.classList.remove("show-menu")
})

const mens_deca_table = document.getElementById("mens-decathlon")
var mens_hepta_table = document.getElementById("mens-heptathlon")

const mens_deca_button = document.getElementById("mens-deca-button")
const mens_hepta_button = document.getElementById("mens-hepta-button")
const womens_hepta_button = document.getElementById("womens-hepta-button")
const womens_penta_button = document.getElementById("womens-penta-button")

mens_deca_button.addEventListener("click", () => {
    mens_deca_table.classList.add("visible")
    mens_deca_table.classList.remove("invisible")
    mens_hepta_table.classList.add("invisible")
    mens_decathlon()
    nav.classList.remove("show-menu")
})

mens_hepta_button.addEventListener("click", () => {
    mens_hepta_table.classList.add("visible")
    mens_hepta_table.classList.remove("invisible")
    mens_deca_table.classList.add("invisible")
    mens_heptathlon()
    nav.classList.remove("show-menu")
})