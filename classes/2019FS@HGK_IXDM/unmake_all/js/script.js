/** check the nature of the device **/
let is_device = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    is_device = true;
}
/************************************************************/
/************************************************************/
/************************************************************/


/** typing the title **/
const title_txt = '⚙️!! U N M A K E A L L !!️⚙️';
let writer;
let type_idx = 0;
writer = setInterval(type, 70);
function type() {
    const title = document.getElementById('animated-title');
    title.innerText += title_txt.charAt(type_idx);
    type_idx++;
    if (type_idx > title_txt.length) clearInterval(writer);
}
/************************************************************/
/************************************************************/
/************************************************************/

/** initialize the website **/
const div_pos = []
let curr_div;

function init() {
    for (let i = 0; i < 6; i++) {
        const angle = mapVal(i, 0, 6, 0, 2 * Math.PI)
        const r = 2250
        const x = r + (Math.sin(angle) * (r - (innerWidth / 2)))
        const y = r + (Math.cos(angle) * (r - (innerHeight / 2)))
        div_pos.push({ x, y });
    }
    resize_divs();
    setTimeout(first_move, 1000);
    // move_to(menu.children[rnd_idx]);
}

function resize_divs(el) {
    const kids = document.getElementById('container').children

    let idx = 0;
    for (const kid of kids) {
        // const top = Math.floor(Math.random() * 5000);
        // const left = Math.floor(Math.random() * 5000);
        const w = innerWidth - 125;
        const h = innerHeight - 125;
        kid.style.width = w + 'px';
        kid.style.height = h + 'px';
        if (!is_device) {
            kid.style.left = div_pos[idx].x - (w / 2) + 'px'
            kid.style.top = div_pos[idx].y - (h / 2) + 'px';
        }
        idx++;
    }

    if (el !== undefined) {
        // if this function is called as an onresize event move to the current div
        console.log(el)
        move_to(curr_div);
    }
}

function first_move() {
    const menu = document.getElementById('menu')
    console.log(menu.children.length);
    const rnd_idx = Math.floor(Math.random() * menu.children.length);
    console.log(menu.children[rnd_idx].dataset.id);
    move_to(menu.children[rnd_idx]);

    // curr_div = menu.children[rnd_idx];
}

function move_to(el) {
    let element;
    if(el !== null) element = document.getElementById(el.dataset.id);
    else element = document.getElementById(curr_div.dataset.id);
    console.log(element)
    curr_div  = el;
    console.log(el, curr_div)
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

/* VALUE MAPPING */
function mapVal(value, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

init()