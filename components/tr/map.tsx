import router from "next/router";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "/assets/world-countries-sans-antarctica.json";

const markers = [
  {
    markerOffset: -10,
    name: "Almanya",
    coordinates: [10, 52],
    markerUrl: "about",
  },
  {
    markerOffset: -10,
    name: "Birleşik Krallık",
    coordinates: [-1, 53],
    markerUrl: "london",
  },
  {
    markerOffset: -10,
    name: "Hollanda",
    coordinates: [5, 53],
    markerUrl: "about",
  },
  {
    markerOffset: -10,
    name: "İspanya",
    coordinates: [-3, 40],
    markerUrl: "about",
  },
  {
    markerOffset: -10,
    name: "İsveç",
    coordinates: [16, 60],
    markerUrl: "about",
  },
  {
    markerOffset: -10,
    name: "Sırbistan",
    coordinates: [21, 44],
    markerUrl: "belgrade",
  },
  {
    markerOffset: -10,
    name: "Türkiye",
    coordinates: [33, 39],
    markerUrl: "about",
  },
];

const MapChart = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [touchCount, setTouchCount] = useState({});

  const handleTouchStart = (name) => {
    const newTouchCount = { ...touchCount };

    // Reset the touch count for all markers except the one being touched
    Object.keys(newTouchCount).forEach((markerName) => {
      if (markerName !== name) {
        newTouchCount[markerName] = 0;
      }
    });

    if (newTouchCount[name] === undefined) {
      newTouchCount[name] = 1;
      setHoveredMarker(name);
    } else if (newTouchCount[name] === 1) {
      newTouchCount[name] = 2;
      // If the marker has been touched twice, navigate to the link
      router.push(
        `/tr/${markers.find((marker) => marker.name === name)?.markerUrl || ""}`
      );
    }

    setTouchCount(newTouchCount);
  };

  return (
    <ComposableMap
      width={800}
      height={500}
      projection="geoMercator"
      projectionConfig={{
        center: [15, 50],
        scale: 400,
      }}
    >
      <ZoomableGroup center={[15, 50]} zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#a5a5ae"
                style={{
                  default: {
                    outline: "none",
                  },
                  hover: {
                    outline: "none",
                  },
                  pressed: {
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker
            key={name}
            coordinates={coordinates as Point}
            onMouseEnter={() => setHoveredMarker(name)}
            onMouseLeave={() => setHoveredMarker(null)}
            onTouchStart={() => handleTouchStart(name)}
            onClick={() => handleTouchStart(name)}
            cursor={"pointer"}
          >
            <g>
              <rect
                x="-50" // Adjust the x and y values to position the background
                y={markerOffset - 15} // Adjust the y value to center the background
                width="0" // Adjust the width to cover the text
                height="20" // Adjust the height as needed
                fill={
                  hoveredMarker === name
                    ? "rgba(255, 255, 255, 1)"
                    : "transparent"
                }
                rx="0" // Rounded corners, adjust as needed
              />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{
                  fontFamily: "system-ui",
                  fill: "#5D5A6D",
                  visibility: hoveredMarker === name ? "visible" : "hidden",
                }}
              >
                {name}
              </text>
            </g>
            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
