import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: var(--radius);
  transition: filter ease 0.1s;
  color: #fff;
  padding: 0.8rem 1.6rem;
  margin: 0.8rem 0.2rem;

  &:hover {
    filter: brightness(90%);
  }

  background-color: ${({ kind }) => {
    switch (kind) {
      case 'primary':
        return '#007bff';
      case 'secondary':
        return '#6c757d';
      case 'success':
        return '#28a745'
      case 'warnig':
        return '#ffc107'
      case 'danger':
        return '#dc3545';
      default:
        return '#343a40';
    }
  }};
`;

export default Button;
