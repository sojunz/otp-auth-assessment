import { OTPManager } from './OTPManager.js';

const otpManager =new OTPManager();

const passcode =123456;
const duration = 5 * 60 * 1000;

const result = otpManager.addPasscode(passcode,duration);
console.log(result ? "Already exists, duration updated" : "New passcode added")

setTimeout(() => {
    const isStillVailed = otpManager.isValid(passcode);
    console.log("Is passcode still valid?", isStillValid);
}, 1000);