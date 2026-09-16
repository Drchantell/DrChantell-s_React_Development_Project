import { useEffect, useState } from 'react'
import type { Country } from '../types/Country'

const API_URL = import.meta.env.DEV
  ? '/api/countries?response_fields=names.common,names.official,codes.alpha_2,codes.alpha_3,capitals,region,population,flag.url_png,flag.url_svg,flag.description&limit=100'
  : 'https://api.restcountries.com/countries/v5?response_fields=names.common,names.official,codes.alpha_2,codes.alpha_3,capitals,region,population,flag.url_png,flag.url_svg,flag.description&limit=100'

type ApiCountry = {
  names: { common: string; official: string }
  codes: { alpha_2: string; alpha_3: string }
  capitals?: { name: string }[]
  region: string
  population: number
  flag?: { url_png?: string; url_svg?: string; description?: string }
  latlng?: [number, number]
}

type ApiResponse = {
  data: { objects: ApiCountry[]; meta?: { more?: boolean } }
}

const customCountry: Country = {
  name: { common: 'Abkhazia', official: 'Republic of Abkhazia' },
  cca3: 'ABK',
  capital: ['Sukhumi'],
  region: 'Europe',
  population: 245000,
  latlng: [43.0015, 41.0234],
  flags: {
    png: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Abkhazia.svg',
    svg: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Abkhazia.svg',
    alt: 'Flag of Abkhazia',
  },
}

async function fetchCountries(key: string, signal: AbortSignal) {
  const results: Country[] = []
  let offset = 0
  let more = true
  while (more) {
    const response = await fetch(`${API_URL}&offset=${offset}`, { signal, headers: { Authorization: `Bearer ${key}` } })
    if (!response.ok) throw new Error(response.status === 401 ? 'The REST Countries API key is invalid or expired.' : `The REST Countries API request failed (${response.status}).`)
    const result: ApiResponse = await response.json()
    for (const country of result.data.objects) {
      if (!country.names?.common || !country.codes?.alpha_2 || !country.codes?.alpha_3) continue
      const flag = `https://flags.restcountries.com/v5/w640/${country.codes.alpha_2.toLowerCase()}.png`
      results.push({
        name: country.names,
        cca3: country.codes.alpha_3,
        capital: country.capitals?.map((item) => item.name),
        region: country.region,
        population: country.population,
        latlng: country.latlng,
        flags: {
          png: country.flag?.url_png || flag,
          svg: country.flag?.url_svg || flag,
          alt: country.flag?.description,
        },
      })
    }
    more = result.data.meta?.more ?? false
    offset += 100
  }
  return [...results, customCountry]
}

export function useCountries() {
  const apiKey = import.meta.env.VITE_REST_COUNTRIES_API_KEY?.trim()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(Boolean(apiKey))
  const [error, setError] = useState(apiKey ? '' : 'Add VITE_REST_COUNTRIES_API_KEY to the root .env file and restart the app.')
  useEffect(() => {
    const controller = new AbortController()
    if (!apiKey) {
      return () => controller.abort()
    }
    fetchCountries(apiKey, controller.signal)
      .then(setCountries)
      .catch((err: unknown) => {
        if (err instanceof Error && err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })
    return () => controller.abort()
  }, [apiKey])
  return { countries, loading, error }
}
