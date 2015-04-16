Meteor.publish(null, function () {
  return [
    Collections.Builds.find()
  ];
});

