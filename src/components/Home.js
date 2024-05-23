import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="header-image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png" alt="Green Energy" className="header-image" />
        <div className="header-text">Green Energy</div>
      </div>
      <div className="content">
        <h1>Why Choose Green Energy?</h1>
       
        <h3>Impact of Fossil Fuels</h3>
        <p>Fossil fuels, such as coal, oil, and gas, are the primary drivers of global climate change. They contribute over 75% of global greenhouse gas emissions and nearly 90% of all carbon dioxide emissions.</p>
        <p>As these emissions blanket the Earth, they trap the sun’s heat, causing global warming and climate change. The Earth is now warming faster than at any other time in recorded history. This rapid warming alters weather patterns and disrupts the natural balance, posing significant risks to all forms of life on our planet.</p>

        <h3>Environmental Benefits</h3>
        <p>Adopting energy-efficient practices reduces the reliance on fossil fuels, thereby decreasing greenhouse gas emissions and other pollutants from power plants. This improvement enhances both outdoor air quality and indoor air health.</p>

        <h3>Financial Benefits</h3>
        <p>Although energy-efficient products may have higher upfront costs, they offer substantial long-term savings. For instance, an energy-efficient water heater can significantly reduce energy bills over its lifetime. Additionally, rebates and discounts from utilities can help offset the initial costs.</p>

        <h3>Energy Equity</h3>
        <p>Energy efficiency lowers energy bills, reducing the financial burden on families, particularly those with high energy costs relative to their income. This helps to alleviate energy insecurity, making energy more affordable and improving living conditions.</p>

        <h3>Maximizing Energy Efficiency</h3>
        <p>To maximize energy efficiency and minimize energy losses, consider having an energy audit conducted on your home. This audit can identify areas where energy is being wasted, such as through windows and doors, or insufficient insulation in walls and attics. Also, ensure your appliances are energy-efficient. Services like Energy Star can help you find appliances that meet your needs.</p>
      </div>
    </div>
  );
};

export default Home;
