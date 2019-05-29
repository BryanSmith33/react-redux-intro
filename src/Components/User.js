import React, { Component } from 'react'
// we use connect to allow access to this specific component to our redux state
import { connect } from 'react-redux'
// importing our custom getData function from our userReducer to fire off our actions
import { getData } from '../redux/userReducer'

class User extends Component {
	componentDidMount() {
		// firing the getData action create as soon as our component is mounted to the DOM
		this.props.getData()
	}

	render() {
		return (
			<div>
				<h1>User</h1>
				{/* below we are using what is known as a fragment which react will use as the parent container. it will render nothing */}
				<>
				{/* checking to see if we ARE NOT lodading and if name exists on user from redux state */}
					{!this.props.loading && this.props.user.name ? (
						<div>
							<h3>
								{this.props.user.name.title} {this.props.user.name.first} {this.props.user.name.last}
							</h3>
							<img
								src={this.props.user.picture.large}
								alt={this.props.user.name.first}
							/>
						</div>
					) : (
						<div>Loading...</div>
					)}
				</>
			</div>
		)
	}
}

// mapStateToProps does just that in that it will take our redux state we return and apply it to props on the User component.
// We called it reduxState but we can call it whatever we want below
function mapStateToProps(reduxState) {
	return reduxState
}

// rather than exporting our component, we export a connect method we imported from react-redux
// connect will invoke itself with our mapStateToProps function from above and then the getData method we imported
// It will then apply what is returned to our User component
export default connect(
	mapStateToProps,
	{ getData }
)(User)
