'use strict';

const e = React.createElement;

const Header = () => {
    return e('div', { class: 'header' },
            [e('h2',null, 'Welcome to my React Javascript Calculator!'),
            e('p', null, 'This page is my Fourth Front End Project FreeCodeCamp using React')]
            );
};

const Footer = () => {
    return e('div', { class: 'footer' }, 
        [ String.fromCharCode(169), // copyright symbol &#169;
          ' 2019 ' ,
          e('a', {href: 'http://cleoaguiar.github.io'}, 'Cleo Aguiar'), 
          '. All rights reserved.']
        );
};

const operatorBasicStyle = {background: '#F80'} ;


class Buttons extends React.Component
{
    render()
    {
        return (e('div', null,
                  [
                   e('button', {id:'clear', value:'AC', onClick: this.props.initialize }, 'AC'),
                   e('button', {id:'signal', value:'+/-', onClick: 'need to improve' }, '+/-'),
                   e('button', {id:'percent', value:'%', onClick: 'need to improve' }, '%'),
                   e('button', {id:'divide', value:'/', onClick: 'need to improve', style: operatorBasicStyle }, '/'),
                   e('button', {id: 'seven', value: '7', onClick: this.props.number }, '7'),
                   e('button', {id: 'eight', value: '8', onClick: this.props.number }, '8'),
                   e('button', {id: 'nine', value: '9', onClick: this.props.number }, '9'),
                   e('button', {id:'multiply', value:'*', onClick: 'need to improve', style: operatorBasicStyle }, '*'),
                   e('button', {id: 'four', value: '4', onClick: this.props.number }, '4'),
                   e('button', {id: 'five', value: '5', onClick: this.props.number }, '5'),
                   e('button', {id: 'six', value: '6', onClick: this.props.number }, '6'),
                   e('button', {id:'subtract', value:'-', onClick: 'need to improve', style: operatorBasicStyle }, '-'),
                   e('button', {id: 'one', value: '1', onClick: this.props.number }, '1'),
                   e('button', {id: 'two', value: '2', onClick: this.props.number }, '2'),
                   e('button', {id: 'three', value: '3', onClick: this.props.number }, '3'),
                   e('button', {id:'add', value:'+', onClick: 'need to improve', style: operatorBasicStyle }, '+'),
                   e('button', {id: 'zero', value: '0', onClick: this.props.number }, '0'),
                   e('button', {id:'decimal', value:'.', onClick: 'need to improve' }, '.'),
                   e('button', {id: 'equals', value: '=', style: operatorBasicStyle }, '='),

                  ]));
    }
}


class Output extends React.Component
{
  render()
  {
    return e('div', {id: 'display', className: 'outputScreen' }, this.props.currentValue);
  }
}

class App extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            currentVal: '0'
        };

        this.handleNumber = this.handleNumber.bind(this);
        this.initialize = this.initialize.bind(this);
    }

    handleNumber(n)
    {
      this.setState({
        currentVal: n.target.value
      });
    }

    initialize()
    {
      this.setState({
        currentVal: '0'
      });
    }

    render()
    {
        return [e(Header), 
                e('div', { class: 'calculador'}, [
                  e(Output, { currentValue: this.state.currentVal }),
                  e(Buttons, { initialize:this.initialize, number: this.handleNumber  })
                ]),
                e(Footer)];
    }
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);