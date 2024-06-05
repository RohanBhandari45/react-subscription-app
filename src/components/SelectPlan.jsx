import React, {useContext, useState} from 'react'
import arcade from '/arcade.svg'
import advanced from '/advanced.svg'
import pro from '/pro.svg'
import {PlanContext } from '../App'

const SelectPlan = () => {

  const {changePlan, billingCycle, handleToggle, plan, error, setError} = useContext(PlanContext);
 
  const plans = [
    {name: 'Arcade', monthly: 9, yearly: 90},
    {name: 'Advanced', monthly: 12, yearly: 120},
    {name: 'Pro', monthly: 15, yearly: 150}
  ];

  return (
		<>
			<div className='header'>
				<h2>Select Your Plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>
			<div className='box'>
				{plans.map((plans, index) => (
					<div
						key={index}
						className={`plan ${plan === plans.name ? 'selected-p' : ''}`}
						onClick={() => {
							changePlan(plans.name, plans.monthly);
							setError(false);
						}}
					>
						<img
							className='img'
							src={index === 0 ? arcade : index === 1 ? advanced : pro}
							alt='Logo'
						/>
						<div className='item'>
							<h3 className='choose'> {plans.name} </h3>
							<p className='cost'>
								{billingCycle === 'monthly'
									? `$${plans.monthly}/mo`
									: `$${plans.yearly}/yr`}
							</p>
							{billingCycle === 'yearly' && (
								<p className='discount'>
									<b>2 months free</b>
								</p>
							)}
						</div>
					</div>
				))}
			</div>
			<div className='toggle'>
				<p>monthly</p>
				<div
					className='toggle-switch'
					onClick={handleToggle}
				>
					<div
						className={`toggle-button ${
							billingCycle === 'yearly' ? 'yearly' : 'monthly'
						}`}
					></div>
				</div>
				<p>yearly</p>
			</div>
			{error && <p className='error'>Please select a plan</p>}
		</>
  );
};

export default SelectPlan;