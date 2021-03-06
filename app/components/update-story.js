import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        headline: this.get('headline') ? this.get('headline') : "",
        photo: this.get('photo') ? this.get('photo') : "",
        author: this.get('author') ? this.get('author') : "",
        article: this.get('article') ? this.get('article') : "",
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
