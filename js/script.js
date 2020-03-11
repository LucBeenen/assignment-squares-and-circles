let link = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(link, "svg");
svg.setAttribute("height", "850");
svg.setAttribute("width", "850");
svg.setAttribute("viewBox", "0 0 850 850");
document.body.appendChild(svg);

let arr1 = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
let arr2 = [100, 200, 300, 400, 500, 600];

let rgb = 255;
let w = 20;
let h = 20;
let r = 10;

function Vierkant(xVierkant, yVierkant, w, h, VierkantKleur) {
    let vierkant = document.createElementNS(link, "rect");
    vierkant.setAttribute("x", xVierkant);
    vierkant.setAttribute("y", yVierkant);
    vierkant.setAttribute("width", w);
    vierkant.setAttribute("height", h);
    vierkant.setAttribute("fill", VierkantKleur);
    svg.appendChild(vierkant);
}

function Cirkel(xCirkel, yCirkel, r, CirkelKleur) {
    let cirkel = document.createElementNS(link, "circle");
    cirkel.setAttribute("cx", xCirkel);
    cirkel.setAttribute("cy", yCirkel);
    cirkel.setAttribute("r", r);
    cirkel.setAttribute("fill", CirkelKleur);
    svg.appendChild(cirkel);
}

for (let i = 0; i < arr1.length; i++) {
    CirkelKleur = 'rgb(' + rgb + ', 0, 0)';
    rgb = rgb - i * 10;
    for (let k = 0; k < arr2.length; k++) {
        if (k != 0) {
            let x = arr2[k];
            let y = arr1[i];
            Cirkel(x + r, y + r, r, CirkelKleur);
        } else {
            let x = arr2[k];
            let y = arr1[i];
            Vierkant(x, y, r * 2, r * 2, CirkelKleur);
        }
    }
}