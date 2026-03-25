import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines Tailwind classes with clsx and merges conflicting ones with tailwind-merge.
 * Used for dynamic class management.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
