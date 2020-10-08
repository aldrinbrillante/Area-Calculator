// updateForm function 
function updateForm() {
        
    // hide all inputs
    document.getElementById("id_inputs_select").hidden = true;
    document.getElementById("id_inputs_circle").hidden = true;
    document.getElementById("id_inputs_triangle").hidden = true;
    document.getElementById("id_inputs_square").hidden = true;
    document.getElementById("id_inputs_rectangle").hidden = true;

    // get the selected shape and show its inputs
    let shape = document.getElementById("id_shapes").value;
    switch (shape) {
        case "select":
            document.getElementById("id_inputs_select").hidden = false;
            break;
        case "circle":
            document.getElementById("id_inputs_circle").hidden = false;
            break;
        case "triangle":
            document.getElementById("id_inputs_triangle").hidden = false;
            break;
        case "square":
            document.getElementById("id_inputs_square").hidden = false;
            break;
        case "rectangle":
            document.getElementById("id_inputs_rectangle").hidden = false;
            break;
    }
}

function calculateArea() {

    // get the selected shape 
    let shape = document.getElementById("id_shapes").value;
    
    // calculate the shape's area
    let area = 0;
    switch (shape) {
        case "circle":
            let radius = document.getElementById("id_radius").value;
            area = Math.PI * radius * radius;
            break;
        case "triangle":
            let base = document.getElementById("id_base").value;
            let height = document.getElementById("id_height").value;
            area = base * height / 2;
            break;
        case "square":
            let side = document.getElementById("id_side").value;
            area = side * side;
            break;
        case "rectangle":
            let length = document.getElementById("id_length").value;
            let width = document.getElementById("id_width").value;
            area = length * width;
            break;
    }

    // output the area
    document.getElementById("id_output").innerHTML = "Area = " + area;
}