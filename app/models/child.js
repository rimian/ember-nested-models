import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  parent: DS.belongsTo('person')
});
