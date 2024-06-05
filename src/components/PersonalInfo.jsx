import React, { useContext, useState } from 'react'
import { PersonalInfoContext } from '../App';

const PersonalInfo = () => {

  const {personalInfo, setPersonalInfo, handleNextStep} = useContext(PersonalInfoContext);
  const [errors, setErrors] = useState({});

   const handleChange = (e) => {
		const { name, value } = e.target;

		// Validate phone number input to only accept numerical values
		if (name === 'phone') {
			if (!/^[\s+\d]{0,15}$/.test(value)) {
				// If not a number, do nothing
				return;
			}
		}

		// Validate alphabetic input to only accept letters
		if (name === 'name') {
			// Assuming 'name' is the input field for alphabets
			if (!/^[a-z A-Z]*$/.test(value)) {
				// If not an alphabet, do nothing
				return;
			}
		}
		setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
   };

  const validate = () => {
		let tempErrors = {};
		if (!personalInfo.name) tempErrors.name = 'This field is required';
		if (!personalInfo.email) tempErrors.email = 'This field is required';
		if (!personalInfo.phone) tempErrors.phone = 'This field is required';
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
  };

    const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			handleNextStep();
			console.log('Form is valid');
		} else {
			console.log('Form has errors');
		}
	};

  return (
		<>
			<div className='all1'>
				<div className='header'>
					<h2>Personal Info</h2>
					<p>Please provide your name, email address, and phone number.</p>
				</div>
				<div className='form'>
					<form onSubmit={handleSubmit}>
						<div className='innerform'>
							<div>
								<div className='form-group'>
									<label htmlFor='name'>
										Name{' '}
										{errors.name && (
											<span className='error'>{errors.name}</span>
										)}
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={personalInfo.name}
										onChange={handleChange}
										placeholder='Harry Potter'
										// pattern='/^[a-z A-Z]*$/'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='email'>
										Email Address
										{errors.email && (
											<span className='error'>{errors.email}</span>
										)}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={personalInfo.email}
										onChange={handleChange}
										placeholder='harrypotter@example.com'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='phone'>
										Phone Number
										{errors.phone && (
											<span className='error'>{errors.phone}</span>
										)}
									</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										value={personalInfo.phone}
										onChange={handleChange}
										placeholder='e.g. +1 234 567 890'
										// pattern='\d*'
										title='Please enter a valid phone number'
									/>
								</div>
							</div>
							<div className='button'>
								<button className='button-new'>Next Step</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
  );
}

export default PersonalInfo;