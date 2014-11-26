Template.artifactItem.helpers({
  one: function() { return Session.get("theOne"); } ,
  two: function() { return Session.get("theTwo"); } ,
  three: function() { return Session.get("theThree"); },
  verb: function() { return Session.get("theOne").verb; },
  adjective: function() { return Session.get("theTwo").adjective; },
  adjectiveWithArticle: function() {
    var word = Session.get("theTwo").adjective; 
    if (word.match(/^[aeiuo]/)) { return "an " + word; }
    else { return "a " + word; }
  },
  noun: function() { return Session.get("theThree").noun; },
  phrase: function() { return Session.get("phrase"); },
  actor: function() { return Session.get("actor"); },
  context: function() { return Session.get("context"); },
  label: function() { return Session.get("label"); }
  
});

Template.artifactItem.events({
   'click #next': function() {
      Session.set('theOne', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
      Session.set('theTwo', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
      Session.set('theThree', _.flatten(_.sample(Signals.find().fetch(), 1))[0]);
      Session.set('actor', _.flatten(_.sample(actors, 1))[0]);
      Session.set('phrase', _.flatten(_.sample(phrases, 1))[0]);
      Session.set('context', _.flatten(_.sample(contexts, 1))[0]);
      Session.set('label', _.flatten(_.sample(labels, 1))[0]);
   }
}); 

