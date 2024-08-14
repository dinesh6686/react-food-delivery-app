import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromtedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import PROMOTED_MOCK_DATA from "../mocks/resCardPromotedMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={PROMOTED_MOCK_DATA} />);
  
  const name = screen.getByText("Satti Babu Biryani");
  
  expect(name).toBeInTheDocument();
});
