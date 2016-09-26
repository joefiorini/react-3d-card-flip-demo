import React, { Component } from 'react';
import classnames from 'classnames';

export default class FlipCssTransition extends Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false,
    };
  }
  render() {
    const handleFlip = () => this.setState({ isFlipped: !this.state.isFlipped });

    const frontClasses = {
      'rotate__first': this.state.isFlipped,
      'rotate__last': !this.state.isFlipped,
    };

    const backClasses = {
      'rotate__last': this.state.isFlipped,
      'rotate__first': !this.state.isFlipped,
    };

    return (
      <section>
        <section className="card">
          <section className={classnames('card__front', frontClasses)}>
            <section className="card__content">
              Front
            </section>
          </section>
          <section className={classnames('card__back', backClasses)}>
            <section className="card__content">
              Back
            </section>
          </section>
        </section>
        <button onClick={handleFlip}>Flip</button>
      </section>
    );
  }
}
