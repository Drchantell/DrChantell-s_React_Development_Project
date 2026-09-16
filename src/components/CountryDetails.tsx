import type { Country } from '../types/Country'

type CountryDetailsProps = {
  country: Country
  countries: Country[]
  onBack: () => void
  onSelectCountry: (country: Country) => void
}

export default function CountryDetails({ country, countries, onBack, onSelectCountry }: CountryDetailsProps) {
  const nativeName = country.name.native
    ? Object.values(country.name.native)[0]?.common
    : country.name.common

  const borderCountries = (country.borders ?? [])
    .map((code) => countries.find((item) => item.cca3 === code))
    .filter((item): item is Country => Boolean(item))

  return (
    <section className="details-page" aria-label={`${country.name.common} details`}>
      <button className="back-button" type="button" onClick={onBack}>
        Back to Countries
      </button>

      <div className="details-layout">
        <img
          className="details-flag"
          src={country.flags.png || country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
        />

        <div className="details-content">
          <h2>{country.name.common}</h2>

          <div className="details-columns">
            <div>
              <p><strong>Official Name:</strong> {country.name.official}</p>
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Subregion:</strong> {country.subregion || 'Not listed'}</p>
              <p><strong>Capital:</strong> {country.capital?.join(', ') || 'Not listed'}</p>
            </div>

            <div>
              <p>
                <strong>Currencies:</strong>{' '}
                {country.currencies?.map((currency) => currency.name).join(', ') || 'Not listed'}
              </p>
              <p>
                <strong>Languages:</strong>{' '}
                {country.languages?.map((language) => language.name).join(', ') || 'Not listed'}
              </p>
            </div>
          </div>

          <div className="border-section">
            <h3>Border Countries</h3>
            {borderCountries.length > 0 ? (
              <div className="border-buttons">
                {borderCountries.map((borderCountry) => (
                  <button
                    key={borderCountry.cca3}
                    type="button"
                    className="border-button"
                    onClick={() => onSelectCountry(borderCountry)}
                  >
                    {borderCountry.name.common}
                  </button>
                ))}
              </div>
            ) : (
              <p>This country does not have listed border countries.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
