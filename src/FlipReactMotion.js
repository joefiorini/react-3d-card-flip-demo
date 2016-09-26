import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

export default class FlipReactMotion extends Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false,
    };
  }
  render() {
    const handleFlip = () => this.setState({ isFlipped: !this.state.isFlipped });
    const stiffness = 255;
    const damping = 10;

    const frontStyle = {
      rotation: spring(0, { stiffness, damping }),
    };

    const backStyle = {
      rotation: spring(180, { stiffness, damping }),
    };

    return (
      <section>
        <section className="card">
          <Motion style={this.state.isFlipped ? backStyle : frontStyle}>
            {({ visibility, rotation}) =>
              <section className='card__front' style={{
                  transform: `rotateY(${rotation}deg)`,
                  zIndex: 1,
                }}>
                <section className="card__content">
                  Front
                </section>
              </section>
            }
          </Motion>
          <Motion style={this.state.isFlipped ? frontStyle : backStyle}>
            {({ visibility, rotation}) =>
              <section className='card__back' style={{
                  transform: `rotateY(${rotation}deg)`,
                  zIndex: 0,
                }}>
                <section className="card__content">
                  Back
                </section>
              </section>
            }
          </Motion>
        </section>
        <button onClick={handleFlip}>Flip</button>
      </section>
    );
  }
}
