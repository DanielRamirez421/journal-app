import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => createValidators(), [formState]);



	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue] !== null) return false;
		}

		return true;
	}, [formValidation]);


	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};


	const onResetForm = () => setFormState(initialForm);


	const createValidators = () => {
		const formCheckedValues = {};
		for (const formField of Object.keys(formValidations)) {

			const formValue = formState[formField];
			const formValidation = formValidations[formField];

			// Daniel Code
			if (formValidation) {
				let errorMessages = [];

				formValidation.slice().reverse().forEach((validation) => {
					const [ validator, errorMessage ] = validation;
					const validationResult = validator(formValue);
					if (!validationResult) errorMessages.push(errorMessage);
				});

				formCheckedValues[`${ formField }Valid`] = errorMessages.length > 0 ? errorMessages[errorMessages.length - 1] : null;
				errorMessages = [];
			}

			// Github Code
			// if (formValidation) {
			// 	const [ validator, errorMessage ] = formValidation;
			// 	const validation = validator(formValue);
			// 	formCheckedValues[`${ formField }Valid`] = validation ? null : errorMessage;
			// }

			// Fernando Code
			// const [fn, errorMessage] = formValidations[formField];
			// formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
		}

		setFormValidation(formCheckedValues);
	};



	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,

		...formValidation,
		formValidation,
		isFormValid,
	};
};