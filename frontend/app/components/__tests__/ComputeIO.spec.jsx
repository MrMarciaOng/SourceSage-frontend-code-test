import React from 'react';
import * as Enzyme from 'enzyme';
import { ComputeIO, Input, Output, Button, isClosed } from '../ComputeIO';

describe('ComputeIO', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<ComputeIO />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Input', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Output', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Output />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Button', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean of false given ^^', () => {
    expect(isClosed('^^')).toBe(false);
  });
});


describe('`isClosed()` function', () => {
  it('returns a boolean false given ^^$$$', () => {
    expect(isClosed('^^$$$')).toBe(false);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean true given ^^$$', () => {
    expect(isClosed('^^$$')).toBe(true);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean true given ^123^abc$$', () => {
    expect(isClosed('^123^abc$$')).toBe(true);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean false given ^$$^', () => {
    expect(isClosed('^$$^')).toBe(false);
  });
});
describe('`isClosed()` function', () => {
  it('returns a boolean true given ^$^$', () => {
    expect(isClosed('^$^$')).toBe(true);
  });
});