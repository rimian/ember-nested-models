import Ember from 'ember';

export default Ember.Controller.extend({
  model() {
    return this.get('store').findAll('one');
  }
});
