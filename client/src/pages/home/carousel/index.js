import React, { PureComponent } from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios';

class CarouselUi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 100,
    };
  }

  componentDidMount() {
    axios.get('/home/carousel').then((res) => {
      setTimeout(() => {
      this.setState({
        data: [...res.data],
      });
    }, 100);
    }).catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="carouselwrap">
        <Carousel
          autoplay
          infinite
        >
          {this.state.data.map((val) => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: '100%' }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselUi;
