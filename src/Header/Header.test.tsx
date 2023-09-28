import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, expect, test } from "vitest";

describe('Header in App Component', () => {
    test('renders title in Header', () => {
        render(<Header />);

        const headingElement = screen.getByText("1");
        console.log(headingElement);
        
        expect(headingElement).toBeTruthy();
    })
})