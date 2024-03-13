//connection to rapid API

export const exerciseOptions =  {
    method: 'GET',
    params: {limit: '100'},
    headers: {
  
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'ed96f2bf3dmsh37edf7d47ad340bp1e5f55jsn44f4edab5fa2',
    }
  };


 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'ed96f2bf3dmsh37edf7d47ad340bp1e5f55jsn44f4edab5fa2',
     
    }
  };
  
  
export const fetchData = async (url, youtubeOptions) => {
    const response = await fetch(url, youtubeOptions);  // to fetch url
    const data = await response.json();          // to extract

    return data;
}

