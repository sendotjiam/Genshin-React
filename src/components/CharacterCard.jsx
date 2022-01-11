import React, { Component } from 'react';

export default class CharacterCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: false,
			character: props.genshinCharacter,
		};
    }

    toggleFavorite = () => {
        this.setState({
            favorite: !this.state.favorite
        })
    }

	render() {
        const renderIcon = () => {
            return (this.state.favorite) ? 
                <i className='bi bi-heart-fill cursor-pointer text-danger' onClick={this.toggleFavorite}></i> : 
                <i className='bi bi-heart cursor-pointer text-dark' onClick={this.toggleFavorite}></i>
        }
		return (
			<div className='card my-3'>
				<div className='card-img-top position-relative'>
					<img
						src={this.state.character.elementimage}
						alt=''
						className='position-absolute'
                        style={{ right: 0 }}
                        width="50"
					/>
                    <img src={this.state.character.image} alt="" width="100%"/>
				</div>
                <div className='card-title p-2 text-center fw-bold text-dark'>
                    {this.state.character.name}
                </div>
                <div className='card-footer d-flex justify-content-end text-dark'>
                    { renderIcon() }
                </div>
			</div>
		);
	}
}
