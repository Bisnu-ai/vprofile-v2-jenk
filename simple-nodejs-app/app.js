class App {
    static main(args) {
        console.log("Hello World!");
    }

    getMessage() {
        return "Bisnu's jenkins 1st successfully build and deployment";
    }
}

// Simulating the Java main method execution when the script is run directly
if (require.main === module) {
    App.main(process.argv.slice(2));
}

module.exports = App;
