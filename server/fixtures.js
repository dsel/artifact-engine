if (Signals.find().count() === 0) {
  Signals.insert({
    title: 'Microbial Home',
    source: 'http://sachagreif.com/introducing-telescope/',
    image: 'http://placekitten.com/g/200/300',
    description: "The Microbial Home is viewed as a cyclical biological machine where wastes like sewage, effluent, garbage, wastewater are filtered, processed and recycled to be used as inputs for the various home functions.",
    verb: 'making',
    adjective: 'cyclical',
    noun: 'home'
  });

  Signals.insert({
    title: 'Space Elevator',
    source: 'http://meteor.com',
    image: 'http://placekitten.com/g/200/400',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    verb: 'transporting',
    adjective: 'awesome',
    noun: 'space'
  });

  Signals.insert({
    title: 'Libraries',
    source: 'http://themeteorbook.com',
    image: 'http://placekitten.com/g/200/200',
    description: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    verb: 'learning',
    adjective: 'important',
    noun: 'idea'
  });
}