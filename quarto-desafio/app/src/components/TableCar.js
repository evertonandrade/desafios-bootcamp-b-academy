import Button from './Button';
import Table from './Table';
import Image from './Image';
import Color from './Color';

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
    <Table>
      <Table.Head>
        <Table.TR>
          <Table.TH>Imagem</Table.TH>
          <Table.TH>Marca / Modelo</Table.TH>
          <Table.TH>Ano</Table.TH>
          <Table.TH>Placa</Table.TH>
          <Table.TH>Cor</Table.TH>
          <Table.TH>Ações</Table.TH>
        </Table.TR>
      </Table.Head>
      <Table.Body>
        {cars.length === 0 && (
          <Table.TR>
            <Table.TD colSpan={6}>Nenhum carro cadastrado</Table.TD>
          </Table.TR>
        )}
        {cars.map(({ image, brandModel, plate, year, color }) => (
          <Table.TR key={plate}>
            <Table.TD>
              <Image src={image} />
            </Table.TD>
            <Table.TD>{brandModel}</Table.TD>
            <Table.TD>{year}</Table.TD>
            <Table.TD>{plate}</Table.TD>
            <Table.TD>
              <Color bgColor={color}>{color}</Color>
            </Table.TD>
            <Table.TD>
              <Button
                kind="danger"
                onClick={(event) => handleDeleteCar(event, plate)}
              >
                Excluir
              </Button>
            </Table.TD>
          </Table.TR>
        ))}
      </Table.Body>
    </Table>
  );
}

export default TableCar;
