import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error('Не удалось загрузить изображение');
        }
        const data = await response.json();
        setDogImage(data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDogImage();
  }, []);

  const fetchNewDog = () => {
    setLoading(true);
    setError(null);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Случайные собаки</h1>
      <div className="dog-container">
        {loading && <p>Загрузка...</p>}
        {error && <p className="error">Ошибка: {error}</p>}
        {dogImage && !loading && (
          <>
            <img src={dogImage} alt="Случайная собака" className="dog-image" />
            <button onClick={fetchNewDog} className="new-dog-btn">
              Показать другую собаку
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;