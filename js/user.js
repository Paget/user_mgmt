

function User(spec) {
  var self = {
    firstName: spec.firstName,
    lastName: spec.lastName,
    email: spec.email,

    equal: function (otherUser) {
      return self.email === otherUser.email;
    }
  };

  return self;
}
