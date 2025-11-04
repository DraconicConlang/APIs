// Strating from November 3rd 2025 there be deprecated features that are out of support
// If the function wont work in any way, it will be deleted
console.warn("This module is Deprecated and not recommended to use, its unstable and may have incorrect information!");

WORD_UTILS.matchSuffix = function(input, suffixMap) {
    for (const suf in suffixMap) {
        const [variants] = suffixMap[suf];
        for (const variant of variants) {
            if (typeof variant === "string" && input.endsWith(variant)) {
                return suffixMap[suf];
            }
        }
    }
    return null;
}

WORD_UTILS.matchPrefix = (input, prefixMap) => {
    const sortedKeys = Object.keys(prefixMap).sort((a, b) => b.length - a.length);

    const matchedPrefix = sortedKeys.find(p => input.startsWith(p));

    if (!matchedPrefix) {
        return null;
    }

    const metadata = prefixMap[matchedPrefix];

    return [matchedPrefix, metadata];
};

WORD_UTILS.axifyVowelCouples = function(prefix, stem, suffix) {
    prefix = CHARACTERS.textToEntriesByAnyText(prefix);
    stem = CHARACTERS.textToEntriesByAnyText(stem);
    suffix = CHARACTERS.textToEntriesByAnyText(suffix);
    
    new_prefix = [...prefix]
    if (prefix.length && stem.length && 
        prefix[prefix.length - 1].prop.includes(REG.VOWEL) && 
        stem[0].prop.includes(REG.VOWEL)) {
        new_prefix.push(CHARACTERS.MAP["ax"]);
    }
    return [CHARACTERS.entriesToText(new_prefix), CHARACTERS.entriesToText(stem), CHARACTERS.entriesToText(suffix)]
}