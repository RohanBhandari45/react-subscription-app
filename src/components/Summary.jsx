import React, { useContext } from 'react';
import { PlanContext } from '../App';
import { addOnsContext } from '../App';

const Summary = () => {
	let newPrice = 0;

	const { plan, price, handleToggle, billingCycle, changePlan } = useContext(PlanContext);
	const { addons } = useContext(addOnsContext);

	const handleChangePlan = () => {
		handleToggle();
	};

	if (billingCycle === 'monthly') {
		newPrice = addons.price / 'mo';
	} else {
		newPrice = (addons.price * 10) / 'yr';
	}


  const addOnsTotalPrice = addons.reduce((total, addOn) => {
		return total + addOn.price;
  }, 0);

     const totalPrice = addOnsTotalPrice + price;


	return (
		<>
			<div className='header'>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
			</div>
			<div className='plan-overview'>
				<div className='plan-details'>
					<span className='plan-type'>{plan}</span>
					<span className='plan-cost'>
						${billingCycle === 'yearly' ? price * 10 : price}/
						{billingCycle === 'yearly' ? 'yr' : 'mo'}
					</span>
				</div>
				<div className='change-link'>
					<b>
						<span onClick={handleChangePlan}>Change</span>
					</b>
				</div>
				<div className='line'>
					<hr />
				</div>
				<div className='summary'>
					{addons.map((addon, index) => (
						<div
							className='content'
							key={index}
						>
							<span>{addon.name}</span>
							<span>
								+${billingCycle === 'yearly' ? addon.price * 10 : addon.price}/
								{billingCycle === 'yearly' ? 'yr' : 'mo'}
							</span>
						</div>
					))}
				</div>
				{billingCycle === 'monthly' && (
					<div className='total-cost'>
						<span> Total (per month) </span>
						<span>${totalPrice}/mo</span>
					</div>
				)}
				{billingCycle === 'yearly' && (
					<div className='total-cost'>
						<span>Total (per year)</span>
						<span>${totalPrice * 10}/yr</span>
					</div>
				)}
			</div>
		</>
	);
};

export default Summary;
