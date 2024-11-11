import List "mo:base/List";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
// import User "user";

actor {

    type User = {
        id: Text;
        name: Text;
    };

    stable var members = List.nil<User>();

    // Function Input: 
    // user : User, commName : Text, commID: Nat
    public func createCommunity() {
        
    };

    public func joinCommunity(user : User) {
        members := List.push(user, members);
    };

    public query func getMembers() : async Text {
        // Iter.toArray(members);
        "This are the members";
    };
}