import React from 'react';
import './About.css'; // Підключення файлу зі стилями
import photo from './remp.jpg'; // Шлях до фотографії
// import freze from './samsung.jpg';
// import tv from './sontTV.jpg'
// import wash from './images (3).jpg'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="square">
          <p>Новий гіпермаркет міста Львів</p>
          <img src={photo} alt="Фото" />
        </div>
      </div>

      {/* <div className="seller-container">
        <div className="into">
          <p>Пропонуємо найкращий товар</p>
          <p>Холодильник Samsung.   Ціна:19000</p>
          <img src={freze} alt="холодильник" />
          <button className="buy-button">Купити</button>
        </div>
      </div>

      <div className="tv-product">
          <div className="into">
            <p>Насолоджуйтеся найкрашим</p>
            <p>Телевізор Sonyn 55X81J.  Ціна:25600</p>
            <img src={tv} alt="телик" />
            <button className="buy-button">Купити</button>
          </div>
        </div>

        <div className="Cooker-product">
          <div className="into">
            <p>Оновлення в душовії</p>
            <p>Змішувач Water House Round New.  Ціна:1100</p>
            <img src={wash} alt="змішувач" />
            <button className="buy-button">Купити</button>
          </div>
        </div> */}
    </>
  );
};

export default About;
