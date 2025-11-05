export const removeCharCountSuffix = (text: string): string => {
    return text.replace(/\s*\[\+\d+\s*chars\]$/i, '');
}
