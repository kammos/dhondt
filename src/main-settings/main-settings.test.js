/**
 * @jest-environment jsdom
 */
import { render } from 'test-utils';
import { MainSettings } from '.';


describe('MainSettings component', () => {
    it('should match snapshot', () => {
        const ui = render(<MainSettings />);

        expect(ui.container).toMatchSnapshot();
    });
});