import Button from './Button';
import Field from './Field';

function FormCar({ form, formFields, setForm, setCars }) {
  function handleChange(event) {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3333/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) setCars((prevCars) => [...prevCars, form]);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      {formFields.map(({ id, label, type }) => (
        <Field
          key={id}
          form={form}
          id={id}
          label={label}
          type={type}
          handleChange={handleChange}
          required
        />
      ))}
      <br />
      <Button kind="primary">Cadastrar</Button>
    </form>
  );
}

export default FormCar;
