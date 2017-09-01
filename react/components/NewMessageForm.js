import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			recipient: '',
			subject: '',
			body: '',
		}

		this.handleBodyChange = this.handleBodyChange.bind(this)
		this.handleRecipientChange = this.handleRecipientChange.bind(this)
		this.handleSubjectChange = this.handleSubjectChange.bind(this)
	}

	handleRecipientChange( evt ) {
	this.state.recipient = evt.target.value
		console.log(this.state, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
	}

	handleSubjectChange( evt ) {
		this.state.subject = evt.target.value
	}

	handleBodyChange( evt ) {
		this.state.body = evt.target.value
	}


	render() {
		const onSend = this.props.onSend
		const state = this.state
		return (
			<form onSubmit={onSend(state)}>
				<div className="form-group">
					<label>To:</label>
					<input
type="text" id="recipient-field" name="recipient" value={this.state.recipient}
					       onChange={this.handleRecipientChange.bind(this)} />
				</div>
				<div className="form-group">
					<label>Subject:</label>
					<input
type="text" id="subject-field" name="subject"  value={this.state.subject}
					       onChange={this.handleSubjectChange.bind(this)} />
				</div>
				<div className="form-group">
					<label>Body:</label>
					<textarea
id="body-field" name="body"  value={this.state.body}
					          onChange={this.handleBodyChange.bind(this)} />
				</div>
				<button type="submit">Send Message</button>
			</form>
		);
	}

}
