/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
//const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	//tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
	// But you can create a sidebar manually
	/*
	tutorialSidebar: [
	  'intro',
	  'hello',
	  {
		type: 'category',
		label: 'Tutorial',
		items: ['tutorial-basics/create-a-document'],
	  },
	],
	 */
  //};
  
//module.exports = sidebars;

module.exports = {
	docs: {
		'Empezando': [
			'Artemis',
		],
		'Conceptos básicos': [
			'basics/grafana-concepts',
			/* {
				'type': 'category',
				'label': 'Backend',
				'items': [
					'basics/backend',
					'basics/namespaces',
					'basics/extending-classes',
					'basics/autowiring',
					'basics/example-class',
					'basics/manifest',
					{
						'type': 'category',
						'label': 'Rest',
						'items': [
							'basics/rest',
							'basics/rest-field',
							'basics/rest-route',
						]
					},
				]
			}, */
		],
	},
};
