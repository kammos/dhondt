/**
 * @jest-environment jsdom
 */
import { render } from 'test-utils';
import Results from '.';

describe("Results component", () => {
    it("should render", () => {
        const initialState = {
            calculator: {
                resultsValid: true,
                results: {
                    '0': {
                        name: 'Red',
                        votes: 100,
                        index: 0,
                        ignoresTreshold: false,
                        seats: 22,
                        difference: 0.2608695652173907
                    },
                    '1': {
                        name: 'Green',
                        votes: 110,
                        index: 1,
                        ignoresTreshold: false,
                        seats: 24,
                        difference: 0.08695652173912904
                    }
                }
            }
        };

        const ui = render(<Results />, { initialState });

        expect(ui.container).toMatchSnapshot();
    });

    it("should render even if there are no results preloaded by state retention", () => {
        const initialState = {
            calculator: {
                seats: 100,
                treshold: 0,
                nextIndex: 4,
                parties: {
                    '0': {
                        name: 'Red',
                        votes: 100,
                        index: 0,
                        ignoresTreshold: false
                    },
                    '1': {
                        name: 'Green',
                        votes: 110,
                        index: 1,
                        ignoresTreshold: false
                    },
                },
                resultsValid: false,
                results: {}
            }
        };

        const ui = render(<Results />, { initialState });

        expect(ui.container).toMatchSnapshot();
    });

    it("should render a proper message if there are no parties in store", () => {
        const initialState = {
            calculator: {
                seats: 100,
                treshold: 0,
                nextIndex: 4,
                parties: {},
                resultsValid: false,
                results: {}
            }
        };

        const ui = render(<Results />, { initialState });

        expect(ui.container).toMatchSnapshot();
    });

    it("should render a proper message if no party lost or gained any seats", () => {
        const initialState = {
            calculator: {
                resultsValid: true,
                results: {
                    '0': {
                        name: 'Red',
                        votes: 100,
                        index: 0,
                        ignoresTreshold: false,
                        seats: 22,
                        difference: 0.0
                    },
                    '1': {
                        name: 'Green',
                        votes: 110,
                        index: 1,
                        ignoresTreshold: false,
                        seats: 24,
                        difference: 0.0
                    }
                }
            }
        };

        const ui = render(<Results />, { initialState });

        expect(ui.container).toMatchSnapshot();
    });
});