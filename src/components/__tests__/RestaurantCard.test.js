import { render, screen } from "@testing-library/react"
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from '../../components//mocks/resCardMock.json'


test("Should render RestaurantCard component with props Data", () =>{
    render(<RestrauntCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Homely")
    expect(name).toBeInTheDocument()
})