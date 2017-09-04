import Ember from 'ember';

const { warn } = Ember.Logger;

export default Ember.Route.extend({

  beforeModel() {
    this._pushIt();
  },

  _pushIt() {
    warn('data pushing into store');
    this.store.push({
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
                type: 'person'
              },
              {
                id: '3',
                type: 'person'
              },
              {
                id: '4',
                type: 'person'
              }
            ]
          }
        }
      },
      included: [
        {
          id: '2',
          type: 'person',
          attributes: {
          	firstName: 'Child 1'
          }
        },
        {
          id: '3',
          type: 'person',
          attributes: {
          	firstName: 'Child 2'
          }
        },
        {
          id: '4',
          type: 'person',
          attributes: {
          	firstName: 'Child 3'
          }
        }
      ]
    });
  },
});
