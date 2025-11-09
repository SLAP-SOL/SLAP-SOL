import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);

  var links = textMap.fromIter<Text>(
    Iter.fromArray([
      ("memedepot", "https://memedepot.com"),
      ("twitter", "https://twitter.com"),
      ("discord", "https://discord.com"),
    ])
  );

  public query func getLinks() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(links));
  };
};
