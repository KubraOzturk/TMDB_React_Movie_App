export const fetchSearchResults = async (query) => {
    if (query && query.length > 0) {
      const parsedQuery = query.replaceAll(' ', '+');
      const url = `https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&query=${parsedQuery}&page=1&include_adult=false`;
      const res = await fetch(url);
      const resJson = res.json();
      return resJson;
    } else {
      return [];
    }
  };
  