import { useContext } from 'react'
import { FiltersContext } from '../context/filtersContext.jsx'

export default function useFilter () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      const { category, minPrice } = filters

      const isCategory = category === 'all' || product.category === category
      const isMinPrice = product.price >= minPrice

      return isCategory && isMinPrice
    })
  }

  return { filters, filterProducts, setFilters }
}
