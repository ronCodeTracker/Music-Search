import {useState, useRef} from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery'
import { DataContext } from './context/DataContext'
// use curly braces because DataContext did not use default

import { SearchContext } from './context/SearchContext'

function App() {
    //let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term='

    /*
    useEffect(() => {
        if (search) {
            //console.log(term)
            const fetchData = async () => {
                document.title = `${search} Music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    setData(resData.results)
                } else {
                    setMessage('Not Found')
                }
            }
            fetchData()
        }
    },[search])
    */


    const handleSearch = (e, term) => {
        e.preventDefault()
        // fetch data
        const fetchData = async () => {
            document.title = `${term} Music`
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
        
    }

  return (
      <div>
          <SearchContext.Provider value={{
              term: searchInput,
              handleSearch: handleSearch
          }}>
              <SearchBar/>
          </SearchContext.Provider>
          {message}
          <DataContext.Provider value={data} >
          <Gallery/>
          </DataContext.Provider>
    </div>
  );
}

export default App;
