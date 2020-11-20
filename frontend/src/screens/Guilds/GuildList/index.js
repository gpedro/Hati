import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { guildShow } from '../../../actions/GuildActions'

import Container from '../../Layouts/Container'
import GuildLogoDefault from '../../../assets/img/guild_logo_default.png'

import './styles.css'

const GuildList = ({ guildShow }) => {
	const { id } = useParams()

	React.useEffect(() => {
		guildShow()
	}, [guildShow])

	let guildName = []
	for (let i = 0; i < 40; i++) {
		guildName.push(
			<div key={i} className="text">
				Sa Ownage
			</div>
		)
	}

	return (
		<Container>
			<div className="panel panel-default">
				<div className="panel-heading">Overview</div>
				<div className="panel-body">
					<div className="parent">
						<div className="div1 ml-4">
							<div className="d-inline-flex flex-column justify-content-center mr-3">
								<span className="fw-300 fs-xs d-block opacity-50">
									<img
										className="profile-image-lg"
										src={GuildLogoDefault}
										alt="GuildLogo"
									/>
								</span>
								<span className="fw-500 fs-xl d-block color-primary-500">
									4 Members
								</span>
							</div>
						</div>
						<div className="div2 ml-4">
							<h2 className="text-primary">Guild Description:</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reiciendis nisi labore, necessitatibus nobis a ab magni maxime
								exercitationem harum numquam aut officiis est deleniti
								architecto optio tempore ducimus libero! Dicta.
							</p>
						</div>
						<div className="div3">
							<span className="display-4 d-block l-h-n m-0 fw-500 text-primary">
								<div id="ui">{guildName}</div>
							</span>
						</div>
					</div>

					<div className="panel-body">
						<br />
						<ul className="nav nav-pills" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									data-toggle="tab"
									href="#members"
								>
									<i className="fal fa-user mr-1"></i>Members
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#wars">
									<i className="fal fa-chart-bar mr-1"></i>Active Wars
								</a>
							</li>
						</ul>

						<hr />
						<div className="tab-content">
							<div className="tab-pane active" id="members">
								<table className="table table-hover table-striped">
									<thead>
										<tr>
											<th className="col-md-2">Rank</th>
											<th className="col-md-1 hidden-xs" />
											<th className="col-md-3">Player</th>
											<th className="col-md-3 hidden-xs">
												Vocation &amp; Level
											</th>
											<th className="col-md-1 hidden-xs">Status</th>
											<th className="col-md-1" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>the Leader</td>
											<td className="hidden-xs">
												<div
													className="player-outfit"
													style={{
														backgroundImage:
															'url("/outfit/1123_97_0_114_113_3.png")',
													}}
													align="right"
												/>
											</td>
											<td>
												<a
													className="notranslate"
													href="/community/player/Stone Cold"
												>
													Stone Cold
												</a>
											</td>
											<td className="hidden-xs">Elite Knight (Level 1237)</td>
											<td className="hidden-xs" align="center">
												<div className="d-inline-block align-middle status status-success" />
											</td>

											<td align="right"></td>
										</tr>
										<tr>
											<td>a Member</td>
											<td className="hidden-xs">
												<div
													className="player-outfit"
													style={{
														backgroundImage:
															'url("/outfit/966_85_114_0_0_0.png")',
													}}
													align="right"
												/>
											</td>
											<td>
												<a
													className="notranslate"
													href="/community/player/Jaimico"
												>
													Jaimico
												</a>
											</td>
											<td className="hidden-xs">Adept Sorcerer (Level 667)</td>
											<td className="hidden-xs" align="center">
												<div className="d-inline-block align-middle status status-success" />
											</td>
											<td align="right"></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane" id="wars">
								<br />
								Cartel is not currently participating in any active war.
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		players: state.player.player,
	}
}

export default connect(mapStateToProps, { guildShow })(GuildList)
