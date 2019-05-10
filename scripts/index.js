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


class Buttons extends React.Component
{
    render()
    {
        return (e('div', null,
                  [e('button', {id: 'equals', value: '=', style: {background: '#ac399'}}, '=')]));
    }
}

class App extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            
        };
        
    }

    render()
    {
        return [e(Header), 
                e(Buttons),
                e(Footer)];
    }
}

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);