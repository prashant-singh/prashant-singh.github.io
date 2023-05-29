import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const FDCalculator = () => {
	const [principal, setPrincipal] = useState('10000');
	const [interest, setInterest] = useState(5);
	const [years, setYears] = useState(1);
	const [finalValue, setFinalValue] = useState(0);

	useEffect(() => {
		const calculateCumulativeFDValue = () => {
			const interestRateDecimal = interest / 100;
			const accumulatedAmount = principal * Math.pow(1 + interestRateDecimal, years);
			return accumulatedAmount.toFixed(2); // Returns the accumulated amount rounded to 2 decimal places
		};

		const calculatedValue = calculateCumulativeFDValue();
		setFinalValue(calculatedValue);
	}, [principal, interest, years]);

	const handlePrincipalChange = (e) => {
		const minValue = 10000; // Minimum value allowed
		const newValue = Math.max(Number(e.target.value), minValue).toString(); // Convert the value to a string
		setPrincipal(newValue);
	};

	const handleYearsChange = (e) => {
		const minValue = 1; // minimum year
		const newValue = Math.max(Number(e.target.value), minValue);
		setYears(newValue);
	};

	const formatToIndianCurrency = (value) => {
		if (value >= 10000000) {
			// Format in crores if the value is 1 crore or more
			return (value / 10000000).toLocaleString('en-IN', {
				style: 'currency',
				currency: 'INR',
				minimumFractionDigits: 2,
			}) + ' Cr';
		} else if (value >= 100000) {
			// Format in lakhs if the value is 1 lakh or more
			return (value / 100000).toLocaleString('en-IN', {
				style: 'currency',
				currency: 'INR',
				minimumFractionDigits: 2,
			}) + ' Lacs';
		} else {
			// Format normally for values less than 1 lakh
			return value.toLocaleString('en-IN', {
				style: 'currency',
				currency: 'INR',
				minimumFractionDigits: 2,
			});
		}
	};


	const showFinalValue = () => {
		return (
			<div>
				<div className="alert alert-primary mt-4" role="alert">
					<div className='h6'>
						Investment Amount: <small className='h5 text-dark'>{formatToIndianCurrency(Number(principal))}</small>
					</div>
					<div className='h6'>
						Interest Amount: <small className='h5 text-dark'>{formatToIndianCurrency(finalValue - principal)}</small>
					</div>
					<div className='h6'>
						Total Amount: <small className='h5 text-dark'>{formatToIndianCurrency(Number(finalValue))}</small>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='container justify-content-center my-3' style={{ maxWidth: '600px' }}>
			<div className='border border-dark border-top-0 border-end-0 border-start-0 my-2'>
				<div className=' d-flex justify-content-center display-6'>
					FD CALCULATOR
				</div>
			</div>
			<Form className='border p-4'>
				<Form.Group className="mb-3" controlId="formPrincipal">
					<label className="col col-form-label h2">Investment Amount</label>
					<Form.Control type="number" placeholder="Principal" value={principal} min={10000} onBlur={handlePrincipalChange} onChange={(e) => setPrincipal(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formInterest">
					<label className="form-label">Rate of Interest (p.a) <small className='h4'>{interest}%</small></label>
					<input type="range" className="form-range" min="5" max="15" step="0.1" value={interest} onChange={(e) => setInterest(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formYears">
					<label className="col col-form-label h2">Years</label>
					<Form.Control type="number" placeholder="Years" value={years} onBlur={handleYearsChange} onChange={(e) => setYears(e.target.value)} />
				</Form.Group>
			</Form>
			{finalValue > 0 && showFinalValue()}
		</div>
	);
};

export default FDCalculator;
