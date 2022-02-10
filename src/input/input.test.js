/**
 * @jest-environment jsdom
 */
import { render } from 'test-utils';
import { Input } from '.';

describe('Input component', () => {
    it('should support text inputs', () => {
        const ui = render(<Input name="input" value="value" readOnly/>);

        expect(ui.container).toMatchSnapshot();
    });

    it('should support number inputs', () => {
        const ui = render(<Input name="input" type="number" value="100" readOnly/>);

        expect(ui.container).toMatchSnapshot();
    });

    it('should support checkboxes', () => {
        const ui = render(<Input name="input" type="checkbox" readOnly/>);

        expect(ui.container).toMatchSnapshot();
    });

    it('should remove floating point values', () => {
        const ui = render(<Input name="input" type="number" value="100.1" readOnly/>);

        const input = ui.getByLabelText(/Input/);
        expect(input.value).toBe('');
    });
});