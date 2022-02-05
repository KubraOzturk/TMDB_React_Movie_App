import React from 'react';
 import { fetchSearchResults } from './index';
import ListItem from './ListItem';
import SearchInput from './SearchInput';
import debounce from 'lodash.debounce';


const fetchData = async (query, cb) => {
  console.warn('fetching ' + query);
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

export default function SearchBox() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const img_url="http://image.tmdb.org/t/p/w500"
  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]);
  
  
  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={e => {
          setQuery(e.target.value);
        }}
      />
      {console.log(results),
      results?.results?.map((result, index) => (
        <div key={index}>
          <ListItem
            title={result.title}
            imageUrl={`${img_url}${result.poster_path}`}
            caption={result.release_date}
            id={result.id}
          />
          
        </div>
      ))}
    </div>
  );
}