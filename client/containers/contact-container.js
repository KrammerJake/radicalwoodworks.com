import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ContactForm from 'client/components/contact/contact-form';

// Actions
import { sendContact } from 'client/actions/contact-actions';

class ContactContainer extends Component {

	constructor(props) {
		super(props);
	}

	handleSendContact = (contact) => {
		this.props.sendContact(contact);
	}

	render = () => {
		return (
			<div className="container">
				<div className="col-xs-12">
					<div className="text-center">
						<h3>Contact Us Radical Woodworks</h3>
					</div>
				</div>
				<ContactForm
					handleSendContact={this.handleSendContact}
				/>
			</div>
		);
	};
}

const mapStateToProps = (state) => state;

const mapActionsToProps = {
	sendContact,
};

export default connect(
	mapStateToProps,
	mapActionsToProps,
)(ContactContainer);
