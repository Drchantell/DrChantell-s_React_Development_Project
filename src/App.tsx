import { useMemo, useState } from 'react'
import CountryCard from './components/CountryCard'
import CountryDetails from './components/CountryDetails'
import Header from './components/Header'
import Layout from './components/Layout'
import SearchControls from './components/SearchControls'
import StatusMessage from './components/StatusMessage'
import { useTheme } from './context/useTheme'
import { useCountries } from './hooks/useCountries'
import type { Country } from './types/Country'

export default function App() {
  const { theme } = useTheme()
  const { countries, loading, error } = useCountries()
  const [searchTerm, setSearchTerm] = useState('')
  const [region, setRegion] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const filteredCountries = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    return countries
      .filter((country) => {
        const text = [
          country.name.common,
          country.name.official,
          ...(country.capital ?? []),
        ]
          .join(' ')
          .toLowerCase()

        const matchesSearch = !search || text.includes(search)
        const matchesRegion = region === 'All' || country.region === region

        return matchesSearch && matchesRegion
      })
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
  }, [countries, searchTerm, region])

  function handleSelectCountry(country: Country) {
    setSelectedCountry(country)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setSelectedCountry(null)
  }

  function handleClear() {
    setSearchTerm('')
    setRegion('All')
  }

  return (
    <div className={theme === 'dark' ? 'app dark-theme' : 'app'}>
      <Layout>
        <Header />

        {selectedCountry ? (
          <CountryDetails
            country={selectedCountry}
            countries={countries}
            onBack={handleBack}
            onSelectCountry={handleSelectCountry}
          />
        ) : (
          <>
            <section className="intro">
              <p>
                I can search for countries by name or filter them by region. I can also select a
                country to learn more about it.
              </p>
            </section>

            <SearchControls
              searchTerm={searchTerm}
              region={region}
              onSearchChange={setSearchTerm}
              onRegionChange={setRegion}
              onClear={handleClear}
            />

            {loading && <StatusMessage message="Loading countries..." />}
            {error && <StatusMessage message={error} />}

            {!loading && !error && (
              <>
                <p className="results-count">
                  Showing {filteredCountries.length} of {countries.length} countries
                </p>

                {filteredCountries.length > 0 ? (
                  <section className="country-grid" aria-label="Country results">
                    {filteredCountries.map((country) => (
                      <CountryCard
                        key={`${country.cca3}-${country.name.common}`}
                        country={country}
                        onSelect={handleSelectCountry}
                      />
                    ))}
                  </section>
                ) : (
                  <StatusMessage message="No countries match my search." />
                )}
              </>
            )}
          </>
        )}
      </Layout>
    </div>
  )
}
