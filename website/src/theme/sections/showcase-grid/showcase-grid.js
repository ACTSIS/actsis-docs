import React, { Fragment, useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ShowcaseCard, CtaImageButton } from '@actsis/docusaurus-theme';
import { EsOpenSource } from '../os-projects';

const shuffleArray = (array) => array.map(value => ({ value, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value);

export default function ShowcaseGrid(props) {
	const {
		privateType,
	} = props;

	const headingTitle = privateType ? 'Actsis showcase' : 'Links';
	const headingSubtitle = privateType ? "Lista de servicios de terceros." : 'Lista de servicios de terceros.';
	const ctaTitle = privateType ? "Mantengámonos en contacto" : (<span>Tienes alguna <br />idea?</span>);
	const ctaSubtitle = privateType ? 'Contáctanos' : 'Abre un issue en GitHub';
	const ctaUrl = privateType ? 'https://www.actsis.com/#contact' : 'https://github.com/actsis/actsis-docs/issues';

	const privateData = [
		{
			image: useBaseUrl('img/showcase/grafana.jpg'),
			label: 'Artemis',
			desc: 'Inspirado en la diosa griega de la luna y la caza, representa el aspecto de monitoreo y prueba de rendimiento de los sistemas, al mismo tiempo que refleja la idea de guiar y administrar los procesos de la aplicación.',
			link: 'https://grafana.actsis.com/',
		},
	];

	const publicData = [
		{
			image: useBaseUrl('img/showcase/grafana.jpg'),
			label: 'Artemis',
			desc: 'Inspirado en la diosa griega de la luna y la caza, representa el aspecto de monitoreo y prueba de rendimiento de los sistemas, al mismo tiempo que refleja la idea de guiar y administrar los procesos de la aplicación.',
			link: 'https://grafana.actsis.com/',
		},
	];

	const itemsData = privateType ? [...publicData, ...privateData] : publicData;

	// https://reactjs.org/docs/react-dom.html#hydrate
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true)
	}, []);

	const items = shuffleArray(itemsData).map((item, index) => {
		const {
			image,
			label,
			link,
			desc,
		} = item;

		return (
			<ShowcaseCard
				key={index}
				url={link}
				imageUrl={image}
				imageAlt={label}
				title={label}
				description={desc}
				newTab={true}
			/>
		)
	});

	return (
		// key={isClient ? 1 : 2} will trigger a rerender of the whole subtree and the images will be aligned with text
		<Fragment key={isClient ? 1 : 2}>
			<h1 className='es-big-title es-h-center'>{headingTitle}</h1>
			<p className='es-big-subtitle es-text-center es-h-center'>{headingSubtitle}</p>

			<div className='es-showcase-grid'>
				{items}
			</div>

			<CtaImageButton
				title={ctaTitle}
				buttonLabel={ctaSubtitle}
				buttonUrl={ctaUrl}
				imageUrl={useBaseUrl(`img/showcase/cta.svg`)}
			/>
		</Fragment>
	);
}
