
// 1

let sideSquare = prompt("Enter the length of the side of the square (sm.)");
console.log(sideSquare);

let perimeter = sideSquare * 4;
console.log(perimeter);
alert("Perimeter of a square = " + perimeter + " sm.");

// 2

let cubeLength = prompt("Enter the length of the edge of the cube (cm.)");
console.log(cubeLength);

let cubeVolume = cubeLength * cubeLength * cubeLength;
console.log(cubeVolume);
alert("Cube volume = " + cubeVolume + " cm.");

let faceArea = cubeLength * cubeLength;
console.log(faceArea);
alert("Cube face area = " + faceArea + " cm.");

// 3

let circleDiameter = +prompt("Enter the diameter of the circle (cm.)");
console.log(circleDiameter);

let circumference = Math.PI * circleDiameter;
console.log(circumference.toFixed(2));
alert("Circumference = " + circumference.toFixed(2) + " cm. ");

let areaCircle = Math.PI * ((circleDiameter / 2) ** 2);
console.log(areaCircle.toFixed(2));
alert("Area of a circle = " + areaCircle.toFixed(2) + " cm.");

// 4

let mass = +prompt("Enter the mass of the substance (gm)");
console.log(mass.toFixed(2));

let volume = +prompt("Enter the volume of the substance (cm³).");
console.log(volume.toFixed(2));

let density = mass / volume;
console.log(density.toFixed(2));
alert("Density of the substance - " + density.toFixed(2) + " gm/cm³.")

// 5

let population = +prompt("Enter the total population of the territory.");
console.log(population.toFixed(2));

let area = +prompt("Enter the area of ​​the territory (km²).");
console.log(area.toFixed(2));

let populationDensity = population / area; 
console.log(populationDensity.toFixed(2));
alert("Population density - " + populationDensity.toFixed(2) + " people per 1 km².");

// 6

let legA = +prompt("Enter the length of the leg A (cm).");
console.log(legA);

let legB = +prompt("Enter the length of the leg B (cm).");
console.log(legB);

let hypotenuse = Math.sqrt(legA ** 2 + legB **2);
console.log(hypotenuse.toFixed(2));
alert("Length of the hypotenuse - " + hypotenuse .toFixed(2)+ " cm.");

// 7

let a = +prompt("Enter value for a.");
console.log(a);

let y = a ** 2 + 10 / Math.sqrt(a ** 2 + 1);
console.log(y.toFixed(2));
alert("y value - " + y.toFixed(2) + ".");

