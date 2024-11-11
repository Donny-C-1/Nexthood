import Text "mo:base/Text";
import List "mo:base/List";
// import Iter "mo:base/Iter";
// import Bool "mo:base/Bool";
actor {
    type User = {
        id: Text;
        name: Text;
        communities: Text;
    };

    var currentUser : User = {
        id = "";
        name = "";
        communities = "";
    };

    var pendingMessage = "";

    stable var users = List.nil<User>();

    public query func getInfo() : async User {
        currentUser;
    };

    public query func getCommunities() : async Text {
        "This is the community";
    };


    public func sendMessage(msg : Text) : async Text {
        // let a : Nat = 5;
        pendingMessage := msg;
        "";
    };

    public func addUser(principal : Text, name0 : Text) {
        users := List.push({
            id = principal;
            name = name0;
            communities = "";
        }, users);
    }
}