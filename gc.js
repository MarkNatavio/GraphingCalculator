
function gettingY(x){
    let yval = a*pow(x,2) + b*x + c;
    return yval;
}

// Setting values
let a = 0, b = 0, c = 0;

// Gettin discriminant
let descriminant = pow(a,2) - 4*a*c;
Console.log("The descriminant is: " + descriminant);

// Getting axis of symmetry
let aos = -b/(2*a);
Console.log("The axis of symmetry is: " + aos);

// Getting vertex
let y = gettingY(aos);
Console.log("The vertex is: ("+aos+","+y+")");


// Finding roots
// We must do [-b ± sqrt(pow(b,2) - 4*a*c)]/2a

let root1x = 0, root1y = 0;
let root2x = 0, root2y = 0;
if (descriminant > 0){ // 2 real roots
    Console.log("There are 2 real roots");
    root1x = (-b + sqrt(descriminant))/(2*a);
    root1y = gettingY(root1x);

    root2x = (-b - sqrt(descriminant))/(2*a);
    root2y = gettingY(root2x);

    Console.log("The first root is: ("+root1x+","+root1y+")");
    Console.log("The second root is: ("+root2x+","+root2y+")");

} else if (descriminant == 0){ // 1 real root (aos)
    Console.log("The only root is: ("+aos+","+y+")");

} else{ // imaginary roots (descriminant < 0)
    Console.log("The roots are imaginary");
}
