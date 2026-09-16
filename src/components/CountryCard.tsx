import type { Country } from '../types/Country'

type CountryCardProps = {
  country: Country
  onSelect: (country: Country) => void
}

export default function CountryCard({ country, onSelect }: CountryCardProps) {
  return (
    <article className="country-card">
      <img
        src={country.flags.png || country.flags.svg}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
      />

      <div className="card-content">
        <h2>{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'Not listed'}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>

        <button className="details-button" type="button" onClick={() => onSelect(country)}>
          View Details
        </button>
      </div>
    </article>
  )
}
