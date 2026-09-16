export type Country = {
  name: { common: string; official: string }
  cca3: string
  capital?: string[]
  region: string
  population: number
  latlng?: [number, number]
  flags: { png: string; svg: string; alt?: string }
}
