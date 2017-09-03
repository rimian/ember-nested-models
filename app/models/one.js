import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  twos: DS.hasMany('two')
});
