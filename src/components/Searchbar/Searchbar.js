import { Component } from 'react';
import s from './Searchbar.module.css'

export default class Searchbar extends Component{
    state = {
        imageName: '',
    }

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.imageName.trim() === '') {
            alert('Введите название изображения.');
            return;
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render (){
        return(
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchForm_button}>
                    </button>

                    <input
                    className={s.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.imageName}
                    onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }

}