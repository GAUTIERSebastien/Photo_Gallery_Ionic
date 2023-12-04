import { useState, useEffect } from "react";
import { Geolocation, Position } from "@capacitor/geolocation";

interface GeolocationResult {
  position: Position | null;
  error: Error | null;
}

const useGeolocation = (): GeolocationResult => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      setPosition(coordinates);
    } catch (e) {
      setError(e as Error);
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return { position, error };
};

export default useGeolocation;
