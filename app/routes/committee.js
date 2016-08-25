import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey=44f6063f8fd34c5dabe368d6a4d2750b&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
});
