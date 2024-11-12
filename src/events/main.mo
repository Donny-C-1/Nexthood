import Array "mo:base/Array";

actor {
    stable var events : [Event] = [];

    type Event = {
        id: Text;
        name: Text;
        description: Text;
        date: Text;
        time: Text;
    };

    public func createEvent(id: Text, name: Text, desc: Text, date: Text, time: Text) : async Text {
        let newEvent : Event = {
            id = id;
            name = name;
            description = desc;
            date = date;
            time = time;
        };

        events := Array.append(events, [newEvent]);
        return "Event created successfully with ID: " # newEvent.id;
    };

    public query func getAll() : async [Event] {
        return events;
    };

    public query func displayEvent(eventID: Text) : async ?Event {
        for (event in events.vals()) {
            if (event.id == eventID) {
                return ?event;
            };
        };
        return null;
    };
};
