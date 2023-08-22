import React, { Component } from 'react';
import './AssinaturaNewsletter.css';

export default function AssinaturaNewsletter() {
  return (
    <div>
      <form action="" className="assinatura">
        <input type="text" name="email" value="" placeholder="Insira seu e-mail" className="email" />
        <input type="submit" value="Assinar newsletter" className="botao" />
      </form>
    </div>
  );
};