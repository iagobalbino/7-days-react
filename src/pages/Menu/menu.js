import React, { Component } from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <div className='Menu'>
      <h1 className='Logo'>Logo</h1>

      <li className='Navegacao'>
        <ul>Como fazer / </ul>
        <ul>Ofertas / </ul>
        <ul>Depoimentos / </ul>
        <ul>Videos / </ul>
        <ul>Meu carrinho</ul>
      </li>
    </div>
  );


};