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

    it("should allow to add parties, each with unique and valid name", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const newPartyButton = ui.getByRole('button', {name: /new party/i});

        for (let i = 0; i < 10; i++) {
            await user.click(newPartyButton);
        }

        const partyNameInputs = ui.getAllByLabelText(/party name/i);
        const names = [];

        partyNameInputs.forEach(partyNameInput => {
            names.push(partyNameInput.value);
            expect(partyNameInput).toBeValid();
        });
    });

    it("should allow to set treshold field, and validate it", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const tresholdInput = ui.getByLabelText(/treshold/i);

        expect(tresholdInput).toBeValid();

        await user.dblClick(tresholdInput);
        await user.keyboard('{Delete}');

        expect(tresholdInput).toBeInvalid();
        expect(tresholdInput).toHaveErrorMessage("can not be empty");

        await user.keyboard('101');

        expect(tresholdInput).toBeInvalid();
        expect(tresholdInput).toHaveErrorMessage("at most 100");

        await user.keyboard('{Backspace}0');

        expect(tresholdInput).toBeValid();

        await user.keyboard('{Backspace}{Backspae}{Backspace}-10');

        expect(tresholdInput).toBeInvalid();
        expect(tresholdInput).toHaveErrorMessage("at least 0");
    });

    it("should allow to set treshold field, and validate it", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const seatsInput = ui.getByLabelText(/seats/i);
        await user.dblClick(seatsInput);
        await user.keyboard('{Delete}');

        expect(seatsInput).toBeInvalid();
        expect(seatsInput).toHaveErrorMessage("can not be empty");

        await user.keyboard('-10');

        expect(seatsInput).toBeInvalid();
        expect(seatsInput).toHaveErrorMessage("at least 0");

        await user.keyboard('{Backspace}{Backspace}{Backspace}10');

        expect(seatsInput).toBeValid();
    });

    it("should allow to set party name, and validate it", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const newPartyButton = ui.getByRole('button', {name: /new party/i});
        await user.click(newPartyButton);

        const partyNameInput = ui.getByLabelText(/party name/i);

        expect(partyNameInput).toBeValid();

        await user.dblClick(partyNameInput);
        await user.keyboard('{Delete}');

        expect(partyNameInput).toBeInvalid();
        expect(partyNameInput).toHaveErrorMessage("can not be empty");

        await user.keyboard('{Space}{Space}');

        expect(partyNameInput).toBeInvalid();
        expect(partyNameInput).toHaveErrorMessage("can not be empty");

        await user.keyboard('{Backspace}{Backspace}Partia');

        expect(partyNameInput).toBeValid();
    });

    it("should allow to set votes for party, and validate it", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const newPartyButton = ui.getByRole('button', {name: /new party/i});
        await user.click(newPartyButton);

        const votesInput = ui.getByLabelText(/votes/i);

        expect(votesInput).toBeValid();

        await user.dblClick(votesInput);
        await user.keyboard('{Delete}');

        expect(votesInput).toBeInvalid();
        expect(votesInput).toHaveErrorMessage("can not be empty");

        await user.keyboard('litery');

        expect(votesInput).toBeInvalid();
        expect(votesInput).toHaveErrorMessage("can not be empty");

        await user.dblClick(votesInput);
        await user.keyboard('{Delete}123');

        expect(votesInput).toBeValid();
    });

    it("should allow to remove parties", async () => {
        const user = userEvent.setup();
        const ui = render(<Calculator />);

        const newPartyButton = ui.getByRole('button', {name: /new party/i});
        await user.click(newPartyButton);

        const deleteButton = ui.getByRole('button', {name: /delete party/i});
        await user.click(deleteButton);

        expect(deleteButton).not.toBeInTheDocument();
    });
});