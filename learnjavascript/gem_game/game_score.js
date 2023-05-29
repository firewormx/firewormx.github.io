export default class GameScore {
    constructor() {
        this.collectibles = [];
    }

    addCollectible(collectible) {
        this.collectibles.push(collectible);
    }

    getTotalScore() {
        return this.collectibles.reduce((total, current) => {
            return total + current.getScore();
        }, 0);
    }
}
