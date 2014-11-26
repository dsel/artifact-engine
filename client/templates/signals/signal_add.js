

Template.signalAdd.events({
  'submit form': function(e) {
    e.preventDefault();

    var signal = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      image: $(e.target).find('[name=image]').val(),
      source: $(e.target).find('[name=source]').val(),
      verb: $(e.target).find('[name=verb]').val(),
      adjective: $(e.target).find('[name=adjective]').val(),
      noun: $(e.target).find('[name=noun]').val(),
    };

    signal._id = Signals.insert(signal);
    $('#signalForm')[0].reset();
    Flash.success("Signal added");
  }
});