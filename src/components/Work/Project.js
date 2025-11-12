import React from 'react';
import ReactMarkdown from 'react-markdown';
//import { constructMarkdown } from 'outlining';
import ImageZoom from 'react-medium-image-zoom';

import Nav from '../Nav/Nav';

/* eslint-disable */
import ofr from '!raw-loader!../../projects/ofr.md';
import nestedDnd from '!raw-loader!../../projects/nested-dnd.md';
import uxPractice from '!raw-loader!../../projects/ux-practice.md';
import fit from '!raw-loader!../../projects/fit.md';
import sfsweb from '!raw-loader!../../projects/sfsweb.md';
import faneverything from '!raw-loader!../../projects/faneverything.md';

const PROJECTS = [
	{
		category: 'Leadership',
		name: 'UX Practice',
		imgFull: 'uxcrgt.png',
		imgThumb: 'uxcrgt-thumb.png',
		url: 'ux-practice',
		content: uxPractice,
		tags: []
	},
	{
		category: 'Case Study',
		name: 'Office of Financial Research',
		content: ofr,
		url: 'ofr',
		imgFull: 'cover.png',
		imgThumb: 'cover.png',
		tags: ['Case Study', 'UX Research', 'UI Design']
	},
	{
		category: 'Personal Project',
		name: 'Nested D&D',
		url: 'nested-dnd',
		content: nestedDnd,
		tags: [],
		imgFull: 'screenshot.png',
		imgThumb: 'screenshot_thumb.png',
	},
	{
		category: 'UX',
		name: 'Facilities Inspection Tool',
		imgFull: 'fit.jpeg',
		imgThumb: 'fit-thumb.jpeg',
		url: 'fit',
		content: fit,
		tags: []
	},
	{
		category: 'UX Design',
		name: 'SFSWeb',
		imgFull: 'sfsweb.png',
		imgThumb: 'sfsweb-thumb.png',
		url: 'sfsweb',
		content: sfsweb,
		tags: []
	},
	{
		category: 'Case Study',
		name: 'FanEverything',
		imgFull: 'cover.png',
		imgThumb: 'cover-thumb.png',
		url: 'faneverything',
		content: faneverything,
		tags: ["Case Study","UX Research", "Wireframes"]
	}
]

function toggleNavbar(show){
	var mainNav = document.getElementById('mainNav');

	if(show) mainNav.classList.remove('hide');
	else mainNav.classList.add('hide');
}

const Image = (props)=>(
	<span>
		<ImageZoom onZoom={()=>toggleNavbar(false)} onUnzoom={()=>toggleNavbar(true)} image={props} />
		<span className="caption">{props.alt}</span>
	</span>
)

const Project = ({ match: { params: { project : projectId = ""} }}) => {

	const project = PROJECTS.find(p=>p.url===projectId);
	const content = (project) ? <ReactMarkdown escapeHtml={false} source={project.content} renderers={{image: Image}} /> : null;
	
	// TODO: Nice to have
	//const outline = constructMarkdown(project.content); 
	//console.log(outline);

	return (
		<div>
			<Nav isProject={true} />
			<div className="container project">
				<h1>{project.name}</h1>
				<p className="subtitle">{project.tags.join(' | ')}</p>
				<Image src={`/img/${project.url}/${project.imgFull}`} />
				{content}
			</div>
		</div>
	)
}

export default Project;
export { PROJECTS }