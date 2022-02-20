import s from './Modal.module.css'
import React, { Component } from 'react';

export default class Modal extends Component {
    componentDidMount() {
      console.log('Modal componentDidMount');
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
  
        this.props.onClose();
      }
    };
  
    handleBackdropClick = event => {
  
      if (event.currentTarget === event.target) {
        this.props.onClose();
      }
    };
  
    render() {
      return (
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>{this.props.children}</div>
        </div>
      );
    }
  }