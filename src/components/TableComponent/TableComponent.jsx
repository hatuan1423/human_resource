import Table from "react-bootstrap/Table";

function TableComponent(props) {
  const { headers, dataSource, renderCell } = props;

  return (
    <Table striped bordered hover variant="white">
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((item, rowIndex) => (
          <tr key={rowIndex}>{renderCell(item, rowIndex)}</tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
