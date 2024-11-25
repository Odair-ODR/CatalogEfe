export function concatClassName(...values: string[]) {
    if (values == null) return '';
    return values.filter(Boolean).join(' ');
}