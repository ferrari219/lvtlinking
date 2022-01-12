import PageTemplate from './PageTemplate';

export default {
	title: '01_Atom/PageTemplate',
	component: PageTemplate,
};

const Template = (args) => <PageTemplate {...args} />;

export const Overview = Template.bind({});
Overview.args = {
	header: 'header',
	children: 'main',
	footer: 'footer',
};
