import React from "react";
import { render, waitFor } from "@testing-library/react";
import fetchColors from "../api/fetchColors";
import BubblePage from "./BubblePage";

jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", async () => {
  fetchColors.mockResolvedValueOnce([{
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
  }])
  const {getAllByTestId} = render(<BubblePage/>);
  expect(fetchColors).toHaveBeenCalledTimes(1);
  
  await waitFor(()=>{
    expect(getAllByTestId('color')).toHaveLength(2);
  })
});