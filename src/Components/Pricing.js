// Pricing.js

import React from 'react';
import '../Css/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'BASIC',
      price: '$9.99/month',
      features: ['X', 'X', 'X', '25', '300 Words', 'X'],
    },
    {
      name: 'PRO',
      price: '$19.99/month',
      features: ['X', 'X', 'X', '25', '4000 Words', 'LIMITED'],
    },
    {
      name: 'DIAMOND',
      price: '$29.99/month',
      features: ['X', 'X', 'X', '25', 'UNLIMITED', 'Priority Support'],
    },
    // Add more plans as needed
  ];

  const featureList = [
    { name: 'VOLUME BASED PRICING' },
    { name: 'CONTENT' },
    { name: 'API ACCESS' },
    { name: 'TEMPLATESLIMITED' },
    { name: 'AI TEXT USAGE' },
    { name: 'SUPPORT' },
  ];

  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Flexible Pricing</h2>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {/* Pricing rows */}
          {plans.map((plan, index) => (
            <tr key={index} className="pricing-row">
              <td className="plan-name">{plan.name}</td>
              <td className="plan-price">{plan.price}</td>
              <td className="plan-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className={feature === 'X' ? 'feature-enabled' : 'feature-disabled'}>
                    {feature}
                  </div>
                ))}
              </td>
            </tr>
          ))}
          {/* Feature list row */}
          <tr className="feature-row">
            <td></td>
            <td></td>
            <td className="feature-list">
              {featureList.map((item, index) => (
                <div key={index} className="feature-name">
                  {item.name}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default Pricing;
