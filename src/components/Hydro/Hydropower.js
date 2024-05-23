import React, { useState } from 'react';
import HydroHeaderImage from './HydroHeaderImage';
import HydroTaxTable from './HydroTaxTable';
import HydroGraph from './HydroGraph';
import './HydroPower.css';

const HydroPower = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (contentId) => {
    setVisibleContent(visibleContent === contentId ? null : contentId);
  };

  return (
    <div>
      <HydroHeaderImage />
      <div className="content">
        <h2>About Hydro Power</h2>
        <p>Microhydropower systems are simple and consistent forms of renewable energy suitable for properties with flowing water. These systems typically generate up to 100 kilowatts of electricity and are ideal for homeowners, small business owners, farmers, and ranchers. A 10-kilowatt system can power a large home, small resort, or hobby farm.</p>

        <h3>Components of Microhydropower Systems</h3>
        <ul>
          <li>Water conveyance: Delivers water via a channel, pipeline, or penstock.</li>
          <li>Turbine, pump, or waterwheel: Converts the energy of flowing water into rotational energy.</li>
          <li>Alternator or generator: Converts rotational energy into electricity.</li>
          <li>Regulator: Controls the generator.</li>
          <li>Wiring: Delivers electricity.</li>
        </ul>

        <div className="hydro-button-container">
          <button onClick={() => toggleContent('types')} className={`hydro-button ${visibleContent === 'types' ? 'clicked' : ''}`}>
            Turbine Types
          </button>

          <button onClick={() => toggleContent('how')} className={`hydro-button ${visibleContent === 'how' ? 'clicked' : ''}`}>
            How Hydro Systems Work
          </button>

          <button onClick={() => toggleContent('benefits')} className={`hydro-button ${visibleContent === 'benefits' ? 'clicked' : ''}`}>
            Benefits of Hydro Systems
          </button>

          <button onClick={() => toggleContent('suitability')} className={`hydro-button ${visibleContent === 'suitability' ? 'clicked' : ''}`}>
            Suitability of Hydropower
          </button>

          <button onClick={() => toggleContent('costs')} className={`hydro-button ${visibleContent === 'costs' ? 'clicked' : ''}`}>
            Costs, Savings, and Financial Support
          </button>

          <button onClick={() => toggleContent('maintenance')} className={`hydro-button ${visibleContent === 'maintenance' ? 'clicked' : ''}`}>
            Maintenance
          </button>
        </div>

        {/* Content displayed below buttons */}
        {visibleContent && (
          <div className="content-details">
            {visibleContent === 'types' && (
              <div className="details">
                <p><strong>Impulse Turbines:</strong> Include Pelton and Turgo wheels. Pelton wheels use jet force to rotate double-cupped buckets, while Turgo wheels have angled jets for higher speed and efficiency.</p>
                <p><strong>Reaction Turbines:</strong> Depend on pressure and are highly efficient, typically used for large-scale projects. Propeller turbines, like the Kaplan, can be adapted for micro hydropower sites.</p>
              </div>
            )}

            {visibleContent === 'how' && (
              <div className="details">
                <p>Streams and rivers flow downhill, giving water potential energy. This potential energy is converted into kinetic energy in a turbine. The turbine drives a generator to produce electricity. The amount of electricity depends on the height and flow of the water, and the system's efficiency.</p>
              </div>
            )}

            {visibleContent === 'benefits' && (
              <div className="details">
                <p>Microhydropower systems offer continuous 24/7 operation, often producing all needed power. Excess electricity can be used for heating, making it cheaper for off-grid homes. They also reduce the carbon footprint with green, renewable energy with no harmful emissions.</p>
              </div>
            )}

            {visibleContent === 'suitability' && (
              <div className="details">
                <p>Hydropower is site-specific and requires a water source with sufficient flow and head. Suitable sites may be better for community energy projects. Consider the minimum flow during dry periods.</p>
              </div>
            )}

            {visibleContent === 'costs' && (
              <div className="details">
                <p>Installation costs vary by location and equipment. Maintenance costs are usually low, and systems are reliable. Savings depend on the system's electricity generation. There are financial support options like the Smart Export Guarantee Tariff and the closed Feed-in Tariff Scheme.</p>
              </div>
            )}

            {visibleContent === 'maintenance' && (
              <div className="details">
                <p>Hydropower systems can last 40-50 years with low maintenance. Potential damage from debris during floods can be minimized with proper screening of the intake.</p>
              </div>
            )}
          </div>
        )}

        <HydroTaxTable />
        <div className="graph-container">
          <h3>Hydro Power Incentives Comparison</h3>
          <HydroGraph />
        </div>
      </div>
    </div>
  );
}

export default HydroPower;