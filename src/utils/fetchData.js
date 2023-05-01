const API_KEY = "e893e8c32cmsh248eaff5e87972fp132e8ejsnd755f8bb5e25"
export const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'        
        }
      
};
export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}