import Gnb from './Gnb';

export default {
	title: '02_Molecules/Gnb',
	component: Gnb,
};

const Template = (args) => <Gnb {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
