Template.hello.onCreated(function () {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  leaderboard: function () {
    return Clicks.find({}, {"sort":{"amnt":1}}).fetch();
  },
});

Template.hello.events({
  'click button': function (e, t) {
    name = $(e.currentTarget).text();
    if(!Clicks.findOne({"name":name})) Clicks.insert({"name":name, "amnt":0});
    Clicks.update({_id:Clicks.findOne({"name":name})._id}, {$inc:{"amnt":0}});
  },
});
