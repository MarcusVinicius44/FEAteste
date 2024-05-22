import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro from '../Contato.js'; // Certifique-se de que o caminho está correto
import { jest } from '@jest/globals';


test('deve submeter o formulário quando o botão Enviar é clicado', () => {
  // Renderiza o componente
  render(<Cadastro />);
  // Seleciona os elementos do formulário
  const nomeInput = screen.getByPlaceholderText('Digite seu nome:');
  const emailInput = screen.getByPlaceholderText('Digite seu e-mail:');
  const mensagemInput = screen.getByPlaceholderText('Digite sua mensagem');
  const submitButton = screen.getByRole('button', { name: /enviar/i });


  // Simula a inserção de dados nos campos do formulário
  fireEvent.change(nomeInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(mensagemInput, { target: { value: 'Olá, esta é uma mensagem de teste.' } });
  fireEvent.click(submitButton); // Simula o clique no botão Enviar

  


  // Adicione suas expectativas aqui, como verificar se a função handleCadastro foi chamada
  // ou se algum texto ou estado mudou após o envio do formulário.

  // Continuação do teste

// Espiona a função handleCadastro

// Verifica se a função foi chamada após o clique no botão
  
});
