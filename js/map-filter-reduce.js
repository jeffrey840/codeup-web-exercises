const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let filtered = users.filter(user => user.languages.length > 2);
console.log(filtered);

// Use .map to create an array of strings where each element is a user's email address
let emails = users.map(users => users.email);
console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const experience = users.reduce((total, exp) => {
	return total + exp.yearsOfExperience;
}, 0);
console.log(experience);

// Use .reduce to get the longest email from the list of users.
let longestE = users.reduce((x,e) => x.email.length > e.email.length ? x : e).email;
console.log(longestE);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let nameStr = users.reduce((all, user) => {
	all.push(user.name);
	return all;
}, []).join(', ');

console.log(nameStr);
console.log(typeof (nameStr));


//---------------------practise follow along--------------------//
console.log("--------FOLLOW ALONG----------");
// 	// ~ Filter ~
// 	​
let myFavNums = [7, 222, 21, 13];

// let favEvenNum = myFavNums.filter(function(ele){
// 	return ele % 2 ===0;
// })

// or

let arrowExample = myFavNums.filter((e) => e % 2 === 0)

console.log(myFavNums);
console.log("only even");
// console.log(favEvenNum);
console.log(arrowExample);

// 	//TODO: Create an array of your favorite numbers or an array of numbers - use filter to see ONLY odd or ONLY even numbers in a new array
let JeffNum = [7, 4, 5, 6, 8, 8, 9];
let jeffFavNum = JeffNum.filter(function (ele) {
	return ele % 2 === 1;
})
console.log(jeffFavNum);


// 	​
let citiesTraveled = [
	{
		name: "Houston",
		state: "Texas"
	}, {
		name: "New York City",
		state: "New York"
	}, {
		name: "Nashville",
		state: "Tennessee"
	},
	{
		name: "Dallas",
		state: "Texas"
	}
]

let notTex = citiesTraveled.filter(function (ele) {
	return ele.state !== "Texas";
})

//shortHand

let isTex = citiesTraveled.filter((e) => e.state === "Texas")

console.log(citiesTraveled);
console.log("non texas cities");
console.log(notTex);
console.log("texas cities");
console.log(isTex);


// 	//TODO: Create an array of objects in your environment representing cities you've traveled to or would be interested in traveling to within the United States.
let favoriteCities = [
	{
		name: "Houston",
		state: "Texas"
	}, {
		name: "Los angeles",
		state: "california"
	}, {
		name: "camp hansen",
		state: "okinawa"
	},
	{
		name: "Dallas",
		state: "Texas"
	}
]

let nonUs = favoriteCities.filter(function (ele) {
	return ele.state === "okinawa";
})
console.log('no-us');
console.log(nonUs);

// 	//TODO: Can you filter that array of objects in an interesting way like I did?
// 	​
// ​
// 	// ~ Map ~
// 	​
let nums = [2, 4, 6, 8]

let numPlusOne = nums.map(function(element) {
	return element +1 ;
})

console.log(nums);
console.log("plus one");
console.log(numPlusOne);

// 	//TODO: Create an array of nums - use .map() to change your array of nums by returning an array where each num has been multiplied by 10

let numsTimeTen = nums.map((e) => e * 10)
console.log(numsTimeTen);

// 	​
let people = [
	{firstName: "Kenny", lastName: "Howell"},
	{firstName: "Lola", lastName: "Castillo"},
	{firstName: "Laura", lastName: "Ruiz"}
]

let namesConcat = people.map(function(element) {
	return element.firstName + "" + element.lastName
})

//or

// let namesConcat = people.map(function(e) => `${e.firstName} ${e.lastName}`)

console.log(namesConcat);

//
// ​
// 	// ~ Reduce ~
// 	​
let yearSales = [8, 10, 12, 13, 10, 6, 15, 10, 9, 16]

let salesToDate = yearSales.reduce(function( total,element ) {
	console.log(`the total is currently ${total} and my current element value is ${element}`);;
	return total + element
})

// 	//TODO: Create your own array of figures to "reduce" to a single value - sum up a series of numbers like I did, or you can feel free to take your practice in a different direction!
