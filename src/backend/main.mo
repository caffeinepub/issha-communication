import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type ContactInfo = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    address : Text;
  };

  type BusinessHour = {
    day : Text;
    openTime : Text;
    closeTime : Text;
  };

  module BusinessHour {
    public func compare(bh1 : BusinessHour, bh2 : BusinessHour) : Order.Order {
      Text.compare(bh1.day, bh2.day);
    };
  };

  let businessHours = Map.fromIter<Text, BusinessHour>(
    [
      ("monday", { day = "Monday"; openTime = "09:00"; closeTime = "18:00" }),
      ("tuesday", { day = "Tuesday"; openTime = "09:00"; closeTime = "18:00" }),
      ("wednesday", { day = "Wednesday"; openTime = "09:00"; closeTime = "18:00" }),
      ("thursday", { day = "Thursday"; openTime = "09:00"; closeTime = "18:00" }),
      ("friday", { day = "Friday"; openTime = "09:00"; closeTime = "18:00" }),
      ("saturday", { day = "Saturday"; openTime = "10:00"; closeTime = "16:00" }),
      ("sunday", { day = "Sunday"; openTime = "Closed"; closeTime = "Closed" }),
    ].values()
  );

  let contactInfo : ContactInfo = {
    name = "Issha Communication";
    phoneNumber = "+1234567890";
    email = "contact@isshacommunication.com";
    address = "123 Main St, City, Country";
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  public query ({ caller }) func getBusinessHours() : async [BusinessHour] {
    businessHours.values().toArray().sort();
  };
};
