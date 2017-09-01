import DS from 'ember-data';

export default DS.Model.extend({
  twos: DS.hasMany('twos')
});
