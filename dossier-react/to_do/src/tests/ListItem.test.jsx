import { render , fireEvent } from "@testing-library/react";
import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    it('callback is called', () => {
        const onCheck = jest.fn();
        const id = 'test-id';
        const item = 'Test Item';
        const { getByTestId } = render(
          <ListItem checkable={true} onCheck={onCheck} id={id} item={item} />
        );
    
        const checkbox = getByTestId(`test-${id}`);
        fireEvent.click(checkbox);
    
        expect(onCheck).toHaveBeenCalledTimes(1);
      });

    it('callback is not called when not checkable', () => {
        const onCheck = jest.fn();
        const id = 'test-id';
        const item = 'Test Item';
        const { getByTestId } = render(
          <ListItem checkable={true} onCheck={onCheck} id={id} item={item} />
        );
    
        const checkbox = getByTestId(`test-${id}`);
        fireEvent.click(checkbox); // Check the checkbox
    
        expect(onCheck).toHaveBeenCalledTimes(1);
    
        fireEvent.click(checkbox); // Uncheck the checkbox
    
        expect(onCheck).toHaveBeenCalledTimes(2);
    });

    it('matches saved snapshot', () => {
        const tree = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        expect(tree).toMatchSnapshot();
    });
});