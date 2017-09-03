import Ember from 'ember';

const { error, warn } = Ember.Logger;

export default Ember.Route.extend({
  model() {
    return this.get('store').peekRecord('person', 1);
  },

  actions: {
    createModels() {
      this.get('store').push({
        data: {
          id: '1',
          type: 'person',
          attributes: {
            firstName: 'Tom',
            lastName: 'Dale'
          },
          relationships: {
            children: {
              data: [
                {
                  id: '2',
                  type: 'child'
                },
                {
                  id: '3',
                  type: 'child'
                },
                {
                  id: '4',
                  type: 'child'
                }
              ]
            }
          }
        },
        included: [
          {
            id: '2',
            type: 'child',
            attributes: {
            	firstName: 'Child 1'
            }
          },
          {
            id: '3',
            type: 'child',
            attributes: {
            	firstName: 'Child 2'
            }
          },
          {
            id: '4',
            type: 'child',
            attributes: {
            	firstName: 'Child 3'
            }
          }
        ]
      });
    }
  }
});
