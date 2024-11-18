"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cities from "@/cities.json"; // cities.js dosyasını import eder
import FullScreenMap from "./map";

const App = () => {

  return (
   <FullScreenMap cities={cities} />
  );
};

export default App;
