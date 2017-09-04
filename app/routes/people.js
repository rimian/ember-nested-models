import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekRecord('person', 1);
  }
});
