export type Country = {
  name: {
    common: string
    official: string
    native?: Record<string, { common: string; official: string }>
  }
  cca3: string
  capital?: string[]
  region: string
  subregion?: string
  population: number
  borders?: string[]
  tlds?: string[]
  currencies?: { code: string; name: string; symbol?: string }[]
  languages?: { name: string; bcp47?: string }[]
  flags: { png: string; svg: string; alt?: string }
}
