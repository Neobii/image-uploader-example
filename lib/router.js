Router.map(function(){
	this.route("imageUpload", {
		path: "/",
		waitOn: function(){
			return Meteor.subscribe("allPeople");
		},
		data: function(){
			return {
				people: function(){
					return People.find({});
				}
			}
		}
	});
	this.route("person", {
		path: "/person/:_id",
		waitOn: function(){
			return Meteor.subscribe("onePerson", this.params._id);
		},
		data: function(){
			var self = this;
			return {
				person: function(){
					return People.findOne({_id: self.params._id});
				}
			}
		}
	})
})