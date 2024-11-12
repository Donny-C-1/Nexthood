import Text "mo:base/Text";
import List "mo:base/List";

actor {
  type User = {
    principal : Text;
    username : Text;
  };

  stable var users = List.nil<User>();


  public func addUser(principal : Text, username : Text) : async Text {
    users := List.push({
      principal = principal;
      username = username;
    }, users);
    return "Hello " # username # ". Your id is " # principal;
  };

  public query func getUser(principal : Text): async ?User {
    for (user in List.toArray(users).vals()) {
      if (user.principal  == principal) {
        return ?user;
      };
    };
    return null;
  };

  public query func getAll() : async Text {
    return "This is all our users";
  }
};
