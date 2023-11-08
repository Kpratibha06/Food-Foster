import Contact from "../Contact"
import { render, screen } from "@testing-library/react"

describe('Contact Us Page Test Case', () => {
    // either we can write as it or text or mixed of both, don't confuse with them
    test("Should load contact us component", ()=> {
        render(<Contact/>)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside contact us component", ()=> {
        render(<Contact/>)
        const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside Contact us component", ()=> {
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    })
    test("Should load input message inside Contact us component", ()=> {
        render(<Contact/>)
    
        // Querying
        // For multiple items we use All
        const input = screen.getAllByRole("textbox");
        // 
        // console.log(input.length)
        expect(input.length).toBe(2);
    })
});

