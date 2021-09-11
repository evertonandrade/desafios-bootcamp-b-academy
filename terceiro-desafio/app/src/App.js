import { useEffect, useState } from 'react';

import FormCar from './components/FormCar';
import TableCar from './components/TableCar';

const formFields = [
  {
    id: 'image',
    label: 'Imagem',
    type: 'url',
  },
  {
    id: 'brandModel',
    label: 'Marca / Modelo',
    type: 'text',
  },
  {
    id: 'year',
    label: 'Ano',
    type: 'number',
  },
  {
    id: 'plate',
    label: 'Placa',
    type: 'text',
  },
  {
    id: 'color',
    label: 'Cor',
    type: 'color',
  },
];

function App() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/cars')
      .then((response) => response.json())
      .then((json) => setCars([...json]));
  }, []);

  return (
    <div className="cars">
      <FormCar
        form={form}
        formFields={formFields}
        setForm={setForm}
        setCars={setCars}
      />
      <TableCar cars={cars} setCars={setCars} />
    </div>
  );
}

export default App;
