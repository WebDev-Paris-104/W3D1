import "./App.css"

const users = [
	{
		name: "Elena",
		picture: "https://randomuser.me/api/portraits/women/5.jpg",
		activities: ["Skate", "Code"],
	},
	{
		name: "Tom",
		picture: "https://randomuser.me/api/portraits/men/5.jpg",
		activities: ["Rock climbing", "Cook"],
	},
	{
		name: "June",
		picture: "https://randomuser.me/api/portraits/women/10.jpg",
		activities: ["Paint", "Marathon"],
	},
	{
		name: "John",
		picture: "https://randomuser.me/api/portraits/men/10.jpg",
		activities: ["Running", "Watching movies"],
	},
]

function Avatar(props) {
	console.log(props.size)
	return (
		<div className={`Avatar ${props.size}`}>
			<img src={props.pictureUrl} alt={`Picture of ${props.name}`} />
		</div>
	)
}

function Card({ picture, name, activities }) {
	const size = Math.random() > 0.5 ? "big" : "small"
	const randomColor = getRandomColor()
	return (
		<div
			className="card"
			style={{
				backgroundColor: randomColor,
				borderRadius: "1rem",
			}}>
			{size === "big" ? (
				<Avatar pictureUrl={picture} name={name} size={size} />
			) : (
				""
			)}

			<h2>{name}</h2>
			<p>
				{name}: likes to {activities[0]} and {activities[1]}
			</p>
		</div>
	)
}
// function Card(props) {
// 	console.log(props)
// 	const { picture, name, activities } = props
// 	return (
// 		<div className="card">
// 			<div>
// 				<img src={picture} alt={`Picture of ${name}`} />
// 			</div>
// 			<h2>{name}</h2>
// 			<p>
// 				{name}: likes to {activities[0]} and {activities[1]}
// 			</p>
// 		</div>
// 	)
// }
// function Card(props) {
// 	console.log(props)
// 	return (
// 		<div className="card">
// 			<div>
// 				<img src={props.picture} alt={`Picture of ${props.name}`} />
// 			</div>
// 			<h2>{props.name}</h2>
// 			<p>
// 				{props.name}: likes to {props.activities[0]} and {props.activities[1]}
// 			</p>
// 		</div>
// 	)
// }

function App() {
	const [elena, tom, june, john] = users

	const myName = "Florian"

	const itIsMonday = false
	// let result
	// if (itIsMonday) {
	// 	result = "It is monday"
	// } else {
	// 	result = "It is not monday"
	// }

	return (
		<main>
			{/* {Card(elena)} */}
			<Card
				name={elena.name}
				picture={elena.picture}
				activities={elena.activities}
			/>
			<Card name={tom.name} picture={tom.picture} activities={tom.activities} />
			<Card
				name={june.name}
				picture={june.picture}
				activities={june.activities}
			/>
			<Card
				name={john.name}
				picture={john.picture}
				activities={john.activities}
			/>
			<Card
				name="jean"
				picture="https://randomuser.me/api/portraits/men/42.jpg"
				activities={["Code", "Cailloux"]}
			/>

			<div>
				<p>{myName}</p>
				<h3>What can we not display?</h3>
				<ul>
					<li>{false}</li>
					{/* <li>{{ name: "Bob" }}</li> */}
					<li>{[<span>bob</span>, <span>john</span>, <span>alice</span>]}</li>
					<li>{0}</li>
					<li>{NaN}</li>
				</ul>

				<p>Variables from a if / else statement</p>
				{/* <p>{result}</p> */}
				<p>Returned value from a ternary</p>

				<p>{itIsMonday ? "It is monday" : "It is not monday"}</p>
			</div>

			{/* <Card />
			<Card />
			<Card /> */}
			{/* <Card />
      <Card />
      <Card />
      <Card /> */}

			{/* <div className="card">
				<div>
					<img src={elena.picture} alt={`Picture of ${elena.name}`} />
				</div>
				<h2>{elena.name}</h2>
				<p>
					{elena.name} likes to {elena.activites[0]} and {elena.activites[1]}
				</p>
			</div>
			<div className="card">
				<div>
					<img src={tom.picture} alt={`Picture of ${tom.name}`} />
				</div>
				<h2>{tom.name}</h2>
				<p>
					{tom.name} likes to {tom.activites[0]} and {tom.activites[1]}
				</p>
			</div>
			<div className="card">
				<div>
					<img src={june.picture} alt={`Picture of ${june.name}`} />
				</div>
				<h2>{june.name}</h2>
				<p>
					{june.name} likes to {june.activites[0]} and {june.activites[1]}
				</p>
			</div>
			<div className="card">
				<div>
					<img src={john.picture} alt={`Picture of ${john.name}`} />
				</div>
				<h2>{john.name}</h2>
				<p>
					{john.name} likes to {john.activites[0]} and {john.activites[1]}
				</p>
			</div> */}
		</main>
	)
}

export default App

// typeof {}
// 5 + 3
const size = Math.random() > 0.5 ? "big" : "small"
// const myVar = if (true) {
//   'boop'
// }
// const result = aFunction()
// const x  = 5 + 3

// const aVariabl = for()

function getRandomColor() {
	return `hsl(${Math.random() * 360}, 50%, 40%)`
}
