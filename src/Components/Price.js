// Pricing.js

import React from 'react';
import '../Css/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['X', 'X', 'X', '25', '300 Words', 'X'],
    },
    {
      name: 'Standard Plan',
      price: '$19.99/month',
      features: ['X', 'X', 'X', '25', '4000 Words', 'LIMITED'],
    },
    {
      name: 'Premium Plan',
      price: '$29.99/month',
      features: ['X', 'X', 'X', '25', 'UNLIMITED', 'Priority Support'],
    },
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
            <th></th>
            {featureList.map((item, index) => (
              <th key={index} className="feature-header">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index} className="pricing-row">
              <td className="plan-name">{plan.name}</td>
              {plan.features.map((feature, i) => (
                <td key={i} className={feature === 'X' ? 'feature-enabled' : 'feature-disabled'}>
                  {feature}
                </td>
              ))}
              <td>
                <button className="subscribe-button">Subscribe</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
