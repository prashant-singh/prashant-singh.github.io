import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../data/profile";
import '../css/footer.css';
import eventNames from '../data/eventNames';
import { getAnalytics, logEvent } from "firebase/analytics";

const iconStyle = {
	width: 30,
	height: 'auto'
};
const LogAnalyticsEvent = (eventName) => {
	const analytics = getAnalytics();

	console.log('Logging event' + eventName);
	logEvent(analytics, eventName);
};
function Footer() {
	return (
		<div className="container">
			<div className="row text-center justify-content-center border border-warning border-bottom-0 border-end-0 border-start-0 py-4">
				<div className="col-auto">
					<a href={profile.githubLink + profile.github} onClick={() => LogAnalyticsEvent(eventNames.github_footer_clicked)} className="btn footerButton">
						<FontAwesomeIcon icon={faGithub} style={iconStyle} />
					</a>
				</div>
				<div className="col-auto">
					<a href={profile.linkedinLink + profile.linkedin} onClick={() => LogAnalyticsEvent(eventNames.linkedin_footer_clicked)} className="btn footerButton">
						<FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
					</a>
				</div>
				<div className="col-auto">
					<a href={'mailto:' + profile.email} onClick={() => LogAnalyticsEvent(eventNames.mail_footer_clicked)} className="btn footerButton">
						<FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Footer;