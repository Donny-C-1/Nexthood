import Array "mo:base/Array";

actor {
    stable var events : [Event] = [];

    type Event = {
        id: Text;
        name: Text;
        description: Text;
        startDate: Text;
        time: Text;
    };

    public func createEvent(id: Text, name: Text, desc: Text, start: Text, time: Text) : async Text {
        let newEvent : Event = {
            id = id;
            name = name;
            description = desc;
            startDate = start;
            time = time;
        };

        events := Array.append(events, [newEvent]);
        return "Event created successfully with ID: " # newEvent.id;
    };

    public query func displayAllEvents() : async [Event] {
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
