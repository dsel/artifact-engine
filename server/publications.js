Meteor.publish('signals', function() {
  return Signals.find();
});