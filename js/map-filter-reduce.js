

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
	let emails = users.map( users => users.email );
	console.log(emails);

	// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
	const experience = users.reduce((total, exp) => {
		return total + exp.yearsOfExperience;
	}, 0);
	console.log(experience);

	// Use .reduce to get the longest email from the list of users.



//---------------------practise follow along--------------------//

// 	// ~ Filter ~
// 	​
//  let myFavNums = [7, 222, 21, 13];
//
// ​
// 	//TODO: Create an array of your favorite numbers or an array of numbers - use filter to see ONLY odd or ONLY even numbers in a new array
// 	​
//  let citiesTraveled = [
// 	 {
// 		 name: "Houston",
// 		 state: "Texas"
// 	 },{
// 		 name: "New York City",
// 		 state: "New York"
// 	 },{
// 		 name: "Nashville",
// 		 state: "Tennessee"
// 	 } ,
// 	 {
// 		 name: "Dallas",
// 		 state: "Texas"
// 	 }
//  ]
// ​
// 	// ~ Map ~
// 	​
// 	//TODO: Create an array of objects in your environment representing cities you've traveled to or would be interested in traveling to within the United States.
// 	//TODO: Can you filter that array of objects in an interesting way like I did?
// 	​
//  let nums = [2,4,6,8]
// ​
// ​
// ​
// 	//TODO: Create an array of nums - use .map() to change your array of nums by returning an array where each num has been multiplied by 10
// 	​
//  let people = [
// 	 {firstName: "Kenny", lastName: "Howell" },
// 	 {firstName: "Lola", lastName: "Castillo"},
// 	 {firstName: "Laura", lastName: "Ruiz"}
//  ]
//
// ​
// 	// ~ Reduce ~
// 	​
//     let yearSales = [8, 10, 12, 13, 10, 6, 15, 10, 9, 16]
//
// 	//TODO: Create your own array of figures to "reduce" to a single value - sum up a series of numbers like I did, or you can feel free to take your practice in a different direction!
