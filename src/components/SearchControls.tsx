type SearchControlsProps = { searchTerm: string; region: string; onSearchChange: (value: string) => void; onRegionChange: (value: string) => void; onClear: () => void }

export default function SearchControls({ searchTerm, region, onSearchChange, onRegionChange, onClear }: SearchControlsProps) {
  return <section className="controls" aria-label="Country filters">
    <div className="field-group"><label htmlFor="country-search">Search for a country</label><input id="country-search" type="search" value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Try Jamaica or Canada" /></div>
    <div className="field-group"><label htmlFor="region-filter">Filter by region</label><select id="region-filter" value={region} onChange={(event) => onRegionChange(event.target.value)}><option>All</option><option>Africa</option><option>Americas</option><option>Asia</option><option>Europe</option><option>Oceania</option></select></div>
    <button className="clear-button" type="button" onClick={onClear}>Clear Filters</button>
  </section>
}
