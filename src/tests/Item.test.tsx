import { render, screen } from "@testing-library/react";

import Item from "../pages/Item";
import { ProductItem } from "../components/product-item/ProductItem";
import { TopMenu } from "../components/main/TopMenu";
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";
import { Content } from "../components/product-item/Content";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

describe("TopMenu Component", () => {
  test("test render logo", () => {
    render(<TopMenu />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
  test("test render menu items", () => {
    render(<TopMenu />);
    expect(screen.getAllByTestId("link")).toHaveLength(4);
  });
  test("test render menu caption", () => {
    render(<TopMenu />);
    expect(
      screen.getByText(
        "Shop Subaru Parts, Subaru Accessories and Subaru Gear with Subaru Parts Online."
      )
    ).toBeInTheDocument();
  });
});

describe("Breadcrumbs component", () => {
  test("test empty breadcrumbs", () => {
    render(<Breadcrumbs />);
    expect(screen.queryByTestId("breadcrumbs")).not.toBeInTheDocument();
  });
  test("test render breadcrumbs", () => {
    render(
      <Breadcrumbs path="Home / Products / Rockford Fosgate Audio Upgrade" />
    );
    expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument();
  });
});

describe("ProductItem component", () => {
  test("test render dealers caption", () => {
    render(<ProductItem />);
    expect(
      screen.getByText("Please select a dealer to view local pricing")
    ).toBeInTheDocument();
  });

  test("test dealers list", () => {
    render(
      <ProductItem
        dealers={["Saint J Subaru", "Saint J Subaru2", "Saint J Subaru3"]}
      />
    );
    expect(screen.getByTestId("dealers")).toBeInTheDocument();
  });

  test("test empty dealser list", () => {
    render(<ProductItem dealers={null} />);
    expect(screen.queryByTestId("dealers")).not.toBeInTheDocument();
  });

  test("test render price", () => {
    render(<ProductItem />);
    expect(screen.queryByTestId("price")).toBeInTheDocument();
  });

  test("test render product title", () => {
    render(<ProductItem />);
    expect(screen.queryByTestId("product-title")).toBeInTheDocument();
  });
});

describe("Content component", () => {
  test("test render tab items", () => {
    render(<Content />);
    expect(screen.queryByTestId("tabs")).toBeInTheDocument();
  });
});
