// Chest.js
class Chest {
    constructor(goldAmount) {
        if (new.target === Chest) {
            throw new Error("Cannot instantiate abstract class Chest directly");
        }
        this.goldAmount = goldAmount;
    }

    open() {
        const now = new Date();
        const year = now.getFullYear(); // Получение текущего года
        const time = now.toLocaleTimeString(); // Получение текущего времени
    
        console.log(`Сундук открыт в ${year} году, в ${time}. Найдено золота: ${this.goldAmount}`);
    }
}

export default Chest;
