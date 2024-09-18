export const exerciseOptions = {
  method: 'GET', 
	
	headers:{        
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com', 
	'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
	    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };