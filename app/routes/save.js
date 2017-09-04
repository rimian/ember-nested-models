import Ember from 'ember';

const { warn } = Ember.Logger;

export default Ember.Route.extend({
  beforeModel() {
    let p = this.get('store').createRecord('person', {
      id: '10',
      type: 'person',
      firstName: 'Ray',
      lastName: 'Zintoast'
    });

    p.save().then(() => {
      warn('Saved');
    });
  },

  model() {
    return this.store.peekRecord('person', 10);
  }
});
