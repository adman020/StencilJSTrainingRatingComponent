import  { Component, Prop, State, EventEmitter, Event } from  '@stencil/core';

@Component({
  tag: 'my-rating',
  styleUrl: 'my-rating-component.css',
  shadow: true // shadow DOM
})

export class MyRatingComponent {
  // default values
  @Prop() maxValue: number = 5;
  @Prop({ mutable: true }) value: number = 0;

  @State() starList: Array<object> = []; // an array of objects

  @Event() onRatingUpdated: EventEmitter;  // function that can be called on a listener outside of this component

  // initialise the method
  componentWillLoad() {
    this.createStarList(this.value);
  }

  // function that accepts new value
  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);

    // allows Angular to see what's happening in this stencil component (Emitting event)
    this.onRatingUpdated.emit({ value: this.value });
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

  render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
   }
}