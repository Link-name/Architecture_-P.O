import SmallChest from './chests/SmallChest.js';
import MediumChest from './chests/MediumChest.js';
import LargeChest from './chests/LargeChest.js';


const chests2 = [new SmallChest(), new MediumChest(), new LargeChest()];

const intervalId2 = setInterval(() => {
    if (chests2.length > 0) {
        const randomIndex = Math.floor(Math.random() * chests2.length);
        chests2[randomIndex].open();
        // Удаление сундука из массива, чтобы не открывать его повторно
        chests2.splice(randomIndex, 1);
    } else {
        clearInterval(intervalId2); 
    }
}, 3000);

