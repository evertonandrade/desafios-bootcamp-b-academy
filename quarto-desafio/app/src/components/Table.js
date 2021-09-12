import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: var(--radius);
  border-collapse: collapse;
  table-layout: fixed;
`;

const THead = styled.thead`
  // TODO:
`;

const TFoot = styled.tfoot`
  // TODO:
`;

const TBody = styled.tbody`
  // TODO:
`;

const TR = styled.tr`
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.4em;
  &:hover {
    background: #eee;
  }
`;

const TH = styled.th`
  background-color: var(--color-light);
  padding: 0.6em;
  font-size: 0.8em;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const TD = styled.td`
  padding: 0.6em;
  text-align: center;
`;

const Table = ({ children, ...props }) => {
  return <StyledTable {...props}>{children}</StyledTable>;
};

Table.Head = ({ children, ...props }) => {
  return <THead {...props}>{children}</THead>;
};

Table.Body = ({ children, ...props }) => {
  return <TBody {...props}>{children}</TBody>;
};

Table.Foot = ({ children, ...props }) => {
  return <TFoot {...props}>{children}</TFoot>;
};

Table.TH = ({ children, ...props }) => {
  return <TH {...props}>{children}</TH>;
};

Table.TR = ({ children, ...props }) => {
  return <TR {...props}>{children}</TR>;
};

Table.TD = ({ children, ...props }) => {
  return <TD {...props}>{children}</TD>;
};

export default Table;
