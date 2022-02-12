/**
 * @jest-environment jsdom
 */
import { render, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event'
import Calculator from '.';

describe("calculator-component", () => {
    it("should focus newly added party's name input", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const newPartyButton = ui.getByRole('button', {name: /new party/i});

        await user.click(newPartyButton);
        expect(ui.container).toMatchSnapshot();
        const newPartyNameInput = ui.getByLabelText(/party name/i);
        await waitFor(() => expect(newPartyNameInput).toHaveFocus());

        // do it again to check if it actually focuses the newest
        await user.click(newPartyButton);
        expect(ui.container).toMatchSnapshot();
        const newPartyNameInput2 = ui.getAllByLabelText(/party name/i)[1];
        await waitFor(() => expect(newPartyNameInput2).toHaveFocus());
    });
});