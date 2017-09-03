import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  children: DS.hasMany('child')
});
