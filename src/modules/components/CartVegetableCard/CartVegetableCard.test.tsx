import { screen } from "@testing-library/react";
import { expect, it, describe, vi, beforeEach } from "vitest";
import ky from "ky";

import { CartVegetableCard } from "../../components";
import { render } from "../../test-utils/render";

const url =
  "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

interface VegetableType {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  amount: number;
}

describe("CartVegetableCard component", async function () {
  const mochSetCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render component CartVegetableCard", async () => {
    const getVegetables = async () => {
      const newVegetables: VegetableType[] = await ky.get(url).json();
      const newVegetablesWithAmount = newVegetables.map((itm) => {
        return { ...itm, amount: 1 };
      });

      return newVegetablesWithAmount;
    };

    const cart: VegetableType[] = await getVegetables();

    render(
      <CartVegetableCard
        cart={cart}
        item={{ id: 1, name: "name", price: 42, image: "image", amount: 1 }}
        setCart={mochSetCart}
      />
    );

    expect(screen.getByText("$ 42"));
    expect(screen.getByText("1"));
    expect(screen.getByAltText("vegetable-image"));
  });
});
