import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Item component", () => {
  const itemProps = {
    item: {
      id: 1,
      category: "Laptop",
      description: "Nice Laptop",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FOZ6AGLlDrayjRpaCj-H_70cUcB0%3D%2F1400x0%2Ffilters%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22279295%2Fmchin_190429_4395_0002.jpg&imgrefurl=https%3A%2F%2Fwww.theverge.com%2F21250695%2Fbest-laptops&tbnid=Vit9IITA4R1P1M&vet=12ahUKEwjZ9-7l2OjyAhWNWMAKHfjSCmEQMygCegUIARCKAw..i&docid=dP_EvasPYBB6XM&w=1400&h=933&itg=1&q=laptop%20images&ved=2ahUKEwjZ9-7l2OjyAhWNWMAKHfjSCmEQMygCegUIARCKAw",
      price: 500,
      title: "Good laptop",
      amount: 500,
    },
    handleAddToCart: () => {
      console.log("clicked");
    },
  };
  test("renders ADD TO CART button", () => {
    render(<Item {...itemProps} />);
    const linkElement = screen.getByText(/ADD TO CART/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders correct price for item", () => {
    render(<Item {...itemProps} />);
    const linkElement = screen.getByText("500", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
