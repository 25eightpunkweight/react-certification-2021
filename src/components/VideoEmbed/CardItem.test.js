import React from 'react'
import {render, cleanup} from '@testing-library/react';
import CardItem from './index.js';
import mockData from './test_data/mock.json';

afterEach(cleanup)

describe ( "render CardItem Component", () => {
   it('should take a snapshot', () => {
      const { asFragment } = render(CardItem(mockData.items[0]));

      expect(asFragment(CardItem(mockData.items[0]))).toMatchSnapshot()
   });

   it ('should show description on hover', () => {
      
   });

});