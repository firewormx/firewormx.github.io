export class Collectible {
    constructor(name, worth) {
        this.name = name;
        this.worth = worth;
        this.count = 0;
    }

    getCollectedMessage() {
        return `${this.count} ${this.name}s collected`;
    }

    collect() {
        this.count++;
    }

    getScore() {
        return this.count * this.worth;
    }
}

export class Coin extends Collectible {
    constructor() {
        super("coin", 10);
    }
}

export class Gem extends Collectible {
    constructor() {
        super("gem", 50);
    }
}
