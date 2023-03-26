import paramour from './assets/home/desktop/image-hero-paramour.jpg';
import federal from './assets/home/desktop/image-hero-federal.jpg';
import seraph from './assets/home/desktop/image-hero-seraph.jpg';
import trinity from './assets/home/desktop/image-hero-trinity.jpg';
import seraphMobile from './assets/portfolio/mobile/image-seraph.jpg';
import seraphTablet from './assets/portfolio/tablet/image-seraph.jpg';
import seraphDesktop from './assets/portfolio/desktop/image-seraph.jpg';

import eeboxMobile from './assets/portfolio/mobile/image-eebox.jpg';
import eeboxTablet from './assets/portfolio/tablet/image-eebox.jpg';
import eeboxDesktop from './assets/portfolio/desktop/image-eebox.jpg';

import federalMobile from './assets/portfolio/mobile/image-federal.jpg';
import federalTablet from './assets/portfolio/tablet/image-federal.jpg';
import federalDesktop from './assets/portfolio/desktop/image-federal.jpg';

import delSolMobile from './assets/portfolio/mobile/image-del-sol.jpg';
import delSolTablet from './assets/portfolio/tablet/image-del-sol.jpg';
import delSolDesktop from './assets/portfolio/desktop/image-del-sol.jpg';

import prototypeMobile from './assets/portfolio/mobile/image-prototype.jpg';
import prototypeTablet from './assets/portfolio/tablet/image-prototype.jpg';
import prototypeDesktop from './assets/portfolio/desktop/image-prototype.jpg';

import tower228bMobile from './assets/portfolio/mobile/image-228b.jpg';
import tower228bTablet from './assets/portfolio/tablet/image-228b.jpg';
import tower228bDesktop from './assets/portfolio/desktop/image-228b.jpg';

import edelweissMobile from './assets/portfolio/mobile/image-edelweiss.jpg';
import edelweissTablet from './assets/portfolio/tablet/image-edelweiss.jpg';
import edelweissDesktop from './assets/portfolio/desktop/image-edelweiss.jpg';

import netcryMobile from './assets/portfolio/mobile/image-netcry.jpg';
import netcryTablet from './assets/portfolio/tablet/image-netcry.jpg';
import netcryDesktop from './assets/portfolio/desktop/image-netcry.jpg';

import hypersMobile from './assets/portfolio/mobile/image-hypers.jpg';
import hypersTablet from './assets/portfolio/tablet/image-hypers.jpg';
import hypersDesktop from './assets/portfolio/desktop/image-hypers.jpg';

import sxivMobile from './assets/portfolio/mobile/image-sxiv.jpg';
import sxivTablet from './assets/portfolio/tablet/image-sxiv.jpg';
import sxivDesktop from './assets/portfolio/desktop/image-sxiv.jpg';

import trinityMobile from './assets/portfolio/mobile/image-trinity.jpg';
import trinityTablet from './assets/portfolio/tablet/image-trinity.jpg';
import trinityDesktop from './assets/portfolio/desktop/image-trinity.jpg';

import paramourMobile from './assets/portfolio/mobile/image-paramour.jpg';
import paramourTablet from './assets/portfolio/tablet/image-paramour.jpg';
import paramourDesktop from './assets/portfolio/desktop/image-paramour.jpg';
const data = {
	home: [
		{
			id: 1,
			image: paramour,
			name: 'Project Paramour',
			desc: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
		},
		{
			id: 2,
			image: federal,
			name: 'Federal II Tower',
			desc: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
		},
		{
			id: 3,
			image: seraph,
			name: 'Seraph Station',
			desc: 'The Seraph Station project challenged us to design a unique station that would transport people through time.The result is a fresh and futuristic model inspired by space stations.',
		},
		{
			id: 4,
			image: trinity,
			name: 'Trinity Bank Tower',
			desc: 'Trinity Bank challenged us to make a concept for a 8 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
		},
	],

	portfolio: [
		{
			id: 1,
			imageSources: {
				mobile: seraphMobile,
				tablet: seraphTablet,
				desktop: seraphDesktop,
			},
			title: 'Seraph Station',
			date: 'September 2019',
		},

		{
			id: 2,
			imageSources: {
				mobile: eeboxMobile,
				tablet: eeboxTablet,
				desktop: eeboxDesktop,
			},
			title: 'Eebox building',
			date: 'August 2017',
		},

		{
			id: 3,
			imageSources: {
				mobile: federalMobile,
				tablet: federalTablet,
				desktop: federalDesktop,
			},
			title: 'Federal II Tower',
			date: 'March 2017',
		},

		{
			id: 4,
			imageSources: {
				mobile: delSolMobile,
				tablet: delSolTablet,
				desktop: delSolDesktop,
			},
			title: 'Project Del Sol',
			date: 'January 2016',
		},

		{
			id: 5,
			imageSources: {
				mobile: prototypeMobile,
				tablet: prototypeTablet,
				desktop: prototypeDesktop,
			},
			title: 'Le Prototype',
			date: 'October 2015',
		},

		{
			id: 6,
			imageSources: {
				mobile: tower228bMobile,
				tablet: tower228bTablet,
				desktop: tower228bDesktop,
			},
			title: '228B Tower',
			date: 'April 2015',
		},

		{
			id: 7,
			imageSources: {
				mobile: edelweissMobile,
				tablet: edelweissTablet,
				desktop: edelweissDesktop,
			},
			title: 'Grand Edelweiss',
			date: 'December 2013',
		},

		{
			id: 8,
			imageSources: {
				mobile: netcryMobile,
				tablet: netcryTablet,
				desktop: netcryDesktop,
			},
			title: 'Netcry Tower',
			date: 'August 2012',
		},

		{
			id: 9,
			imageSources: {
				mobile: hypersMobile,
				tablet: hypersTablet,
				desktop: hypersDesktop,
			},
			title: 'Hypers',
			date: 'January 2012',
		},

		{
			id: 10,
			imageSources: {
				mobile: sxivMobile,
				tablet: sxivTablet,
				desktop: sxivDesktop,
			},
			title: 'SXIV Tower',
			date: 'March 2011',
		},

		{
			id: 11,
			imageSources: {
				mobile: trinityMobile,
				tablet: trinityTablet,
				desktop: trinityDesktop,
			},
			title: 'Trinty Bank Tower',
			date: 'September 2010',
		},

		{
			id: 12,
			imageSources: {
				mobile: paramourMobile,
				tablet: paramourTablet,
				desktop: paramourDesktop,
			},
			title: 'Project Paramour',
			date: 'February 2008',
		},
	],
};

export default data
