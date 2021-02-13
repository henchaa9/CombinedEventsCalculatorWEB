const hundred_in = document.getElementById("100m-in");
const longjump_in = document.getElementById("longjump-in");
const shotput_in = document.getElementById("shotput-in");
const highjump_in = document.getElementById("highjump-in");
const fourhun_in = document.getElementById("400m-in");
const hurdles_in = document.getElementById("hurdles-in");
const discus_in = document.getElementById("discus-in");
const pole_in = document.getElementById("pole-in");
const javelin_in = document.getElementById("javelin-in");
const fifteenhun_in = document.getElementById("1500m-in");

let hundred_out = document.getElementById("100m-out");
let longjump_out = document.getElementById("longjump-out");
let shotput_out = document.getElementById("shotput-out");
let highjump_out = document.getElementById("highjump-out");
let fourhun_out = document.getElementById("400m-out");
let hurdles_out = document.getElementById("hurdles-out");
let discus_out = document.getElementById("discus-out");
let pole_out = document.getElementById("pole-out");
let javelin_out = document.getElementById("javelin-out");
let fifteenhun_out = document.getElementById("1500m-out");
let total_out = document.getElementById("result-span");


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
        b = parseFloat(parseInt(a[0]) * 100 + parseInt(a[1]))
    }
    else {
        b = parseFloat(parseInt(result) * 100)
    }

    return b
}


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
    if (hundred_in.value.length > 0) {
        hundred(time(hundred_in.value))
        hundred_out.innerHTML = hunscore.toString()
    }
    else {hundred_out.innerHTML = 0}
})


longjump_in.addEventListener("input", function() {
    if (longjump_in.value.length > 0) {
        longjump(distance(longjump_in.value))
        longjump_out.innerHTML = longscore.toString()
    }
    else {longjump_out.innerHTML = 0}
})


shotput_in.addEventListener("input", function() {
    if (shotput_in.value.length > 0) {
        shotput(parseFloat(shotput_in.value))
        shotput_out.innerHTML = shotscore.toString()
    }
    else {shotput_out.innerHTML = 0}
})


highjump_in.addEventListener("input", function() {
    if (highjump_in.value.length > 0) {
        highjump(distance(highjump_in.value))
        highjump_out.innerHTML = highscore.toString()
    }
    else {highjump_out.innerHTML = 0}
})


fourhun_in.addEventListener("input", function() {
    if (fourhun_in.value.length > 0) {
        fourhun(time(fourhun_in.value))
        fourhun_out.innerHTML = fourscore.toString()
    }
    else {fourhun_out.innerHTML = 0}
})


hurdles_in.addEventListener("input", function() {
    if (hurdles_in.value.length > 0) {
        hurdles(time(hurdles_in.value))
        hurdles_out.innerHTML = hurdlescore.toString()
    }
    else {hurdles_out.innerHTML = 0}
})


discus_in.addEventListener("input", function() {
    if (discus_in.value.length > 0) {
        discus(parseFloat(discus_in.value))
        discus_out.innerHTML = discusscore.toString()
    }
    else {discus_out.innerHTML = 0}
})


pole_in.addEventListener("input", function() {
    if (pole_in.value.length > 0) {
        pole(distance(pole_in.value))
        pole_out.innerHTML = polescore.toString()
    }
    else {pole_out.innerHTML = 0}
})


javelin_in.addEventListener("input", function() {
    if (javelin_in.value.length > 0) {
        javelin(parseFloat(javelin_in.value))
        javelin_out.innerHTML = javelinscore.toString()
    }
    else {javelin_out.innerHTML = 0}
})


fifteenhun_in.addEventListener("input", function() {
    if (fifteenhun_in.value.length > 0) {
        fifteenhun(time(fifteenhun_in.value))
        fifteenhun_out.innerHTML = fifteenscore.toString()
    }
    else {fifteenhun_out.innerHTML = 0}
})
