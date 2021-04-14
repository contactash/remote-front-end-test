import React from 'react'
import { mount, shallow } from 'enzyme'
import PropertyListing from '../PropertyListing'
import { act } from 'react-dom/test-utils'
import { render } from "react-dom";

describe('PropertyListing', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render five property cards', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('PropertyCard')).toHaveLength(0);
    });
});
