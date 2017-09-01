import Ember from 'ember';

const { error, warn } = Ember.Logger;

export default Ember.Route.extend({
  actions: {
    createModels() {
      let store = this.get('store');
      store.createRecord('one').save().then(() => {
        warn('Done');
      }).catch(() => {
        error('On, no!');
      });
    }
  }
});
