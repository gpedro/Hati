import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { profileInfo } from '../../../actions/AccountActions'
import { getFormData } from '../../../helpers/form'
import Container from '../../Layouts/Container'
import FormGroup from '../../../components/FormGroup'

// import Error from '../../../helpers/error'

const ProfileInfo = ({ account, profileInfo }) => {
	React.useEffect(() => {
		profileInfo()
	}, [profileInfo])

	const submitHandler = (event) => {
		event.preventDefault()
		const data = getFormData(event)
		profileInfo(data)
	}

	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-default">
					<div className="panel-heading">Update Profile Information</div>
					<div className="panel-body">
						<form onSubmit={submitHandler}>
							<FormGroup
								label="Real Name"
								name="rlname"
								type="text"
								data={account}
							/>
							<FormGroup
								label="Location"
								name="location"
								type="text"
								data={account}
							/>

							<button type="submit" className="btn btn-primary">
								Update Profile
							</button>
							<Link to="/account/characters">
								<button type="button" className="btn btn-inverse">
									Return
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { profileInfo })(ProfileInfo)
