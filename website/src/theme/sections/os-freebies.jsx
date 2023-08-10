import React from 'react';
import { CtaImageButton } from '@actsis/docusaurus-theme';

export const EsOsFreebies = (props) => {
	return (
		<CtaImageButton
			{...props}
			title='Encuentra más información acerca de nosotros.'
			buttonLabel='Nuestros productos'
			buttonUrl='https://actsis.com/#productos'
			imageUrl='/img/homepage/actsis-productos.svg'
		/>
	);
};
