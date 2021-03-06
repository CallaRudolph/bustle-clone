import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('story', {path: '/story/:story_id'});
  this.route('admin');
  this.route('admin-story', {path: '/admin-story/:story_id'});
  this.route('contact');
});

export default Router;
