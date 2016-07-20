import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import InputComponent from './InputComponent.jsx';

const errorClass = 'inline-errors';

describe('InputComponent', function() {
  const defaultProps = {
    model: 'testModel',
    attribute: 'testAttribute',
    value: ''
  };

  describe('with minimal props', function() {
    it('should output a default label', function() {
      const wrapper = mount(React.createElement(InputComponent, defaultProps));

      const label = wrapper.find('label');
      label.length.should.equal(1);
      label.node.htmlFor.should.equal('testModel_testAttribute');
    });

    it('should output an input tag of default type text', function() {
      const wrapper = mount(React.createElement(InputComponent, defaultProps));

      const input = wrapper.find('input');
      input.length.should.equal(1);
      input.node.type.should.equal('text');
      input.node.id.should.equal('testModel_testAttribute');
      input.node.name.should.equal('testModel[testAttribute]');
    });

    it('wont output any errors', function() {
      const wrapper = mount(React.createElement(InputComponent, defaultProps));

      const errors = wrapper.find(`.${errorClass}`);
      errors.length.should.equal(0);
    });
  });

  describe('with a submodel', function() {
    const submodelProps = Object.assign({}, defaultProps, {
      submodel: 'testSubmodel'
    });

    it('should output a label containing that submodel', function() {
      const wrapper = mount(React.createElement(InputComponent, submodelProps));

      const label = wrapper.find('label');
      label.node.htmlFor.should.equal('testModel_testSubmodel_testAttribute');
    });

    it('should output an input tag with that submodel', function() {
      const wrapper = mount(React.createElement(InputComponent, submodelProps));

      const input = wrapper.find('input');
      input.node.id.should.equal('testModel_testSubmodel_testAttribute');
      input.node.name.should.equal('testModel[testSubmodel][testAttribute]');
    });
  });

  describe('with a valid type', function() {
    const validTypeProps = Object.assign({}, defaultProps, {
      type: 'number'
    });

    it('should output an input tag with that type', function() {
      const wrapper = mount(React.createElement(InputComponent, validTypeProps));

      const input = wrapper.find('input');
      input.node.type.should.equal('number');
    });
  });

  describe('with errors', function() {
    const errorProps = Object.assign({}, defaultProps, {
      errors: ['foo', 'bar']
    });

    it('must output those errors', function() {
      const wrapper = mount(React.createElement(InputComponent, errorProps));

      const errors = wrapper.find(`.${errorClass}`);
      errors.length.should.equal(1);
      errors.first().text().should.equal('foo, bar');
    });
  });

  describe('with a textarea type', function() {
    const areaProps = Object.assign({}, defaultProps, {
      type: 'textarea'
    });

    it('must output a non-standard input field', function() {
      const wrapper = mount(React.createElement(InputComponent, areaProps));

      const input = wrapper.find('input');
      input.length.should.equal(0);

      const area = wrapper.find('textarea');
      area.length.should.equal(1);
      area.node.id.should.equal('testModel_testAttribute');
      area.node.name.should.equal('testModel[testAttribute]');
    });
  });
});
