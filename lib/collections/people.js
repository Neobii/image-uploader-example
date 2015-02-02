People = new Mongo.Collection("people", {
  transform : function(doc) {return new ModelPeople (doc)}
});

ModelPeople = function(doc) {
  _.extend(this, doc);
}

_.extend(ModelPeople.prototype, {
  profilePic: function(){
  	var defaultImageUrl = "/defaultImage.png";
  	var img = Images.findOne({_id: this.profilePicId});
  	if(!this.profilePicId || !img){
  		return defaultImageUrl;
  	}
  	else {
  		return img.url();
  	}
  }
});

People.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	profilePicId: {
		type: String,
		label: "Profile Image",
		autoform: {
			afFieldInput: {
        type: "fileUpload",
        collection: "Images"
      }
		}
	},
}))