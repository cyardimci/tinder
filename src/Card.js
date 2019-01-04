import React from 'react';
import Hammer from 'react-hammerjs'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class SwipableCard extends React.PureComponent {
    state = {
        swipeLeft: false,
        swipeRight: false
    }
    ref = React.createRef()



    render() {
        console.log(this.props.children)
        return (
            <Hammer
                ref={this.ref}
                onSwipeLeft={() => {
                    this.setState({swipeLeft: true})
                    setTimeout(() => this.props.onSwipeTriggered(), 1000)
                }}
                onSwipeRight={() => {
                    this.setState({swipeRight: true})
                    setTimeout(() => this.props.onSwipeTriggered(), 1000)
                }}>
                <div
                    style={this.state.swipeLeft
                        ?
                        { transform: 'rotate(-30deg) scale(0.8)',
                        transition: '1s',
                    marginLeft: '-400px',
                    cursor: 'e-resize',
                    opacity: 0,
                    zIndex: 10} : this.state.swipeRight ? {transform: 'rotate(30deg) scale(0.8)',
                    transition: '1s',
                    marginLeft: '400px',
                    cursor: 'e-resize',
                    opacity: 0,
                    zIndex: 10} : {}}>
                    <div style={{maxWidth: 300, height: 300, background: 'white', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '80%', color: 'white'}}>
                            <img src={this.props.content.imgPath} style={{maxWidth: 300}}/>
                            {this.props.content.label}
                        </div>
                        <div style={{height: '20%'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button onClick={() => {
                                    this.ref.current.hammer.handlers.swipeleft[0]();
                                }}>swipe left</button>
                                <button onClick={() => {
                                    this.ref.current.hammer.handlers.swiperight[0]();
                                }}>swipe right</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Hammer>
        )
    }
}

export default SwipableCard
