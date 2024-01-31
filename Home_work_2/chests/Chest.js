// Chest.js
class Chest {
    constructor(goldAmount) {
        if (new.target === Chest) {
            throw new Error("Cannot instantiate abstract class Chest directly");
        }
        this.goldAmount = goldAmount;
    }

    open() {
        const year = new Date().getFullYear(); // Получение текущего года
        console.log(`Сундук открыт в ${year} году. Найдено золота: ${this.goldAmount}`);
    }
}

export default Chest;
