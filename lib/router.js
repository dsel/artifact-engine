Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('signals'); }

});

Router.route('/', {
  name: 'artifactItem',
  onAfterAction: function () {
    Session.set('theOne', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
    Session.set('theTwo', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
    Session.set('theThree', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
    Session.set('phrase', _.flatten(_.sample(phrases, 1))[0]);
    Session.set('actor', _.flatten(_.sample(actors, 1))[0]);
    Session.set('context', _.flatten(_.sample(contexts, 1))[0]);
    Session.set('label', _.flatten(_.sample(labels, 1))[0]);
  }
});

Router.route('/signals', {name: 'signalsList'});

Router.route('/signals/:_id', {
  name: 'singalPage',
  data: function() { return Signals.findOne(this.params._id); }

});

Router.route('/add', {name: 'signalAdd'});

Router.onBeforeAction('dataNotFound', {only: 'signalPage'});