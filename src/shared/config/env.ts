const requireEnv = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(
      `Missing environment variable ${name} — copy .env.example to .env and fill it in`
    );
  }

  return value;
};

// EXPO_PUBLIC_* variables are inlined by Expo at build time and MUST be
// accessed as static `process.env.EXPO_PUBLIC_X` expressions — never dynamically.
export const env = {
  apiUrl: requireEnv('EXPO_PUBLIC_API_URL', process.env.EXPO_PUBLIC_API_URL),
} as const;
