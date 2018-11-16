class Transmitter {

    constructor(ms?: number) {
        this.ms = ms;
    }

    // aux morse alphabet
    private morseAlphabet = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    };

    // temporal references
    private morseConfig = {
        ".": 1, // dot
        "-": 3, // dash
        "dotDashSeparation": 1,
        "letterSeparation": 3,
        "wordSeparation": 7,
    };

    // state ON/OFF
    private state: number = 0;

    // spread of symbols
    private ms: number = 50; // default value of 50 ms between symbols

    // wait to spread symbols for transmission
    private wait: (dots: number) => void = async (dots: number) => {
        while (dots > 0) {
            this.write();
            await this.sleep();
            dots--;
        }
    };

    // aux function for waiting
    private sleep: () => Promise<void> = () => new Promise(resolve => setTimeout(resolve, this.ms));

    // write state ON/OFF
    private write: () => void = () => console.log(this.state);

    // public function for transmitting message
    // it is assumed that leading and trailing zeros/spaces don't matter
    transmitMessage: (message: string) => void = async (message: string) => {
        for (const c of message) {
            const morseSymbol: string = this.morseAlphabet[c];

            if (morseSymbol) {
                for (const m of morseSymbol) {
                    this.state = 1;
                    await this.wait(this.morseConfig[m]);
                    this.state = 0;
                    await this.wait(this.morseConfig.dotDashSeparation);
                }
                await this.wait(this.morseConfig.letterSeparation - this.morseConfig.dotDashSeparation);

                // characters not defined in morseAlphabet will be treated as blank spaces
            } else {
                await this.wait(this.morseConfig.wordSeparation - this.morseConfig.letterSeparation);
            }
        }
    }
}

const transmitter = new Transmitter();
transmitter.transmitMessage("aa a a");
