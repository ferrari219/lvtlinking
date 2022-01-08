import SearchForm from './SearchForm';

export default {
  title: '01_Atom/SearchForm',
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
