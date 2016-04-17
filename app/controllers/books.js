// app/controllers/books.js

import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

  queryParams: ['limit'],
  limit: 5,

  total: computed('model.meta', function() {
    return this.get('model.meta').total;
  }),

  showAll: computed('total', 'model', function() {
    const total = this.controllerFor('books').get('total');
    return this.get('total') > this.get('model.length');
  })

});