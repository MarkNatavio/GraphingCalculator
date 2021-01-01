
function gettingY(x){
    return a*Math.pow(x,2) + b*x + c;
}

// Setting values
let a = 6, b = 2, c = 1;

// Gettin discriminant
let discriminant = 0;
discriminant = Math.pow(b,2) - 4*a*c;
console.log("The discriminant is: " + discriminant);

// Getting axis of symmetry
let aos = 0;
aos = -b/(2*a);
console.log("The axis of symmetry is: " + aos);

// Getting vertex
let y = 0;
y = gettingY(aos);
console.log("The vertex is: ("+aos+","+y+")");


// Finding roots
// We must do [-b ± sqrt(pow(b,2) - 4*a*c)]/2a

let root1x = 0, root1y = 0;
let root2x = 0, root2y = 0;
if (discriminant > 0){ // 2 real roots
    console.log("There are 2 real roots");
    root1x = (-b + Math.sqrt(discriminant))/(2*a);
    root1y = gettingY(root1x);

    root2x = (-b - Math.sqrt(discriminant))/(2*a);
    root2y = gettingY(root2x);

    console.log("The first root is: ("+root1x+","+root1y+")");
    console.log("The second root is: ("+root2x+","+root2y+")");

} else if (discriminant == 0){ // 1 real root (aos)
    console.log("The only root is: ("+aos+","+y+")");

} else{ // imaginary roots (discriminant < 0)
    console.log("The roots are imaginary but the roots would be");
    discriminant *= -1;

    root1x = (-b + Math.sqrt(discriminant))/(2*a);
    root1y = gettingY(root1x);

    root2x = (-b - Math.sqrt(discriminant))/(2*a);
    root2y = gettingY(root2x);

    console.log("The first imaginary root is: ("+root1x+" i,"+root1y+")");
    console.log("The second imaginary root is: ("+root2x+" i,"+root2y+")");
}
