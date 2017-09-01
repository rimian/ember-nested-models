import Ember from 'ember';

const { warn } = Ember.Logger;

export default Ember.Route.extend({
  actions: {
    createModels() {
      let store = this.get('store');
      store.createRecord('one');
      warn('Done');
    }
  }
});
