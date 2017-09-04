import Ember from 'ember';

const { warn } = Ember.Logger;

export default Ember.Route.extend({

  beforeModel() {
    this._data().forEach((level1) => {
      let person = this.store.createRecord('person', this._person(level1));

      level1.children.forEach((level2) => {
        let child = this.store.createRecord('person', this._person(level2));
        person.get('children').pushObject(child);
        child.save(() => {
          person.save();
        });
      });
    });
  },

  _person(data) {
    return { firstName: data.firstName, lastName: data.lastName };
  },

  _data() {
    return [
      {
        firstName: 'Bob',
        lastName: 'Bobson',
        children: [
          { firstName: 'Ray', lastName: 'Zintoast', children: [] },
          { firstName: 'Arthur', lastName: 'Wrightus', children: [] }
        ]
      },
      {
        firstName: 'Indie',
        lastName: 'Ocean',
        children: [
          {
            firstName: 'Frank',
            lastName: 'Doobie',
            children: [
              { firstName: 'Walter', lastName: 'Becker', children: [] }
            ]
          }
        ]
      },
    ];
  },
});
