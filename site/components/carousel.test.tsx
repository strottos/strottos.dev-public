/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";

it("Renders a single image", () => {
  render(
    <Carousel>
      <CarouselItem image="foo.jpg">Test Text</CarouselItem>
    </Carousel>,
  );
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("%2Fimages%2Ffoo.jpg"),
  );
});

it("Can select other images", () => {
  render(
    <Carousel>
      <CarouselItem image="foo.jpg">Test Text</CarouselItem>
      <CarouselItem image="foo2.jpg">Test Text 2</CarouselItem>
      <CarouselItem image="foo3.jpg">Test Text 3</CarouselItem>
    </Carousel>,
  );
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("%2Fimages%2Ffoo.jpg"),
  );
  fireEvent.click(screen.getByTestId("right"));
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("%2Fimages%2Ffoo2.jpg"),
  );
  fireEvent.click(screen.getByTestId("right"));
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("%2Fimages%2Ffoo3.jpg"),
  );
  fireEvent.click(screen.getByTestId("left"));
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    expect.stringContaining("%2Fimages%2Ffoo2.jpg"),
  );
});
