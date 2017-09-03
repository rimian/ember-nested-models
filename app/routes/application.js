import Ember from 'ember';

const { error, warn } = Ember.Logger;

export default Ember.Route.extend({
  model() {
    warn('model hook happens');
    return this.get('store').findAll('one');
  },

  actions: {
    createModels() {
      let store = this.get('store');
      store.push({
        data: {
          id: '1',
          type: 'one',
          attributes: {},
          relationships: {
            children: {
              data: [
                {
                  id: '2',
                  type: 'two'
                },
                {
                  id: '3',
                  type: 'two'
                },
                {
                  id: '4',
                  type: 'two'
                }
              ]
            }
          }
        },
        included: [
          {
            id: '2',
            type: 'two',
            attributes: {}
          },
          {
            id: '3',
            type: 'two',
            attributes: {}
          },
          {
            id: '4',
            type: 'two',
            attributes: {}
          }
        ]
      });
    }
  }
});
