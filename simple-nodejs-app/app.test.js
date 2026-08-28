const App = require('./app');

describe('AppTest', () => {
    test('testApp', () => {
        const app = new App();
        expect(app.getMessage()).toBe("Bisnu's jenkins 1st successfully build and deployment");
    });
});
