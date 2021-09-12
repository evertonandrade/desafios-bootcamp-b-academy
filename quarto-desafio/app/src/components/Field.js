import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: var(--radius);
  background: #eee;
  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color);
    background: white;
    box-shadow: 0 0 0 3px var(--color-light);
  }
`;

function Field({ form, id, label, type, handleChange, ...props }) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        value={form[id]}
        onChange={handleChange}
        {...props}
      />
    </>
  );
}

export default Field;
