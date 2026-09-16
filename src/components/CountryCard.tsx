import type { Country } from '../types/Country'

export default function CountryCard({ country }: { country: Country }) {
  const mapQuery = country.latlng ? `${country.latlng[0]},${country.latlng[1]}` : country.name.common
  const mapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(mapQuery)}`
  return <article className="country-card"><img src={country.flags.png || country.flags.svg} alt={country.flags.alt || `Flag of ${country.name.common}`} /><div className="card-content"><h2>{country.name.common}</h2><p><strong>Capital:</strong> {country.capital?.[0] || 'Not listed'}</p><p><strong>Region:</strong> {country.region}</p><p><strong>Population:</strong> {country.population.toLocaleString()}</p><a className="map-link" href={mapUrl} target="_blank" rel="noreferrer">View on map</a></div></article>
}
