import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

// it('changes the state for font slider', () => {
//     const component = renderer.create(<App/>);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
  
//     // manually trigger the callback
//     tree.state.fontSlider();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
  
//     // manually trigger the callback
//     tree.props.onMouseLeave();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });