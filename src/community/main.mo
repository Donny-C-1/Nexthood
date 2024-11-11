import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor {

    type Member = {
        id: Text;
        role: Text;
    };

    type Group = {
        id: Text;
        name: Text;
        description: Text;
        members: List.List<Member>;
    };

    stable var groups = List.nil<Group>();

    public func createGroup(id : Text, name : Text, description : Text, adminID : Text) {
        var members = List.nil<Member>();

        members := List.push({
            id = adminID;
            role = "admin";
        }, members);

        groups := List.push({
            id = id;
            name = name;
            description = description;
            members = members;
        }, groups);
    };

    public query func getGroupInfo(id : Text) : async ?Group {
        for (group in List.toArray(groups).vals()) {
            if (group.id == id) {
                return ?group;
            };
        };
        return null;
    };

    public func addMember(groupID : Text, userID : Text) {
        var group = do {
            var result: ?Group = null;
            for (gr in List.toArray(groups).vals()) {
                if (gr.id == groupID) {
                    result := ?gr;
                };
            };
            result;
        };

        switch (group) {
            case (?g) {

                // g.members := List.push({
                //     id = userID;
                //     role = "member";
                // }, g.members);
            };
            case (null) {
                Debug.print("Group not found");
            }
        }
    };

    public query func getAllGroups() : async List.List<Group> {
        return groups;
    }
}