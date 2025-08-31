import { screen } from "@testing-library/react";
import { expect, it, describe, vi, beforeEach } from "vitest";

import { VegetableCard } from "../../components";
import { render } from "../../test-utils/render";

describe("VegetableCard component", async function () {
  const mochIncreaseAmount = vi.fn();
  const mochDecreaseAmount = vi.fn();
  const mochAddToCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render component VegetableCard", () => {
    render(
      <VegetableCard
        id={1}
        image={"image"}
        name={"name"}
        price={42}
        amount={1}
        category={"category"}
        increaseAmount={mochIncreaseAmount}
        decreaseAmount={mochDecreaseAmount}
        addToCart={mochAddToCart}
      />
    );

    expect(screen.getByText("Add to cart"));
    expect(screen.getByAltText("btn-cart-icon"));
  });
});
