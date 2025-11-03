// Strating from November 3rd 2025 there be deprecated features that are out of support
console.warn("This module is Deprecated and not recommended to use, its unstable and may have incorrect information!");

const DEPRECATED = {
    matchSuffix: function(input, suffixMap) {
    for (const suf in suffixMap) {
        const [variants] = suffixMap[suf];
        for (const variant of variants) {
            if (typeof variant === "string" && input.endsWith(variant)) {
                return suffixMap[suf];
            }
        }
    }
    return null;
    },

    matchPrefix: (input, prefixMap) => {
        const sortedKeys = Object.keys(prefixMap).sort((a, b) => b.length - a.length);

        const matchedPrefix = sortedKeys.find(p => input.startsWith(p));

        if (!matchedPrefix) {
            return null;
        }

        const metadata = prefixMap[matchedPrefix];

        return [matchedPrefix, metadata];
    }
}