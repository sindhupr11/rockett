
exports.adjustDifficulty = async (userMessage, botReply, currentLevel) => {
    let newLevel = currentLevel;

    if (userMessage.toLowerCase().includes("translate")) {
        newLevel = Math.max(1, currentLevel - 1);  
    } else {
        newLevel = Math.min(10, currentLevel + 1);  
    }

    return newLevel;
};
