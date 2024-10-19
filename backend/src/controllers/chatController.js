const groqService = require('../services/groq');
const difficultyService = require('../services/difficulty');

exports.handleChat = async (req, res, next) => {
    try {
        const { userMessage, userLevel, targetLanguage } = req.body;

        const isTranslationRequest = userMessage.toLowerCase().includes('how do you say');
        const isHelpRequest = userMessage.toLowerCase().includes('idk how to reply');

        let botReply;
        if (isTranslationRequest) {
            botReply = await groqService.translateToKnownLanguage(userMessage, targetLanguage);
        } else if (isHelpRequest) {
            botReply = await groqService.getReplySuggestion(targetLanguage);
        } else {
            botReply = await groqService.getReply(userMessage, targetLanguage, userLevel);
        }

        const updatedLevel = await difficultyService.adjustDifficulty(userMessage, botReply, userLevel);

        res.json({ botReply, updatedLevel });
    } catch (error) {
        next(error);
    }
};

exports.handleTranslate = async (req, res, next) => {
    try {
        const { botMessage, knownLanguage } = req.body;
        const translation = await groqService.translateToKnownLanguage(botMessage, knownLanguage);
        res.json({ translation });
    } catch (error) {
        next(error);
    }
};
