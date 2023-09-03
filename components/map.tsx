import { url } from "inspector";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const markers = [
  { markerOffset: -10, name: "UK", coordinates: [-1, 53], markerUrl: "london" },
  { markerOffset: -10, name: "Türkiye", coordinates: [33, 39], markerUrl: "about" },
  { markerOffset: -10, name: "Netherlands", coordinates: [5, 53], markerUrl: "netherlands" },
  { markerOffset: -10, name: "Spain", coordinates: [-3, 40], markerUrl: "spain" },
  { markerOffset: -10, name: "Serbia", coordinates: [21, 44], markerUrl: "belgrade" },
  { markerOffset: -10, name: "Sweden", coordinates: [16, 60], markerUrl: "sweden" },
  { markerOffset: -10, name: "Germany", coordinates: [10, 52], markerUrl: "germany" }
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
        } else {
          newTouchCount[name] += 1;
        }
        setTouchCount(newTouchCount);
    
        if (newTouchCount[name] === 2) {
          // If the marker has been tapped twice, navigate to the link
          setTouchCount({}); // Reset the touch count
          router.push(`/en/${markers.find((marker) => marker.name === name)?.markerUrl || ""}`);;
        }
      };

      const handleClick = (name) => {
        router.push(`/en/${markers.find((marker) => marker.name === name)?.markerUrl || ""}`);;
      };

  return (
    <ComposableMap
      width={800}
      height={500}
      projection="geoMercator"
      projectionConfig={{
        center: [0, 25],
        scale: 150
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
              style={{
                default: {
                    outline: 'none'
                },
                hover: {
                    outline: 'none'
                },
                pressed: {
                    outline: 'none'
                }
            }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as Point} 
        onMouseEnter={() => setHoveredMarker(name)}
        onMouseLeave={() => setHoveredMarker(null)}
        onTouchStart={() => handleTouchStart(name)}
        onClick={() => handleClick(name)}
        cursor={'pointer'}
        >
          <g>
              <rect
                x="-50" // Adjust the x and y values to position the background
                y={markerOffset - 15} // Adjust the y value to center the background
                width="0" // Adjust the width to cover the text
                height="20" // Adjust the height as needed
                fill={hoveredMarker === name ? "rgba(255, 255, 255, 1)" : "transparent"}
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
    </ComposableMap>
  );
};

export default MapChart;
