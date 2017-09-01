import React, {Component} from 'react';


export default class Message extends Component {
	constructor (props) {
	super(props)
	}

	render() {

		const from = this.props.fullMessage.from.email
		const to = this.props.fullMessage.to.email
		const subject = this.props.fullMessage.subject
		const body = this.props.fullMessage.body
		const id = this.props.fullMessage.id

		const markAsRead = this.props.markAsRead

		return (
			<div key={id} onClick={markAsRead}>
				<h1>From: <span>{from}</span></h1>
				<h2>To: <span>{to}</span></h2>
				<h3>Subject: <span>{subject}</span></h3>
				<p>{body}</p>
			</div>
		)

	}

}
