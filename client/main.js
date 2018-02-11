Template.hello.onCreated(function () {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter: function () {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button': function (e, t) {
    t.counter.set(t.counter.get() + 1);
  },
});
