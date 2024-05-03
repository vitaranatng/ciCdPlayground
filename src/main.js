import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Aaron Vitarana',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Ehm, what?'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins, Gitlab CI/CD',
		// What do you want to learn in this workshop? 
		expectations: [
			'Deeper understanding about CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'football',
			'bouldering'
		]
	}
});
