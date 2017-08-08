import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },
    saveStory() {
      var params = {
        headline: this.get('headline') ? this.get('headline') : "",
        photo: this.get('photo') ? this.get('photo') : "",
        author: this.get('author') ? this.get('author') : "",
        article: this.get('article') ? this.get('article') : "",
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
