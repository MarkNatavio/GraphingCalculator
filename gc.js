function solving(A,B,C){
    // Setting values
    let a = A, b = B, c = C;

    // Gettin discriminant
    let discriminant = 0;
    discriminant = Math.pow(b,2) - 4*a*c;
    document.getElementById("discriminant").innerHTML = "The discriminant is: " + discriminant;

    // Getting axis of symmetry
    let aos = 0;
    aos = -b/(2*a);
    document.getElementById("aos").innerHTML = "The axis of symmetry is: " + aos;

    // Getting vertex
    let y = 0;
    y = a*Math.pow(aos,2) + b*aos + c;
    document.getElementById("vertex").innerHTML = "The vertex is: ("+aos+","+y+")";


    // Finding roots, we must do [-b ± sqrt(pow(b,2) - 4*a*c)]/2a
    let root1x = 0, root1y = 0;
    let root2x = 0, root2y = 0;
    if (discriminant > 0){ // 2 real roots
        // Get first root
        root1x = (-b + Math.sqrt(discriminant))/(2*a);
        root1y = a*Math.pow(root1x,2) + b*root1x + c;

        // Get second root
        root2x = (-b - Math.sqrt(discriminant))/(2*a);
        root2y = a*Math.pow(root2x,2) + b*root2x + c;

        // Display root type and roots
        document.getElementById("rootType").innerHTML = "There are 2 real roots:";
        document.getElementById("root1").innerHTML = "("+root1x+","+root1y+")";
        document.getElementById("root2").innerHTML = "("+root2x+","+root2y+")";

    } else if (discriminant == 0){ // 1 real root (aos)
        // Display root
        document.getElementById("rootType").innerHTML = "There is only one real root:";
        document.getElementById("root1").innerHTML = "("+aos+","+y+")";

    } else{ // imaginary roots (discriminant < 0)
        discriminant *= -1;

        root1x = (-b + Math.sqrt(discriminant))/(2*a);
        root1y = a*Math.pow(root1x,2) + b*root1x + c

        root2x = (-b - Math.sqrt(discriminant))/(2*a);
        root2y = a*Math.pow(root2x,2) + b*root2x + c

        document.getElementById("rootType").innerHTML = "There are 2 imaginary roots:";
        document.getElementById("root1").innerHTML = "("+root1x+" i,"+root1y+")";
        document.getElementById("root2").innerHTML = "("+root2x+" i,"+root2y+")";
    }

    // Drawing curve
    let g = document.getElementById("graph");
    let graph = g.getContext("2d");
    graph.beginPath();
    graph.moveTo(aos+500,y+250);
    graph.quadraticCurveTo(aos+500, y+250, 0, 2000);
    graph.stroke();
        
    
}

// Graphing
let g = document.getElementById("graph");
let graph = g.getContext("2d");

// Setting axises
graph.moveTo(0,250);
graph.lineTo(1000,250);
graph.stroke();

graph.moveTo(500,0);
graph.lineTo(500,500);
graph.stroke();