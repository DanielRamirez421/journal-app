import { useState } from 'react';
export const useForm = (initialForm = {}) => {

	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		if (!name) {
			throw 'No NAME attribute on input element';
		}


		if (!value) {
			throw 'No VALUE attribute on input element';
		}

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};