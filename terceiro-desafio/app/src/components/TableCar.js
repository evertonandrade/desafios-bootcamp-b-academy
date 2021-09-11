import Button from './Button';

function TableCar({ cars, setCars }) {
  function handleDeleteCar(event, plate) {
    fetch('http://localhost:3333/cars', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plate }),
    }).then((response) => {
      if (response.ok) {
        setCars((prevCars) => prevCars.filter((car) => car.plate !== plate));
      }
    });
  }

  return (
    <table className="table">
      <caption>Carros</caption>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca / Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {cars.length === 0 && (
          <tr>
            <td colSpan={6}>Nenhum carro cadastrado</td>
          </tr>
        )}
        {cars.map(({ image, brandModel, plate, year, color }) => (
          <tr key={plate}>
            <td>
              <img src={image} alt="imagem do carro" width="100px" />
            </td>
            <td>{brandModel}</td>
            <td>{year}</td>
            <td>{plate}</td>
            <td>
              <span style={{ backgroundColor: color }}>{color}</span>
            </td>
            <td>
              <Button
                kind="danger"
                onClick={(event) => handleDeleteCar(event, plate)}
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableCar;
