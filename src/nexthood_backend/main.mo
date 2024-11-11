// SocialMedia.mo
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor {
  public shared (msg) func whoami() : async Principal {
        msg.caller
    };

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
    // User and post data types
    type UserId = Text;
    type GroupId = Text;
    type PostId = Nat;
    type Post = {
        id: PostId;
        author: UserId;
        content: Text;
        timestamp: Int;
    };

    type Group = {
        id: GroupId;
        name: Text;
        owner: UserId;
        members: [UserId];
        posts: [Post];
    };

    // Storage for users and groups
    stable var users: [UserId] = [];
    stable var groups: [GroupId : Group] = {};
    stable var nextPostId: PostId = 0;

    public func registerUser(userId: UserId): Bool {
        if (users.contains(userId)) {
            return false;
        };
        users := users # [userId];
        Debug.print("User registered: " # userId);
        return true;
    };

    public func createGroup(userId: UserId, groupName: Text): ?Group {
        let groupId = groupName # "-" # userId;
        if (groups.containsKey(groupId)) {
            return null;
        };
        let newGroup = {
            id = groupId;
            name = groupName;
            owner = userId;
            members = [userId];
            posts = [];
        };
        groups[groupId] := newGroup;
        Debug.print("Group created: " # groupName);
        return ?newGroup;
    };

    public func postMessage(groupId: GroupId, userId: UserId, content: Text): ?Post {
        if (!groups.containsKey(groupId)) {
            return null;
        };
        let group = groups[groupId];
        if (!group.members.contains(userId)) {
            return null;
        };
        let newPost = {
            id = nextPostId;
            author = userId;
            content = content;
            timestamp = Time.now();
        };
        nextPostId += 1;
        groups[groupId].posts := group.posts # [newPost];
        Debug.print("Post added by " # userId # " to group " # groupId);
        return ?newPost;
    };

    public func getPosts(groupId: GroupId): ?[Post] {
        return groups.get(groupId).map((group) -> group.posts);
    };
};
