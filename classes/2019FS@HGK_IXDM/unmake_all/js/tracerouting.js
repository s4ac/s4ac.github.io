

const colors = [
    [255, 0, 0, 1],
    [0, 255, 255, 1],
    [255, 0, 255, 1],
    [125, 255, 0, 1],
    [255, 125, 0, 1],
    [255, 255, 0, 1],
]
let coordinates = []
// make the map
const view = new ol.View({
    center: ol.proj.fromLonLat([47.5584, 7.5733]),
    zoom: 2
});
const map = new ol.Map({
    target: document.getElementById('map'),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: view
});

// draw_path(coordinates, colors[0]);

function get_coord_array_from_obj(object) {
    const result = [];
    for (const coord of object) {
        result.push([coord.longitude, coord.latitude])
    }
    return result
}


function draw_path(coordinates, color) {
    const path = new ol.Feature({
        geometry: new ol.geom.LineString(coordinates)
    });

    transform_geometry(path);

    const stroke = new ol.style.Stroke({
        color: color,
        width: 2
    });


    const style = new ol.style.Style({
        stroke: stroke
    });

    const vector_layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [path]
        })
    })

    vector_layer.setStyle(style);
    map.addLayer(vector_layer);
}


function transform_geometry(element) {
    let current_projection = new ol.proj.Projection({ code: "EPSG:4326" });//"EPSG:3857""EPSG:4326"
    // let new_projection = new ol.proj.Projection({ code: "EPSG:900913" });
    var new_projection = map.getView().getProjection();
    element.getGeometry().transform(current_projection, new_projection);
}

function generate_color() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b]
}

for (let i = 0; i < data.length; i++) {
    coordinates = get_coord_array_from_obj(data[i]);
    // console.log(coordinates);
    draw_path(coordinates, colors[i]);
    const legend = document.getElementById("legend");
    const p = document.createElement('p');
    p.style.color = make_css_color(colors[i]).complementary;
    p.style.backgroundColor = make_css_color(colors[i]).original;
    p.style.outline = 'solid 2px ' + make_css_color(colors[i]).complementary;
    p.style.textAlign = 'center';
    p.innerText = data_txt[i];
    legend.appendChild(p);
}

function make_css_color(arr) {
    const r = 255 - arr[0];
    const g = 255 - arr[1];
    const b = 255 - arr[2];
    return {
        original: 'rgba(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', 1)',
        complementary: 'rgba(' + r + ', ' + g + ', ' + b + ', 0.85)'
    }
}

/* VALUE MAPPING */
function mapVal(value, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}