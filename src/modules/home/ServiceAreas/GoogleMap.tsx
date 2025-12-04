import React, { useEffect, useState } from "react";

interface ServiceArea {
  name: string;
  description: string;
  coverage: string;
  coordinates: [number, number];
}

interface GoogleMapComponentProps {
  serviceAreas: ServiceArea[];
}

declare global {
  interface Window {
    google?: any;
    googleMapsScriptLoaded?: boolean;
  }
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  serviceAreas,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const hasInitialized = React.useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const createMap = () => {
      if (!mapRef.current || !window.google) return;

      // Center map on the first service area
      const defaultCenter = {
        lat: serviceAreas[0]?.coordinates[0] || 10.8109,
        lng: serviceAreas[0]?.coordinates[1] || 106.6724,
      };

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 13,
        center: defaultCenter,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#5a6c7d" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f3f3f3" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#f0f0f0" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#999999" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#c7e9ff" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d4e7f3" }],
          },
        ],
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
      });

      setMap(mapInstance);

      // Create a new InfoWindow
      const infoWindowInstance = new window.google.maps.InfoWindow();

      // Add markers for each service area
      serviceAreas.forEach((area) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: area.coordinates[0],
            lng: area.coordinates[1],
          },
          map: mapInstance,
          title: area.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#0A84FF",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          },
        });

        // Add click listener to marker
        marker.addListener("click", () => {
          infoWindowInstance.setContent(`
            <div style="padding: 12px; max-width: 250px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #0A84FF; font-size: 14px;">
                ${area.name}
              </h3>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; line-height: 1.4;">
                ${area.description}
              </p>
              <p style="margin: 0; color: #0A84FF; font-weight: 600; font-size: 12px;">
                📍 Coverage: ${area.coverage}
              </p>
            </div>
          `);
          infoWindowInstance.open({
            anchor: marker,
            map: mapInstance,
          });
        });
      });
    };

    const initMap = () => {
      try {
        // Check if Google Maps is already loaded
        if (window.google) {
          createMap();
        } else if (!window.googleMapsScriptLoaded) {
          // Mark that we're loading the script to prevent duplicates
          window.googleMapsScriptLoaded = true;

          // Load Google Maps script
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
          script.async = true;
          script.defer = true;

          script.onload = () => {
            // Small delay to ensure Google Maps is fully initialized
            setTimeout(createMap, 100);
          };

          script.onerror = () => {
            console.error(
              "Failed to load Google Maps script. Check your API key."
            );
          };

          document.head.appendChild(script);
        }
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
      }
    };

    initMap();

    return () => {
      // Cleanup: remove the initialization flag when component unmounts
      hasInitialized.current = false;
    };
  }, [serviceAreas]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
      }}
    />
  );
};

export default GoogleMapComponent;
