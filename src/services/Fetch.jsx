const callToApi = () => {
    // Llamamos a la API
    return fetch('//dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  };
  
  export default callToApi;