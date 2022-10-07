import { usePlacesWidget } from "react-google-autocomplete";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function AutoComplete(props) {
  const myKey = process.env.REACT_APP_MAP_API_KEY;
  const { setAddress, setCoords } = props;
  // const [placeName, setPlaceName] = useState("");
  // const [address, setAddress] = useState("");
  // const [coords, setCoords] = useState({ lat: "", lng: "" });
  const { ref: locationRef } = usePlacesWidget({
    apiKey: myKey,
    onPlaceSelected: (place) => {
      setAddress(place.formatted_address, place.geometry.location.lat(),
      place.geometry.location.lng() );
      console.log("This is the place address:", place.formatted_address)
      // setCoords(
      //   place.geometry.location.lat(),
      //   place.geometry.location.lng(),
      // );
    },
    options: {
      types: ["park"],
      componentRestrictions: { country: "ca" },
      fields: ["name", "formatted_address", "geometry"],
    },
    inputAutocompleteValue: "text",
  });
  return (
    <>
      <Form.Control
        required
        type="text"
        ref={locationRef}
        // placeholder="Which park will this run be at?"
        autoComplete="text"
      />
    </>
  );
}
