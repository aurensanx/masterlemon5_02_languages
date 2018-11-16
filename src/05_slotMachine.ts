class SlotMachine {

    private coinCount: number = 0;
    private roulettes: boolean[] = [false, false, false];
    private generateRandomBoolean: () => boolean = () => Math.random() >= 0.5;

    play: () => void = () => {
        this.coinCount++;
        this.roulettes = this.roulettes.map(this.generateRandomBoolean);
        if (this.roulettes.every(r => r)) {
            console.log(`Congratulations!!! You won ${this.coinCount} coins!!`);
            this.coinCount = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}


// TESTS
// const machine1 = new SlotMachine();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();