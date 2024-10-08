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
			name: "Rebecca Buchanan",
			slug: "rebecca-buchanan",
			//job: "Job title",
			organization: "College of Law",
			role: "Executive Director",
			email: "rmbuchan@syr.edu",
			bio: false
		},
		{
			name: "Elyse Maugeri",
			slug: "elyse-maugeri",
			//job: "Job title",
			organization: "College of Law",
			role: "Deputy Director",
			email: "emmauger@syr.edu",
			bio: false
		},
		{
			name: "Auston (AJ) Marineau",
			slug: "auston-marineau",
			//job: "Job title",
			organization: "University of Michigan",
			role: "Chief Investigator",
			email: "auston@umich.edu",
			bio: false
		},
		{
			name: "Marjorie Romeyn-Sanabria",
			slug: "marjorie-romeyn-sanabria",
			//job: "Job title",
			organization: "College of Law",
			role: "Director of Executive Reports",
			email: "mromeyns@syr.edu",
			bio: false
		},
		{
			name: "Aaron Ernst",
			slug: "aaron-ernst",
			//job: "Job title",
			organization: "College of Law",
			role: "Director of Special Projects",
			email: "akernst@syr.edu",
			bio: false
		},
		/*{
			name: "Christopher Martz",
			slug: "christopher-martz",
			//job: "Job title",
			organization: "College of Law",
			role: "Executive Director",
			email: "cgmartz@syr.edu",
			bio: "Christopher G. Martz is a 3L at Syracuse University College of Law. Currently, he serves as the Executive Director of the Syrian Accountability Project, Managing Editor for the <em>Journal of Global Rights and Organizations</em>, and the ABA Representative to SUCOL. In addition, he served as the President of International Law Society at SUCOL and has been committed to SAP since the first week of his 1L year. Prior to joining law school, he served as an Arabic Linguist for the U.S. Navy and worked on counter-ISIS missions in Iraq and Syria, specializing in Iraqi dialects and culture."
		},*/
		/*{
			name: "Kanalya Arivalagan",
			slug: "kanalya-arivalagan",
			//job: "Job title",
			organization: "College of Law",
			role: "Deputy Director",
			email: "karivala@syr.edu",
			bio: "Kanalya Arivalagan is a 3L at Syracuse University College of Law. Currently, she serves as the Deputy Director of the Syrian Accountability Project, Lead News Editor for the <em>Journal of Global Rights and Organizations</em>, and Vice President of South Asian Law Student Association. In addition, she served as the Vice President of International Law Society at SUCOL and has been committed to SAP since the first week of her 1L year. She is currently an extern at the ICC Project, American Bar Association. She hopes to work in international criminal law in the future."
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
			bio: "Tina Al-khersan is at 3L at the University of Michigan Law School and is pursuing a career in international refugee law. Before law school, she worked with various nonprofit organizations providing services to refugee communities in the United States, Greece, and Turkey. While at Michigan Law, Tina has served as a student attorney for the Human Trafficking Clinic, as co-director of the International Refugee Assistance Project Michigan Chaper, and as a volunteer with the Syrian Accountability Project and Rohingya Human Rights Documentation Project. Tina spent her 1L summer interning with Project South and her 2L summer with Equal Rights Beyond Borders in Lesvos, Greece."
		},*/
	];
}
export function getPersonBySlug(slug) {
	const people = getPeople();
	const person = people.filter((p) => {
		return slug === p.slug
	});
	return person[0];
}

export function getPublications() {
	return [
		{
			title: "On the Brink of Famine",
			subtitle: "The Ukraine Conflict and Food Crisis in Syria",
			image: "on-the-brink-of-famine.jpg",
			slug: "on-the-brink-of-famine",
			file: "on-the-brink-of-famine-the-ukraine-conflict-and-food-crisis-in-syria-by-syrian-accountability-project-syracuse-university.pdf"
		},
		{
			title: "Russian War Crimes Against Ukraine",
			subtitle: "The Breach of International Humanitarian Law By The Russian Federation",
			image: "russian-war-crimes-against-ukraine.jpg",
			slug: "russian-war-crimes-against-ukraine",
			file: "russian-war-crimes-against-ukraine-the-global-accountability-network.pdf"
		},
		{
			title: "The 2022 Winter Olympics and Genocide",
			subtitle: "A History of Enabling Atrocities and the Path Forward",
			image: "uyghur-genocide-project.jpg",
			slug: "uyghur-genocide-project",
			file: "uyghur-genocide-project-syracuse-university.pdf"
		},
		{
			title: "The Yazidi Supreme Spiritual Council",
			subtitle: "It's failures to protect the Yazidi women's and children's rights",
			image: "aftermath-of-the-yazidi-genocide.jpg",
			slug: "aftermath-of-the-yazidi-genocide",
			file: "aftermath-of-the-yazidi-genocide-white-paper-syrian-accountability-project.pdf"
		},
		{
			title: "An Endless Tragedy",
			subtitle: "A Report on the Incidents Regarding Demonstrations in Gaza March 2018 to December 2018",
			image: "gaza-crimes.jpg",
			slug: "an-endless-tragedy",
			file: "an-endless-tragedy-by-syrian-accountability-project-syracuse-university.pdf"
		},
		{
			title: "Report on the Yazidi Genocide",
			subtitle: "Mapping Atrocity in Iraq and Syria / 30 Oct 2017",
			image: "yazidi-genocide.jpg",
			slug: "yazidi-genocide",
			file: "report-on-the-yazidi-genocide-syrian-accountability-project-syracuse-university.pdf"
		},
		{
			title: "Idlib Left Breathless",
			subtitle: "The Chemical Attack in Khan Sheikhoun / 4 April 2017",
			image: "idlib-left-breathless-by-jeff-passetti.jpg",
			slug: "idlib-left-breathless",
			file: "idlib-left-breathless-white-paper-by-syrian-accountability-project-syacuse-university.pdf"
		},
		{
			title: "Covered in dust, veiled by shadow",
			subtitle: "The Siege And Destruction Of Aleppo",
			image: "covered-in-dust-veiled-by-shadow-by-jeff-passetti.jpg",
			slug: "covered-in-dust",
			file: "covered-in-dust-veiled-by-shadow-by-syrian-accountability-project-syacuse-university.pdf"
		},
		{
			title: "Looking through the window darkly",
			subtitle: "A Snapshot Analysis of Rape in Syria / 2011–2015",
			image: "05.jpg",
			slug: "looking-through-the-window-darkly",
			file: "looking-through-the-window-darkly-a-snapshot-analysis-of-rape-in-syria-by-syrian-accountability-project-syracuse-university.pdf"
		},
	]
}
