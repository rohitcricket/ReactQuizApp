import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuestionList from "./quiz/QuestionList.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: [
				{
					id: 1,
					text: "What is your name?",
					choices: [
						{
							id: "a",
							text: "John"
						},
						{
							id: "b",
							text: "Dagny"
						},
						{
							id: "c",
							text: "Francisco"
						}
					],
					correct: "a"
				},
				{
					id: 2,
					text: "What is your best friend?",
					choices: [
						{
							id: "a",
							text: "John"
						},
						{
							id: "b",
							text: "Dagny"
						},
						{
							id: "c",
							text: "Francisco"
						}
					],
					correct: "c"
				},
				{
					id: 3,
					text: "Where are you from?",
					choices: [
						{
							id: "a",
							text: "Ouray"
						},
						{
							id: "b",
							text: "New York"
						},
						{
							id: "c",
							text: "Atlantis"
						}
					],
					correct: "c"
				},
				{
					id: 4,
					text: "Where did you study?",
					choices: [
						{
							id: "a",
							text: "MIT"
						},
						{
							id: "b",
							text: "Stanton Institute"
						},
						{
							id: "c",
							text: "Stanford"
						}
					],
					correct: "b"
				}
			],
			score: 0,
			current: 1
		};
	}
	render() {
		return (
			<div>
				<QuestionList {...this.state} />
			</div>
		);
	}
}

export default App;
