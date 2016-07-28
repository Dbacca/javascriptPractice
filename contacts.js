var friends = {
    drew: {
        firstName: "Drew"
        , lastName: "Since"
        , number: "952-698-8299"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
    , becca: {
        firstName: "Becca"
        , lastName: "Gilmore"
        , number: "320-554-2444"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
    , craig: {
        firstName: "Craig"
        , lastName: "Ruks"
        , number: "123-456-789"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
    , meredith: {
        firstName: "Mer"
        , lastName: "Dalenburg"
        , number: "237-213-3928"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
    , bill: {
        firstName: "Bill"
        , lastName: "Sucks"
        , number: "222-222-2222"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
    , steve: {
        firstName: "Steve"
        , lastName: "Herbst"
        , number: "952-698-1600"
        , address: [500, "E Grant St", "Minneapolis", "MN"]
    }
};
var list = function (obj) {
    for (var prop in obj) {
        console.log(prop);
    }
};
var search = function (name) {
    //    var lowCaseName = name.toLowerCase;
    for (var prop in friends) {
        if (friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};
//list(friends);
search("Steve");