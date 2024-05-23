import React, { useState } from 'react';
import './ExtInitiatives.css';

const initiativesData = [
  {
    title: "Geothermal Heat Pumps",
    content: "Benefits: Geothermal systems use the stable temperature of the earth to heat and cool homes efficiently.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Varmepumpe.jpg",
  },
  {
    title: "Energy-Efficient Appliances",
    content: "Benefits: Using ENERGY STAR certified appliances reduces energy consumption and lowers utility bills.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/CES_2012_-_Panasonic_energy_efficient_appliances_%286764016707%29.jpg",
  },
  {
    title: "Smart Thermostats",
    content: "Benefits: Smart thermostats optimize heating and cooling, reducing energy consumption. Incentives: Some utility companies offer discounts or rebates for installing smart thermostats.",
    image: "https://www.mrright.in/ideas/wp-content/uploads/2020/10/Choosing-Smart-Thermostat-for-Home.jpg",
  },
];

const bibliographyLinks = [
  { text: "Public Domain Files Image", url: "http://res.publicdomainfiles.com.s3.amazonaws.com/pdf_dl/193/14020289414283.jpg" },
  { text: "Geothermal Heat Pump Image", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Varmepumpe.jpg" },
  { text: "Energy Efficient Appliances Image", url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/CES_2012_-_Panasonic_energy_efficient_appliances_%286764016707%29.jpg" },
  { text: "ENERGY STAR", url: "https://www.energystar.gov/product" },
  { text: "EPA Water Archive", url: "https://archive.epa.gov/water/archive/web/html/index-17.html" },
  { text: "EnergySage - Small Wind Turbines Overview", url: "https://www.energysage.com/about-clean-energy/wind/small-wind-turbines-overview/" },
  { text: "DSIRE USA", url: "https://www.dsireusa.org/" },
  { text: "Greentumble - Renewable Energy Options", url: "https://greentumble.com/renewable-energy-options-for-the-eco-friendly-house#energy" },
  { text: "Greentumble - Solar Energy Pros and Cons", url: "https://greentumble.com/solar-energy-pros-and-cons#variety" },
  { text: "EnergySage - Solar Panel Cost", url: "https://www.energysage.com/local-data/solar-panel-cost/?utm_term=solar%20energy%20cost&utm_campaign=TV%20-%20Search%20-%20Solar%20-%20NewStates&utm_source=adwords&utm_medium=ppc&hsa_acc=7376182020&hsa_cam=20825920772&hsa_grp=153531306422&hsa_ad=683160587029&hsa_src=g&hsa_tgt=kwd-299176755&hsa_kw=solar%20energy%20cost&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw6auyBhDzARIsALIo6v9StwVdedI7tGxSzGUE-ry9rPIIxKb5AVNYjeRQNZYni6zAuJajJyQaAgafEALw_wcB" },
  { text: "IRENA - Hydropower Image", url: "https://www.irena.org/-/media/Images/IRENA/Agency/Press-Release/2021/Feb/Hydropower-(1).jpg?h=627&w=1200&la=en&hash=63E09A6F13907254483C8741BC57ADF155506FB1" },
  { text: "DOE - Hydropower and Marine Energy Tax Credit Opportunities", url: "https://www.energy.gov/eere/water/inflation-reduction-act-tax-credit-opportunities-hydropower-and-marine-energy#:~:text=Summary%20of%20Federal%20Tax%20Credits%20for%20Hydropower%20and%20Marine%20Energy&text=%245.50%2Fmegawatt%2Dhour%20%2B%20additional,projects%20beginning%20construction%20before%202025" },
  { text: "DOE - Wind Industry Federal Incentives Fact Sheet", url: "https://www.energy.gov/sites/default/files/2021-04/us-wind-industry-federal-incentives-funding-partnership-opportunities-fact-sheet.pdf" },
  { text: "Forbes - Cost of Solar Panels", url: "https://www.forbes.com/home-improvement/solar/cost-of-solar-panels/" }
];

const ExtInitiatives = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (index) => {
    setVisibleContent(visibleContent === index ? null : index);
  };

  return (
    <div className="initiatives-container">
      <div className="intro">
        <h2>Energy-Efficient Products</h2>
        <ul>
          <li>Heat pumps: Efficiently heat and cool homes by transferring heat instead of generating it.</li>
          <li>Heat pump water heaters: Use 70% less energy, saving significant costs annually.</li>
          <li>Energy-efficient windows: Reduce heat exchange and air leaks, lowering energy needed for heating and cooling.</li>
          <li>Insulation: Maintains desired indoor temperatures, reducing energy use.</li>
          <li>Smart thermostats: Automatically adjust temperatures based on user preferences and schedules, saving energy.</li>
          <li>Computer power management: Reduces energy consumption by switching to low-power modes when inactive.</li>
        </ul>
      </div>

      <div className="button-container">
        {initiativesData.map((initiative, index) => (
          <div key={index} className="initiative">
            <button
              onClick={() => toggleContent(index)}
              className={`initiative-button ${visibleContent === index ? 'clicked' : ''}`}
            >
              {initiative.title}
            </button>
            {visibleContent === index && (
              <div className="content">
                <p>{initiative.content}</p>
                <img src={initiative.image} alt={initiative.title} className="initiative-image" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="additional-info">
        <h3>Our Copyright Checklist and Work Log</h3>
        <a href="https://drive.google.com/file/d/139XJry2PWQHYwlU5v57yPaj4gGoEgo0S/view?usp=sharing" target="_blank" rel="noopener noreferrer">Click here to view</a>

        <h3>Bibliography</h3>
        <ul>
          {bibliographyLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExtInitiatives;