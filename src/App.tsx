import { useMemo, useState } from 'react'
import CountryCard from './components/CountryCard'
import Header from './components/Header'
import Layout from './components/Layout'
import SearchControls from './components/SearchControls'
import StatusMessage from './components/StatusMessage'
import { useTheme } from './context/useTheme'
import { useCountries } from './hooks/useCountries'

export default function App() {
  const { theme } = useTheme()
  const { countries, loading, error } = useCountries()
  const [searchTerm, setSearchTerm] = useState('')
  const [region, setRegion] = useState('All')
  const filteredCountries = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()
    return countries.filter((country) => {
      const text = [country.name.common, country.name.official, ...(country.capital ?? [])].join(' ').toLowerCase()
      return (!search || text.includes(search)) && (region === 'All' || country.region === region)
    }).sort((a, b) => a.name.common.localeCompare(b.name.common))
  }, [countries, searchTerm, region])
  return <div className={theme === 'dark' ? 'app dark-theme' : 'app'}><Layout><Header /><section className="intro"><p>Search countries by name or filter by region. Information is loaded from the REST Countries API.</p></section><SearchControls searchTerm={searchTerm} region={region} onSearchChange={setSearchTerm} onRegionChange={setRegion} onClear={() => { setSearchTerm(''); setRegion('All') }} />{loading && <StatusMessage message="Loading countries..." />}{error && <StatusMessage message={error} />}{!loading && !error && <><p className="results-count">Showing {filteredCountries.length} of {countries.length} countries</p>{filteredCountries.length ? <section className="country-grid" aria-label="Country results">{filteredCountries.map((country) => <CountryCard key={`${country.cca3}-${country.name.common}`} country={country} />)}</section> : <StatusMessage message="No countries match your search." />}</>}</Layout></div>
}
