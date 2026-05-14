import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const CountryDetails = ({ country }) => {
  return (
    <div>

      <h2>{country.name.common}</h2>

      <p>Capital: {country.capital?.[0]}</p>

      <p>Area: {country.area} km²</p>

      <p>
        Population: {country.population.toLocaleString()}
      </p>

      <h3>Languages</h3>

      <ul>
        {Object.values(country.languages || {}).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

    </div>
  )
}

const App = () => {

  const [countries, setCountries] = useState([])

  const [filter, setFilter] = useState('')


  useEffect(() => {

    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')

      .then(response => {
        setCountries(response.data)
      })

  }, [])


  const filtered = countries.filter(country =>
    country.name.common
      .toLowerCase()
      .includes(filter.toLowerCase())
  )


  let content


  if (filter === '') {

    content = <p>Search for a country</p>

  }

  else if (filtered.length > 10) {

    content = (
      <p>Too many matches, please be more specific</p>
    )

  }

  else if (filtered.length > 1) {

    content = (

      <ul>

        {filtered.map(country => (

          <li key={country.cca3}>
            {country.name.common}
          </li>

        ))}

      </ul>

    )

  }

  else if (filtered.length === 1) {

    content = (
      <CountryDetails country={filtered[0]} />
    )

  }

  else {

    content = <p>No matches found</p>

  }


  return (

    <div>

      <h1>Countries Information</h1>

      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for a country"
      />

      {content}

    </div>

  )
}

export default App