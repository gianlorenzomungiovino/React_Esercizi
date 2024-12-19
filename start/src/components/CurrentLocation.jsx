import { useCurrentLocation } from "../hooks/useCurrentLocation";

export function CurrentLocation() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Get Current Location</h1>

      {/* Bottone per ottenere la posizione */}
      <button onClick={getCurrentLocation} disabled={loading}>
        {loading ? "Fetching..." : "Get Current Location"}
      </button>

      {/* Stato di caricamento */}
      {loading && <p>Loading your location...</p>}

      {/* Mostra errore se c'è */}
      {error && <p>Error: {error}</p>}

      {/* Mostra la posizione se è stata trovata */}
      {location && (
        <div>
          <h2>Your Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}
