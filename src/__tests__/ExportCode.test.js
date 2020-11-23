import React from 'react';
import renderer from 'react-test-renderer';
import ExportCode from '../components/ExportCode';

it('will check ExportCode component renders', () => {
    const component = renderer.create(<ExportCode />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

it('will check the font-size attribute', () => {
    const props =  {
        fontSize: Math.floor(Math.random() * 20)
    }
    expect(props).toMatchSnapshot({
      fontSize: expect.any(Number),
    });
});

it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<ExportCode fontSize="16"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
