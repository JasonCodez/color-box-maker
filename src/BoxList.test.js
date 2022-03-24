import {render, fireEvent} from "@testing-library/react" ;
import BoxList from "./BoxList";

it("renders without crashing", function () {
   render(<BoxList />);
});

it("matches snapshot", function () {
   const { asFragment } = render(<BoxList />);
   expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
   const {getByLabelText, queryByText} = render(<BoxList />);
   const input = getByLabelText("Background Color");
   const btn = queryByText("Add Box");
});