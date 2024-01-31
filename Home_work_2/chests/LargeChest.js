import Chest from './Chest.js';

class LargeChest extends Chest {
    constructor() {
        super(1000); // 100 золота в маленьком сундуке
    }
}

export default LargeChest;