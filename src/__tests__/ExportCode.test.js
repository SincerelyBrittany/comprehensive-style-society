import React from 'react';
import renderer from 'react-test-renderer';
import ExportCode from '../components/ExportCode';

it('will check ExportCode component renders without props', () => {
    const component = renderer.create(<ExportCode />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('will check the types of props passed into ExportCode', () => {
    const props =  {
        fontSize: Math.floor(Math.random() * 20),
        fontEmphasis: Math.floor(Math.random() * 400),
        width: 150,
        height: 100,
        padding: 3,
        borderWidth: 1,
        borderRadius: 0,
        shadow: 0,
        backgroundColor: "",
        textColor: "",
        borderColor: "",
        opacity: 0,
        showCode: false
    }
    expect(props).toMatchSnapshot({
        fontSize: expect.any(Number),
        fontEmphasis: expect.any(Number),
        width: expect.any(Number),
        height: expect.any(Number),
        padding: expect.any(Number),
        borderWidth: expect.any(Number),  
        borderRadius: expect.any(Number),
        shadow: expect.any(Number),
        backgroundColor: expect.any(String),
        textColor: expect.any(String),
        borderColor: expect.any(String),
        opacity: expect.any(Number),
        showCode: expect.any(Boolean)
    });
});

it('will check ExportCode component renders with props', () => {
    const tree = renderer.create(<ExportCode 
        fontSize={16}
        fontEmphasis={500} 
        width={150}
        height={100}
        padding={3}
        borderWidth={1}
        borderRadius={0}
        shadow={50}
        backgroundColor="white"
        textColor="black"
        borderColor="black"
        opacity={50}
        showCode={false}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
