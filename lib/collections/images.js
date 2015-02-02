Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("imagesStore")]
});

Images.allow({
  download: function () {
    return true;
  }
});