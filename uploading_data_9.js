'use strict';
async function fetchDataFromAPI(url) 
{
  try 
  {
    const response = await fetch(url);
    if (!response.ok) 
      {
      throw new Error(`Ошибка! Статус: ${response.status}`);
      }
    const data = await response.json();
    return data;
  } 
  catch (error) 
  {
    console.error("Ошибка при получении данных:", error);
  }
}

const apiUrl = 'http://example.com/wp-json/wp/v2/posts';

fetchDataFromAPI(apiUrl)
  .then(data => 
    {
    console.log("Данные из API:", data);
    })
  .catch(error => 
    {
    console.error("Не удалось получить данные:", error);
    });