/**
 * Concatenates given class name values into a space-delimited string, ignoring falsy entries.
 *
 * @param classes - Class name values to include; falsy values (`false`, `null`, `undefined`, `""`) are ignored
 * @returns A string of the truthy class names separated by a single space. Returns an empty string if no truthy values are provided
 */
export function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}