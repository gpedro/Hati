import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import avatarImg from '../../../assets/img/avatar.png'
import coverCard from '../../../assets/img/card-backgrounds/cover-2-lg.png'

const Menu = ({ account }) => {
	return (
		<aside className="page-sidebar ">
			<nav id="js-primary-nav" className="primary-nav" role="navigation">
				<div className="info-card">
					<img
						src={avatarImg}
						className="profile-image rounded-circle"
						alt="Logo"
					/>
					<div className="info-card-text">
						<span className="d-flex align-items-center text-white">
							<span className="text-truncate text-truncate-sm d-inline-block">
								<h1>Hati</h1>
							</span>
						</span>
						<span className="d-inline-block text-truncate text-truncate-sm">
							AAC
						</span>
					</div>
					<img src={coverCard} className="cover" alt="cover" />
				</div>
				<ul id="js-nav-menu" className="nav-menu ">
					<li>
						<Link to="/">
							<i className="fal fa-globe"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								News
							</span>
						</Link>
					</li>

					<li>
						<Link to="/sign-up">
							<i className="fa fa-user-plus"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Register
							</span>
						</Link>
					</li>

					<li>
						<Link to="/sign-in">
							<i className="fal fa-sign-in" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								{account ? 'My Account' : 'Login'}
							</span>
						</Link>
					</li>

					<li>
						<Link to="/download">
							<i className="fal fa-cloud-download" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Download
							</span>
						</Link>
					</li>
					<li className="nav-title">Community</li>
					<li>
						<Link to="/online">
							<i className="fal fa-chart-pie"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Online List
							</span>
						</Link>
					</li>
					<li>
						<Link to="">
							<i className="fal fa-bolt" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Activity
							</span>
						</Link>
					</li>
					<li>
						<Link to="/highscores">
							<i className="fal fa-trophy" aria-hidden="true"></i>
							<span className="nav-link-text" data-i18n="nav.form_stuff">
								Highscores
							</span>
						</Link>
					</li>
					<li>
						<Link to="/forum">
							<i className="fal fa-comments" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Forum
							</span>
						</Link>
					</li>
					<li className="nav-title">Guilds</li>
					<li>
						<Link to="/guilds">
							<i className="fal fa-shield-alt"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Guild List
							</span>
						</Link>
					</li>
					<li>
						<Link to="/wars">
							<i className="fal fa-fire" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Guild War
							</span>
						</Link>
					</li>
					<li className="nav-title">Market</li>
					<li>
						<Link to="/shop">
							<i className="fal fa-shopping-cart" aria-hidden="true"></i>
							<span
								className="nav-link-text"
								data-i18n="nav.application_intel_analytics_dashboard"
							>
								Shop
							</span>
						</Link>
					</li>
				</ul>
				<div className="filter-message js-filter-message bg-success-600"></div>
			</nav>
		</aside>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps)(Menu)
