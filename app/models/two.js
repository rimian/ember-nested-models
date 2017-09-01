import DS from 'ember-data';

export default DS.Model.extend({
  threes: DS.hasMany('threes'),
  one: DS.belongsTo('one')
});
