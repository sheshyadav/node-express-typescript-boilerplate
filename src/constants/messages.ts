export const MESSAGES = {
  SUCCESS: {
    LOGIN: "Login successful.",
    REGISTER: "Account created successfully.",
    LOGOUT: "Logged out successfully.",
    PASSWORD_RESET_SENT: "Password reset link has been sent to your email.",
    PASSWORD_UPDATED: "Password updated successfully.",
    TOKEN_REFRESHED: "Token refreshed successfully.",

    FETCHED: "Data retrieved successfully.",
    CREATED: "Resource created successfully.",
    UPDATED: "Resource updated successfully.",
    DELETED: "Resource deleted successfully.",
    DEFAULT: "Request processed successfully.",
  },

  ERROR: {
    INVALID_ID: "The provided ID is invalid.",
    SOMETHING_WENT_WRONG: "Something went wrong on our end.",
    INVALID_CREDENTIALS: "The email or password you entered is incorrect.",
    EMAIL_ALREADY_EXISTS: "An account with this email already exists.",
    USER_NOT_FOUND: "No user found with this email address.",
    ACCOUNT_LOCKED: "Your account has been locked due to too many failed attempts.",
    NOT_VERIFIED: "Please verify your email address to continue.",
  },

  TOKEN: {
    MISSING: "Access denied. No token provided.",
    EXPIRED: "Session expired. Please login again.",
    INVALID: "Invalid token. Please login again.",
    UNAUTHORIZED: "You do not have permission to perform this action.",
  },

  PASSWORD: {
    TOO_SHORT: "Password must be at least 8 characters long.",
    MISMATCH: "Passwords do not match.",
    SAME_AS_OLD: "New password cannot be the same as the old password.",
    INCORRECT_CURRENT: "The current password you entered is incorrect.",
  }
} as const;