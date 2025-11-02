OTP Authentication System

This JavaScript program implements a simple one-time passcode (OTP) authentication system for Kiwi Sports Apparel. It allows temporary passcodes to be added and validated within a specified time window.

Features

- Add passcodes with custom expiration durations
- Automatically overwrite expiration time if passcode is still valid
- Validate passcodes based on current time
- Lightweight and modular design using ES modules

Files

- `OTPManager.js`: Defines the `OTPManager` class with `addPasscode()` and `isValid()` methods
- `main.js`: Demonstrates usage of the OTPManager class with sample passcode logic
- `README.md`: Project overview and summary

How It Works

Passcodes are stored in a `Map` with their expiration timestamps. When a passcode is added, the system checks if it already exists and is still valid. If so, the expiration time is updated. Otherwise, it is treated as a new passcode. The `isValid()` method checks whether a passcode is still within its valid time window.

---

📚 Summary (100 words)

This program creates a secure one-time passcode system for Kiwi Sports Apparel’s login feature. It uses a class called `OTPManager` to store passcodes and their expiration times. The `addPasscode()` method adds a passcode and sets its validity duration, returning `true` if the passcode already exists and is still valid, or `false` if it’s new or expired. The `isValid()` method checks whether a passcode is still valid. The system uses JavaScript ES modules and `Map` for efficient passcode management. This implementation demonstrates core concepts from Module 1 and 2, including classes, methods, conditional logic, and modular code structure.
