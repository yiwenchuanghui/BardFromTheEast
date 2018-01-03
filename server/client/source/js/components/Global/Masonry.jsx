import React, { Component } from 'react';

class Masonry extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns });
    }
  }

  mapChildren() {
    const col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <div className='masonry' ref='Masonry'>
        {this.mapChildren().map((col, ci) => {
          return (
            <div className='masonry-column' key={ ci }>
              {col.map((child, i) => {
                return <div key={ i }>{child}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Masonry;
