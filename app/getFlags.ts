import { decrypt } from '@vercel/flags';
import type { FlagOverridesType } from '@vercel/flags';
import { cookies } from 'next/headers';

export async function getFlags() {
  const overrideCookie = cookies().get('vercel-flag-overrides')?.value;
  const overrides = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {};

  const flags = {
    banner: overrides?.banner ?? false,
    banner_discount: overrides?.banner_discount ?? 30
  };

  return flags;
}
