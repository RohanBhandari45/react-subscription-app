import React, {useContext} from 'react';
import { addOnsContext } from '../App';

const AddOns = () => {
  const { addons, handleToggleAddOn, billingCycle } = useContext(addOnsContext);

  const availableAddOns = [
    { id: 'online-service', name: 'Online service', description: 'Access to multiplayer games', price: 1 },
    { id: 'larger-storage', name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
    { id: 'customizable-profile', name: 'Customizable Profile', description: 'Custom theme on your profile', price: 2 }
  ];

  const getPrice = (price) => {
    return billingCycle === 'yearly'  ? price * 10 : price;
  };

  return (
    <>
      <div className='header'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="select">
        {availableAddOns.map((addOn) => (
          <div 
          key={addOn.id} 
          className={`addon ${addons.some(item => item.id === addOn.id) ? 'selected-a' : ''}`}>
            <input
              type="checkbox"
              id={addOn.id}
              name={addOn.id}
              checked={addons.some(item => item.id === addOn.id)}
              onChange={() => handleToggleAddOn(addOn)}
            />
            <label htmlFor={addOn.id}>
              <div>
                <h3>{addOn.name}</h3>
                <p>{addOn.description}</p>
              </div>
              <span>+${getPrice(addOn.price)}/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddOns;
