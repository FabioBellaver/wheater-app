const key = 'bb89d2897b1a48b492d231651221106';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(url);

  const data = await fetchResponse.json();

  if (fetchResponse.status === 400) {
    return Promise.reject();
  }

  return data;
};

export default fetchData;
