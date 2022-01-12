import React from 'react';
import Globals from '../src/styles/Globals';

export const decorators = [
	(Story) => (
		<>
			<Globals />
			<Story />
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
