import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as ActsisFooter } from '@actsis/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<ActsisFooter footer={footer} />
	);
}

export default React.memo(Footer);
