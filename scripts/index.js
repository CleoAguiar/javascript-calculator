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

const operatorBasicStyle = {background: '#F80'}, operatorStyle = {background: '#D5D5DD'} ;


class Buttons extends React.Component
{
    render()
    {
        return (e('div', null,
                  [e('button', {id: 'equals', value: '=', style: operatorBasicStyle }, '='),
                   e('button', {id: 'zero', value: '0', onClick:'need improve'}, '0'),
                   e('button', {id: 'one', value: '1', onClick:'need improve'}, '1'),
                   e('button', {id: 'two', value: '2', onClick:'need improve'}, '2'),
                   e('button', {id: 'three', value: '3', onClick:'need improve'}, '3'),
                   e('button', {id: 'four', value: '4', onClick:'need improve'}, '4'),
                   e('button', {id: 'five', value: '5', onClick:'need improve'}, '5'),
                   e('button', {id: 'six', value: '6', onClick:'need improve'}, '6'),
                   e('button', {id: 'seven', value: '7', onClick:'need improve'}, '7'),
                   e('button', {id: 'eight', value: '8', onClick:'need improve'}, '8'),
                   e('button', {id: 'nine', value: '9', onClick:'need improve'}, '9'),
                   e('button', {id:'add', value:'+', onClick: 'need to improve', style: operatorBasicStyle }, '+'),
                   e('button', {id:'subtract', value:'-', onClick: 'need to improve', style: operatorBasicStyle }, '-'),
                   e('button', {id:'multiply', value:'*', onClick: 'need to improve', style: operatorBasicStyle }, '*'),
                   e('button', {id:'divide', value:'/', onClick: 'need to improve', style: operatorBasicStyle }, '/'),
                   e('button', {id:'clear', value:'AC', onClick: 'need to improve', style: operatorStyle }, 'AC'),
                   e('button', {id:'signal', value:'+/-', onClick: 'need to improve', style: operatorStyle }, '+/-'),
                   e('button', {id:'percent', value:'%', onClick: 'need to improve', style: operatorStyle }, '%'),
                   e('button', {id:'decimal', value:'.', onClick: 'need to improve' }, '.'),

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
        
    }

    render()
    {
        return [e(Header), 
                e(Output, { currentValue: this.state.currentVal }),
                e(Buttons),
                e(Footer)];
    }
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);