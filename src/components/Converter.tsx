import React, { useState } from "react"

interface IForm {
	color: string,
}

export const Converter = () => {
  const [form, setForm] = useState<IForm>({
		color: '#',
	})
	const [colorRGB, setColorRGB] = useState<string>('');

	const body: HTMLBodyElement = document.querySelector("body");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { color } = form;

		if (/^#[0-9a-fA-F]{6}$/.test(color)) {
			const r = parseInt(color.slice(1,3), 16);
			const g = parseInt(color.slice(3,5), 16);
			const b = parseInt(color.slice(5), 16);
			setColorRGB(`rgb(${r},${g},${b})`);
			body.style.background = color;
			
		} else {
			setColorRGB('Ошибка!');
			body.style.background = 'red';
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setForm(prevForm => ({
			...prevForm,
			color: value,
		}))
	}

  return (
		<>
			<form onSubmit={handleSubmit}>
        <input type='text' name='color' value={form.color} onChange={handleChange} />
			</form>
			<div className="rgb">
				<span>{colorRGB}</span>
			</div>
		</>
  )
}
