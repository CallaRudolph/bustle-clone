import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(story, params) {
      this.sendAction('update', story, params);
    },
  }
});
