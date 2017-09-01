import DS from 'ember-data';

export default DS.Model.extend({
  two: DS.belongsTo('two')
});
