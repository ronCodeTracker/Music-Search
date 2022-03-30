import {useState, useEffect} from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery'


function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch('https://itunes.apple.com/search?term=the%20amy%20grant')
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
    },[search])

  return (
    <div>
          <SearchBar />
          {message}
          <Gallery data={data}/>
          
    </div>
  );
}

export default App;
