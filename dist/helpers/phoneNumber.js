"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_libphonenumber_1 = require("google-libphonenumber");
const phoneUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
const ACCEPTABLE_TYPES = [
    google_libphonenumber_1.PhoneNumberType.MOBILE,
    google_libphonenumber_1.PhoneNumberType.FIXED_LINE_OR_MOBILE,
    google_libphonenumber_1.PhoneNumberType.FIXED_LINE,
];
function normalizePhoneNumber(number) {
    // Try to normalize the phone number as a Japanese number
    const parsed = phoneUtil.parseAndKeepRawInput(number, 'VN');
    if (!ACCEPTABLE_TYPES.includes(phoneUtil.getNumberType(parsed))) {
        return;
    }
    return phoneUtil.format(parsed, google_libphonenumber_1.PhoneNumberFormat.E164);
}
exports.normalizePhoneNumber = normalizePhoneNumber;
function normalizePhoneNumberNoThrow(number) {
    try {
        return normalizePhoneNumber(number);
    }
    catch (e) {
        console.warn(e);
        return null;
    }
}
exports.normalizePhoneNumberNoThrow = normalizePhoneNumberNoThrow;
//# sourceMappingURL=phoneNumber.js.map