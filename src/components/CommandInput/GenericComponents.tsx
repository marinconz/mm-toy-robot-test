import styled from 'styled-components';

const CommandLineLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CommandLineInput = styled.input`
  border: 1px solid grey;
  font-size: 1rem;
  border-radius: 8px;
  padding: 10px 10px;
  width: 400px;
`;

const CommandLineSubmit = styled.button`
  background: #95cc8b;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Error = styled.p`
  color: red;
  font-size: 1rem;
`;

export { CommandLineSubmit, Error, CommandLineInput, CommandLineLabel, Paragraph };
