import React, { createContext, useState } from 'react'
import ListItems from './components/ListItems'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import './index.css'

export const PlanContext = createContext();
export const addOnsContext = createContext();
export const PersonalInfoContext = createContext();

const App = () => {

    const [step, setStep]= useState(0);

    const [plan, setPlan]= useState("");
    const [price, setPrice]= useState('');
    const [addons, setAddOns] = useState([]);
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [error, setError] = useState(false);
    
    const [personalInfo, setPersonalInfo] = useState({
      name: "",
      email: "",
      phone: ""
    })

  const changePlan = (newPlan, newPrice) => {
    setPlan(newPlan);
    setPrice(newPrice);
  };

  const handleToggle = () => {
    setBillingCycle((prevCycle) => (prevCycle === 'monthly' ? 'yearly' : 'monthly'));
  };


  const handleToggleAddOn = (addOn) => {
    setAddOns((prevAddOns) => {
      if (prevAddOns.some((item) => item.id === addOn.id)) {
        return prevAddOns.filter((item) => item.id !== addOn.id);
      } else {
        return [...prevAddOns, addOn];
      }
    });
  };
  

  const handleNextStep = () => {
    if (plan == ''){
      setPlan(null)
    }
	if ( plan === null) {
      setError(true)
			setStep(1);
		} else{
     
      
      setStep(step + 1);
    }
  };
  

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    };
  };

  const renderComponent = () => {
    
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <AddOns />;
      case 3:
        return <Summary />;
      case 4:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    };
 
  };

  let word = "Next Step";

  if( step === 3){
     word = "Confirm";

  }

  

  return (
		<PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo, handleNextStep }}>
			<addOnsContext.Provider
				value={{ addons, setAddOns, handleToggleAddOn, billingCycle, handleToggle }}
			>
				<PlanContext.Provider
					value={{
						plan,
						changePlan,
						price,
						billingCycle,
						setBillingCycle,
						handleToggle,
            error,
            setError
					}}
				>
					<div className='container'>
						<div className='left-section'>
							<ListItems value={step} />
						</div>
						<div className='right-section'>
							<div className='all'>{renderComponent()}</div>
							{step !=0  && step <4 && (
								<div className={`${step ==  0 ? "button-f" : "button-o"}`}>
									{step > 0 && (
										<button
											className='button-g'
											onClick={handlePreviousStep}
										>
											Go Back
										</button>
									)}
									{step > 0 && (
										<button
											className='button-n'
											onClick={handleNextStep} 
										>
											{word}
										</button>
									)}
								</div>
							)}
						</div>
					</div>
				</PlanContext.Provider>
			</addOnsContext.Provider>
		</PersonalInfoContext.Provider>
  );
};


export default App;