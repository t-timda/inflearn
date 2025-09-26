//템프릿 리터럴 타입

type color = "red" | "black" | "white" ;

type animal = "dog" | "cat" | "chicken";

type colorAnimal = `${color}-${animal}`;
/*
type colorAnimal = 
"red-dog" | "red-cat" | "red-chicken" | 
"black-dog" | "black-cat" | "black-chicken" | 
"white-dog" | "white-cat" | "white-chicken"
*/