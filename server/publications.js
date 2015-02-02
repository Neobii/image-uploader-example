Meteor.publishComposite('onePerson', function(personId) {
  return {
    find: function() {
      return People.find({_id: personId})
    },
    children: [
      {
        find: function(person) {
          return Images.find({_id: person.profilePicId});
        }
      }
    ]
  }
});
Meteor.publish("allPeople", function(){
	return People.find({});
})