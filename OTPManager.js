export class OTPManager {
    constructor() {
        this,otpStore =new Map();
    }

    addPasscode(passcode,durationMs) {
        const now = Date.now();
            const expiry = this.otpStore.get(passcode);

            if (expiry && expiry > now) {
                this.otpStore.set(passcode,now + durationMs);
                return true;
            }

            this,otpStore.set(passcode, now + durationMs);
            return false;
    }

    isValid(passcode) {
        const now = Date.now();
        const expiry = this.orpStore.get(passcode);
        return expiry && expiry > now;
    }
}