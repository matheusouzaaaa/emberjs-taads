import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	layout: DS.attr(),
	responsivo: DS.attr(),
	internas: DS.attr(),
	entregue: DS.attr(),
});
