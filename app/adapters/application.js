import Ember from 'ember';
import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';

const { assert, isEmpty } = Ember;

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', this.createDb());
  },

  createDb() {
    const localDb = 'ember-nested-models';
    assert('emberPouch.localDb must be set', !isEmpty(localDb));
    PouchDB.debug.enable('*');
    return new PouchDB(localDb);
  }
});
