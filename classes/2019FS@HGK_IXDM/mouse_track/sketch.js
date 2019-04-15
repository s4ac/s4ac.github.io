function setup(){
    createCanvas(innerWidth, innerHeight);
    beginShape();
    for (const pos of mouse_movement_coordinates_no_scroll) {
        vertex(pos[0], pos[1]);
    }
    endShape()
    const start = mouse_movement_coordinates_no_scroll[0]
    text('start', start[0], start[1]);
    const last = mouse_movement_coordinates_no_scroll.length - 1
    const end = mouse_movement_coordinates_no_scroll[last]
    text('end', end[0], end[1]);
}