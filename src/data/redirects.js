import profile from "./profile";

const redirects = [
	{
		page: '/linkedin',
		redirectTo: profile.linkedinLink + profile.linkedin
	},
	{
		page: '/github',
		redirectTo: profile.githubLink + profile.github
	},
	{
		page: '/resume',
		redirectTo: '/projects'
	}
];

export default redirects;