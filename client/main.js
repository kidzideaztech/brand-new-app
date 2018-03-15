Template.home.helpers({
  clicks: function () {
    return Clicks.find({}, {"sort":{"amnt":-1}})
  },
});

Template.home.events({
  'click button': function (e, t) {
    name = $(e.currentTarget).text();
    if(!Clicks.findOne({"name":name})) Clicks.insert({"name":name, "amnt":0});
    Clicks.update({_id:Clicks.findOne({"name":name})._id}, {$inc:{"amnt":1}});
  },
});
