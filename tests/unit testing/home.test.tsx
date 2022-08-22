import { render, screen } from "@testing-library/react";
import Homepage from "../../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Homepage />);
    const { container } = render(<Homepage />);
    const header = screen.findByText(/Home/i);

    expect(header).toBeDefined();
    expect(container).toMatchSnapshot();

    screen.debug();
  });
});
