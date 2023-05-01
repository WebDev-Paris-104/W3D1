const cat = {
	name: "Illiu",
	age: 1,
	address: {
		city: "Paris",
		zipCode: "75020",
	},
}
const dog = {
	name: "Izmir",
	age: 15,
	address: {
		city: "Paris",
		zipCode: "75020",
	},
}

const catName = cat.name
const catAge = cat.age

const { name, age, address } = cat
address.city = "New-York"

console.log("Cat after modifying the destructured variables: ", cat)
const { name: dogName, age: dogAge } = dog
console.log(name, age, address)
console.log(dogName, dogAge, address)
// const {
// 	address: { city },
// } = cat
// console.log(city)

const animals = ["giraffe", "rabbit", "snake"]

const [firstAnimal, , lastAnimal, , , , , , , , , , , , , , , , , sixteenth] =
	animals

console.log(firstAnimal, lastAnimal)
const numbers = [1, 5, 2, 7, 432, 87, 24]
const [firstNumber, secondNumber, ...allofTheRest] = numbers
console.log(firstNumber, secondNumber, allofTheRest)

function add(...numbers) {
	console.log(numbers)
	return numbers.reduce((acc, val) => acc + val, 0)
}

console.log(add(1, 2, 3))
console.log(add(9, 5))

const customer = {
	name: {
		firstName: "ivan",
		lastName: "zoro",
	},
	age: 32,
	preferences: [
		{
			tech: ["cameras", "smartwatches"],
			books: ["science fiction", "coding"],
		},
		{
			boardGame: ["terraforming mars", "Hadrian's wall"],
			books: ["Harry Potter", "Star Wars"],
		},
	],
}

const {
	name: { firstName, lastName: last },
	age: customerAge,
	preferences: [
		{
			books: [, mySecondBook],
		},
		{
			boardGame: [greatGame],
		},
	],
} = customer

console.log(mySecondBook)

const disneyCharacter = {
	name: "Timon",
	movies: [
		{
			name: "The Lion King",
			year: 1994,
		},
		{
			name: "The Lion King 2",
			year: 2005,
		},
		{
			name: "The Godfather",
			year: 2205,
		},
	],
	passions: ["Eating bugs", "Stealing Pumba's ideas"],
}
