import React, { useState } from "react";
import { Platform } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../../../../enviroment";

export default function SearchAutocomplete({ setDestination }) {
    const [searchFocused, setSearchFocused] = useState(false)

    return (
        <GooglePlacesAutocomplete
            placeholder="Procure pelo seu destino"
            placeholderTextColor="#333"
            onPress={(data, details) => {
                console.log("@search response", data, details)
                setDestination({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                })
            }}
            query={{
                key: GOOGLE_API_KEY,
                language: "pt",
            }}
            textInputProps={{
                onFocus: () => {
                    setSearchFocused(true);
                },
                onBlur: () => {
                    setSearchFocused(false);
                },
                autoCapitalize: "none",
                autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: "absolute",
                    top: Platform.select({ ios: 80, android: 60 }),
                    width: "100%"
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: "transparent",
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 7,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: "#DDD",
                    fontSize: 18
                },
                listView: {
                    borderWidth: 1,
                    borderColor: "#DDD",
                    backgroundColor: "#FFF",
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10
                },
                description: {
                    fontSize: 16
                },
                row: {
                    padding: 20,
                    height: 58
                }
            }}
        />
    );
}