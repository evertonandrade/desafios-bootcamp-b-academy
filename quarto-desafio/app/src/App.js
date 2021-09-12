import { useEffect, useState } from 'react';

import GlobalStyles from './GlobalStyles';
import FormCar from './components/FormCar';
import TableCar from './components/TableCar';
import Wrapper from './components/Wrapper';

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
    <>
      <GlobalStyles />
      <Wrapper>
        <FormCar
          form={form}
          formFields={formFields}
          setForm={setForm}
          setCars={setCars}
        />
        <TableCar cars={cars} setCars={setCars} />
      </Wrapper>
    </>
  );
}

export default App;
