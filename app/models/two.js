import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  threes: DS.hasMany('threes'),
  one: DS.belongsTo('one')
});
