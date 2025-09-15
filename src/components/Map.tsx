import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([25.7617, -80.1918], 15); // Miami coordinates
      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      // Add a marker for True Vision Growth Solutions Inc.
      const marker = L.marker([25.7617, -80.1918]).addTo(map);
      marker.bindPopup('<b>True Vision Growth Solutions Inc.</b><br>1200 Brickell Avenue, Suite 800').openPopup();
      // Store the map instance
      mapInstanceRef.current = map;
      // Resize the map when the container size changes
      map.invalidateSize();
    }
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  // Resize the map when the component resizes
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <div ref={mapRef} className="h-full w-full" />;
};