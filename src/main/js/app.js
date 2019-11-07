const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
	render() {
		return (
			<h1> REACT </h1>
		)
	}
}
ReactDOM.render(
		<App />,
		document.getElementById('react')
	)