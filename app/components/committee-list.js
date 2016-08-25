import Ember from 'ember';

export default Ember.Component.extend({
  houseCommittees: Ember.computed.filterBy('committees', 'chamber', 'house'),
  senateCommittees:Ember.computed.filterBy('committees', 'chamber', 'senate'),
});
