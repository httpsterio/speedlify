module.exports = {
	description: "Personal sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT,
	options: {
		frequency: 10, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://httpster.io/",
		"https://bram.is/",
		"https://gerencialeite.com.br/",
		"https://lamplightdev.com/",
		"https://www.industrialempathy.com/"
	]
};
