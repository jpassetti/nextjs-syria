export function getPeople() {
	return [
		{
			name: "David M. Crane",
			slug: "david-m-crane",
			job: "Retired Professor",
			organization: "College of Law",
			role: "Faculty Lead",
			email: null,
			bio: "Professor Crane was the Founding Chief Prosecutor of the International War Crimes Tribunal for West Africa called the Special Court for Sierra Leone. He is also a retired member of the Senior Executive Service of the United States, a drafter of the Department of Defense’s Law of War Program, and a retired professor at Syracuse University College of Law. He founded the Syrian Accountability Project and the <em>Journal of Global Rights and Organizations</em> and Impunity Watch News at Syracuse University College of Law. He is also is the Founder of the Global Accountability Project.  He recently published a book about his time in Sierra Leone titled Every Living Thing: Facing Down Terrorists, Warlords, and Thugs in West Africa—A Story of Justice.  He currently is Distinguished Scholar in Residence at the Syracuse University College of Law."
		},
		{
			name: "Christopher Martz",
			slug: "christopher-martz",
			//job: "Job title",
			organization: "College of Law",
			role: "Executive Director",
			email: "cgmartz@syr.edu",
			bio: "Christopher G. Martz is a 3L at Syracuse University College of Law. Currently, he serves as the Executive Director of the Syrian Accountability Project, Managing Editor for the <em>Journal of Global Rights and Organizations</em>, and the ABA Representative to SUCOL. In addition, he served as the President of International Law Society at SUCOL and has been committed to SAP since the first week of his 1L year. Prior to joining law school, he served as an Arabic Linguist for the U.S. Navy and worked on counter-ISIS missions in Iraq and Syria, specializing in Iraqi dialects and culture."
		},
		{
			name: "Kanalya Arivalagan",
			slug: "kanalya-arivalagan",
			//job: "Job title",
			organization: "College of Law",
			role: "Deputy Director",
			email: "karivala@syr.edu",
			bio: null
		},
		{
			name: "Rebecca Buchanan",
			slug: "rebecca-buchanan",
			//job: "Job title",
			organization: "College of Law",
			role: "Investigations Lead",
			email: "rmbuchan@syr.edu",
			bio: null
		},
		{
			//Intelligence Lead: Matthew McCartin (mmccarti@syr.edu)
			name: "Matthew McCartin",
			slug: "matthew-mccartin",
			//job: "Job title",
			organization: "College of Law",
			role: "Intelligence Lead",
			email: "mmccarti@syr.edu",
			bio: null
		},
		{
			//Special Projects Lead: Tina Al-khersan (alkherti@umich.edu)
			name: "Tina Al-khersan",
			slug: "tina-al-khersan",
			//job: "Job title",
			organization: "College of Law",
			role: "Special Projects Lead",
			email: "alkherti@umich.edu",
			bio: null
		},
	];
}
export function getPersonBySlug(slug) {
	const people = getPeople();
	const person = people.filter((p) => {
		return slug === p.slug
	});
	return person[0];
}
