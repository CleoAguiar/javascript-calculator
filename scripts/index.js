'use strict';

const e = React.createElement;

const isOperator = /[x/+‑]/,
      endsWithOperator = /[x+‑/]$/

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


class Buttons extends React.Component
{
    render()
    {
        return (e('div', null,
                  [
                   e('button', {id:'clear', value:'ac', onClick: this.props.initialize }, 'ac'),
                   e('button', {id:'signal', value:'+/-', onClick: 'need to improve' }, '+/-'),
                   e('button', {id:'percent', value:'%', onClick: this.props.operators }, '%'),
                   e('button', {id:'divide', value:'/', onClick: this.props.operators }, '/'),
                   e('button', {id: 'seven', value: '7', onClick: this.props.number }, '7'),
                   e('button', {id: 'eight', value: '8', onClick: this.props.number }, '8'),
                   e('button', {id: 'nine', value: '9', onClick: this.props.number }, '9'),
                   e('button', {id:'multiply', value:'x', onClick: this.props.operators }, 'x'),
                   e('button', {id: 'four', value: '4', onClick: this.props.number }, '4'),
                   e('button', {id: 'five', value: '5', onClick: this.props.number }, '5'),
                   e('button', {id: 'six', value: '6', onClick: this.props.number }, '6'),
                   e('button', {id:'subtract', value:'‑', onClick: this.props.operators }, '-'),
                   e('button', {id: 'one', value: '1', onClick: this.props.number }, '1'),
                   e('button', {id: 'two', value: '2', onClick: this.props.number }, '2'),
                   e('button', {id: 'three', value: '3', onClick: this.props.number }, '3'),
                   e('button', {id:'add', value:'+', onClick: this.props.operators }, '+'),
                   e('button', {id: 'zero', value: '0', onClick: this.props.number }, '0'),
                   e('button', {id:'decimal', value:'.', onClick: this.props.decimal }, '.'),
                   e('button', {id: 'equals', value: '=', onClick: this.props.evaluate }, '='),

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


class Formula extends React.Component
{
  render()
  {
    return e('div', {id: 'display', className: 'formulaScreen' }, this.props.formula);
  }
}


class App extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            currentVal: '0',
            prevVal: '0',
            formula: ''

        };

        this.handleNumber = this.handleNumber.bind(this);
        this.initialize = this.initialize.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.maxDigit = this.maxDigit.bind(this);
    }

    initialize()
    {
      this.setState({
        currentVal: '0',
        prevVal: '0',
        formula: ''
      });
    }

    maxDigit()
    {
      this.setState({
        currentVal: 'Limit'
      });
    }

    handleNumber(n)
    {
      if (!this.state.currentVal.includes('Limit'))
      {
        this.setState({ evaluate: false })
        if (this.state.currentVal.length > 7)
        {
          this.maxDigit();
        }
        else if (this.state.evaluate === true)
        {
          this.setState({
            currentVal: n.target.value,
            formula: n.target.value != '0'? n.target.value : '0'
          });
        }
        else
        {
          this.setState({
            currentVal: this.state.currentVal == '0' || isOperator.test(this.state.currentVal) ?  
                          n.target.value : this.state.currentVal + n.target.value,
            formula: this.state.currentVal == '0' && n.target.value == '0' ?
                        this.state.formula: /([^.0-9]0)$/.test(this.state.formula) ?
                          this.state.formula.slice(0, -1) + n.target.value : this.state.formula + n.target.value
          });
        }
      }
    }

    handleOperator(op)
    {
      if (!this.state.currentVal.includes('Limit'))
      {
        this.setState({
          currentVal: op.target.value,
          evaluate: false
        });
        if (this.state.formula.includes('='))
        {
          this.setState({
            formula: this.state.prevVal + op.target.value
          });
        }
        else
        {
          this.setState({
            prevVal: !isOperator.test(this.state.currentVal) ?
              this.state.formula : this.state.prevVal,
            formula: !isOperator.test(this.state.currentVal) ?
              this.state.formula += op.target.value : this.state.prevVal += op.target.value
          });
        }
      }
    }

    handleEvaluate()
    {
      if (!this.state.currentVal.includes('Limit'))
      {
        let expression = this.state.formula;
        if (endsWithOperator.test(expression))
          expression = expression.slice(0, -1);
        expression = expression.replace(/x/g, '*').replace(/‑/g, '-');
        let answer = Math.round(10000000 * eval(expression)) / 10000000;
        this.setState({
          currentVal: answer.toString(),
          formula: expression.replace(/\*/g, '.').replace(/‑/g, '‑') + '=' + answer,
          prevVal: answer,
          evaluate: true
        });
      }
    }

    handleDecimal()
    {
      if (this.state.evaluate === true)
      {
        this.setState({
          currentVal: '0.',
          formula: '0.',
          evaluate: false
        });
      }
      else if (!this.state.currentVal.includes('.') && !this.state.currentVal.includes('Limit'))
      {
        this.setState({
          evaluate: false
        });
        if (this.state.currentVal > 7)
        {
          this.maxDigit();
        }
        else if (endsWithOperator.test(this.state.formula) || this.state.currentVal == '0' && this.state.formula === '')
        {
          this.setState({
            currentVal: '0.',
            formula: this.state.formula + '0.'
          });
        }
        else
        {
          this.setState({
            currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
            formula: this.state.formula + '.'
          });
        }
      }
    }


    render()
    {
        return [e(Header), 
                e('div', { class: 'calculador'}, [
                  e(Formula, { formula: this.state.formula }),
                  e(Output, { currentValue: this.state.currentVal }),
                  e(Buttons, { initialize:this.initialize, number: this.handleNumber, 
                               operators: this.handleOperator, evaluate: this.handleEvaluate, decimal: this.handleDecimal })
                ]),
                e(Footer)];
    }
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);