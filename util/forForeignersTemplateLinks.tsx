export const travelInfoLinks = [
	{
		id: 1,
		title: 'Visiting Djibouti',
		lien: {
			pathname: 'https://guide.visitdjibouti.dj/',
			query: { template: '#' },
		},
        target:'_blank'
	},
	{
		id: 2,
		title: 'Investing in Djibouti',
		lien: {
			pathname: '/forForeigners/investInDjib',
			query: { template: '#' },
		},
	},

    
    {
		id: 3,
		title: 'Working in Djibouti',
		lien: {
			pathname: '/forForeigners/[template]',
			query: { template: 'workingInDjibouti' },
		},
	},
];

export const helpInfoLinks = [
	{
		id: 4,
		title: 'Entrance / Stay',
		lien: {
			pathname: '/forForeigners/[template]',
			query: { template: 'entreEtSejour' },
		},
    
	},
	{
		id: 5,
		title: 'About Coronavirus',
		lien: {
			pathname: '/forForeigners/[template]',
			query: { template: 'aboutCovid' },
		},
	},

    {
		id: 6,
		title: ' Visa online application',
		lien: {
			pathname: 'https://www.visa-office.fr/visas/visa-djibouti/',
			query: { template: '' },
		},
        target:'_blank'
	},	
];

//