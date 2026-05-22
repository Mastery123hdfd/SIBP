const SessionLimit = 20;
let currentSessions = 0;
let userLoginMap = [];

async function GenerateSession(){
    if (currentSessions >= SessionLimit) {
        throw new Error("Session limit reached");
    }
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const sessionData = {
        sessionId: sessionId,
        createdAt: new Date().toISOString()
    }
    currentSessions++;
    return sessionData;
}
module.exports = { GenerateSession };