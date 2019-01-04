import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwipableCard from './Card'

class App extends Component {

    state = {data: [{
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
            {
                label: 'Bird',
                imgPath:
                    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Bali, Indonesia',
                imgPath:
                    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
                imgPath:
                    'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Goč, Serbia',
                imgPath:
                    'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },]}


    handleSwipe = () => {
        this.setState((state) => {
            const [firstElement, ...rest] = state.data
            return ({data: [...rest]})
        })
    }

  render() {
        console.log(this.state.data[0])
      return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.state.data.length > 0 ? this.state.data.map((data,ix) => this.state.data[0].label === data.label && <SwipableCard key={data.label+ix} onSwipeTriggered={this.handleSwipe} content={data} />) : 'No Card'}
      </div>
    );
  }
}

export default App;
