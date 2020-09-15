import React from 'react';
import { render, screen } from '@testing-library/react';
import BubblePage from './BubblePage';

import { fetchColors as mockFetchColor } from '../api/fetchColors';
jest.mock('../api/fetchColors');

const fetchResults = {data : [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
]};


test('Fetches data and renders the bubbles', async () => {
  // Finish this test

  mockFetchColor.mockResolvedValueOnce(fetchResults);

  const bp = render(<BubblePage />);
  bp.debug()
  const deleteBoxes = await screen.findAllByText('x')
  expect(deleteBoxes.length).toBeGreaterThan(5)
})