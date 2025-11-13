// Affixes and conjugation
window.modules = window.modules || []

if (!window.modules.includes("MainMap")) {
    throw new Error("AffixesMap requires MainMap to be loaded first.")
}

if (!window.modules.includes("CharacterMap")) {
    throw new Error("AffixesMap requires CharacterMap to be loaded first.")
}



NOUNS.SUFFIXES.MAP = {
    [IDS.MOODS.D]: {
        [GENDERS.MAP.E.NAME]: {
            [IDS.NUMBERS.S]: { 1: "ēn", 2: "æn", 3: "ēn", 4: "ħán" },
            [IDS.NUMBERS.D]: { 1: "(ē)χen", 2: "(y)χen", 3: "(o)χen", 4: "ħóχħon" },
            [IDS.NUMBERS.P]: { 1: "illyn", 2: "ān", 3: "ē'yn", 4: "q̇yn" }
        },
        [GENDERS.MAP.R.NAME]: {
            [IDS.NUMBERS.S]: { 1: "ēf", 2: "(a)xef", 3: "lef", 4: "lef" },
            [IDS.NUMBERS.D]: { 1: "eχef", 2: "hyf", 3: "(o)χef", 4: "(o)χef" },
            [IDS.NUMBERS.P]: { 1: "yf", 2: "hyf", 3: "'yf", 4: "'yf" }
        },
        [GENDERS.MAP.MON.NAME]: {
            [IDS.NUMBERS.S]: { 1: "ô", 2: "ô", 3: "ô", 4: "ô" },
            [IDS.NUMBERS.D]: { 1: "yħq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
            [IDS.NUMBERS.P]: { 1: "oħô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
        },
        [GENDERS.MAP.I.NAME]: {
            [IDS.NUMBERS.S]: { 1: "llūl", 2: "cūl", 3: "cūl", 4: "cūl" },
            [IDS.NUMBERS.D]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" },
            [IDS.NUMBERS.P]: { 1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl" } // /\(/o.o\)/\ - Spooky the spider
        },
        [GENDERS.MAP.MAG.NAME]: {
            [IDS.NUMBERS.S]: { 1: "(ō)χ", 2: "huχ", 3: "huχ", 4: "q̇ħúχ" },
            [IDS.NUMBERS.D]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" },
            [IDS.NUMBERS.P]: { 1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ" }
        },
        [GENDERS.MAP.MUN.NAME]: {
            [IDS.NUMBERS.S]: { 1: "(e)rk", 2: "tyk", 3: "tyk", 4: "(á)rk" },
            [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
            [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
        },
        [GENDERS.MAP.A.NAME]: {
            [IDS.NUMBERS.S]: { 1: "(y)q̇", 2: "(o)q̇", 3: "(o)q̇", 4: "(ú)ħáq̇" },
            [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
            [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
        }
    },
    [IDS.MOODS.R]: {
        [GENDERS.MAP.E.NAME]: {
            [IDS.NUMBERS.S]: { 1: "oħân", 2: "ħân", 3: "ēqân", 4: "qân" },
            [IDS.NUMBERS.D]: { 1: "ħân", 2: "(ō)n", 3: "on", 4: "ħûn" },
            [IDS.NUMBERS.P]: { 1: "illyrn", 2: "(ō)rn", 3: "ē'yrn", 4: "q̇yrn" }
        },
        [GENDERS.MAP.R.NAME]: {
            [IDS.NUMBERS.S]: { 1: "oħâf", 2: "ħâf", 3: "(o)qâf", 4: "(o)qâf" },
            [IDS.NUMBERS.D]: { 1: "īllyf", 2: "(')ūllef", 3: "yf", 4: "yf" },
            [IDS.NUMBERS.P]: { 1: "īllyf", 2: "(')ūllef", 3: "ūlef", 4: "'ūlef" }
        },
        [GENDERS.MAP.MON.NAME]: {
            [IDS.NUMBERS.S]: { 1: "oħô", 2: "qâħó", 3: "qâħó", 4: "ô" },
            [IDS.NUMBERS.D]: { 1: "ūħó", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" },
            [IDS.NUMBERS.P]: { 1: "ōq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô" }
        },
        [GENDERS.MAP.I.NAME]: {
            [IDS.NUMBERS.S]: { 1: "llūl", 2: "qâllūl", 3: "qâllūl", 4: "qâllūl" },
            [IDS.NUMBERS.D]: { 1: "(y)ll'ūl", 2: "(')llūl", 3: "(')llūl", 4: "(')llūl" },
            [IDS.NUMBERS.P]: { 1: "(y)ll'ūl", 2: "(')ūcūl", 3: "(')ūcūl", 4: "(')ūcūl" }
        },
        [GENDERS.MAP.MAG.NAME]: {
            [IDS.NUMBERS.S]: { 1: "(ō)ħúχħ", 2: "(y)q̇ħôχ", 3: "(y)q̇ħôχ", 4: "q̇ħôχ" },
            [IDS.NUMBERS.D]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" },
            [IDS.NUMBERS.P]: { 1: "(a)lluχ", 2: "(y)lūrχ", 3: "(y)lūrχ", 4: "(')ūrχ" }
        },
        [GENDERS.MAP.MUN.NAME]: {
            [IDS.NUMBERS.S]: { 1: "(o)ħárk", 2: "ħárk", 3: "ħárk", 4: "q̇ħárk" },
            [IDS.NUMBERS.D]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" },
            [IDS.NUMBERS.P]: { 1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk" }
        },  // /\(/o.o\)/\ - Spooky the spider
        [GENDERS.MAP.A.NAME]: {
            [IDS.NUMBERS.S]: { 1: "aħôq̇", 2: "(y)q̇ħôq̇", 3: "(y)q̇ħôq̇", 4: "áq̇ħôq̇" },
            [IDS.NUMBERS.D]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" },
            [IDS.NUMBERS.P]: { 1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇" }
        }
    }
}

ADJECTIVES.SUFFIXES.MAP = NOUNS.SUFFIXES.MAP;

VERBS.PREFIXES.MAP = {
    1: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "xen", [GENDERS.MAP.R.NAME]: "xef", [GENDERS.MAP.MON.NAME]: "χħô", [GENDERS.MAP.I.NAME]: "xellu", [GENDERS.MAP.MAG.NAME]: "xo", [GENDERS.MAP.MUN.NAME]: "xyr", [GENDERS.MAP.A.NAME]: "xy" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "xyn", [GENDERS.MAP.R.NAME]: "xyf", [GENDERS.MAP.MON.NAME]: "xóħ", [GENDERS.MAP.I.NAME]: "llu", [GENDERS.MAP.MAG.NAME]: "ho", [GENDERS.MAP.MUN.NAME]: "ry", [GENDERS.MAP.A.NAME]: "hy" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "hen", [GENDERS.MAP.R.NAME]: "hef", [GENDERS.MAP.MON.NAME]: "hô", [GENDERS.MAP.I.NAME]: "llu", [GENDERS.MAP.MAG.NAME]: "ho", [GENDERS.MAP.MUN.NAME]: "ry", [GENDERS.MAP.A.NAME]: "hy" }
    },
    2: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "syn", [GENDERS.MAP.R.NAME]: "sy", [GENDERS.MAP.MON.NAME]: "sô", [GENDERS.MAP.I.NAME]: "sucu", [GENDERS.MAP.MAG.NAME]: "su", [GENDERS.MAP.MUN.NAME]: "syr", [GENDERS.MAP.A.NAME]: "su" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "són", [GENDERS.MAP.R.NAME]: "sónlli", [GENDERS.MAP.MON.NAME]: "sónq̇ħó", [GENDERS.MAP.I.NAME]: "sóncu", [GENDERS.MAP.MAG.NAME]: "thâ", [GENDERS.MAP.MUN.NAME]: "thár", [GENDERS.MAP.A.NAME]: "thá" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tháħ", [GENDERS.MAP.R.NAME]: "tháll", [GENDERS.MAP.MON.NAME]: "tháq̇ħó", [GENDERS.MAP.I.NAME]: "thácu", [GENDERS.MAP.MAG.NAME]: "thâ", [GENDERS.MAP.MUN.NAME]: "thár", [GENDERS.MAP.A.NAME]: "thá" }
    },
    3: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "ten", [GENDERS.MAP.R.NAME]: "tolli", [GENDERS.MAP.MON.NAME]: "tô", [GENDERS.MAP.I.NAME]: "tócu", [GENDERS.MAP.MAG.NAME]: "toħ", [GENDERS.MAP.MUN.NAME]: "try", [GENDERS.MAP.A.NAME]: "to" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "q̇yn", [GENDERS.MAP.R.NAME]: "q̇yll", [GENDERS.MAP.MON.NAME]: "q̇ħó", [GENDERS.MAP.I.NAME]: "q̇ácu", [GENDERS.MAP.MAG.NAME]: "tū", [GENDERS.MAP.MUN.NAME]: "tur", [GENDERS.MAP.A.NAME]: "tu" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tyn", [GENDERS.MAP.R.NAME]: "tyf", [GENDERS.MAP.MON.NAME]: "tuħ", [GENDERS.MAP.I.NAME]: "tīll", [GENDERS.MAP.MAG.NAME]: "tū", [GENDERS.MAP.MUN.NAME]: "tur", [GENDERS.MAP.A.NAME]: "tu" }
    }
}

VERBS.SUFFIXES.MAP = {
    1: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "(o)n", [GENDERS.MAP.R.NAME]: "(y)f", [GENDERS.MAP.MON.NAME]: "(u)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "(u)χ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(y)q̇" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(')æ­n", [GENDERS.MAP.R.NAME]: "(')æf", [GENDERS.MAP.MON.NAME]: "(')ô", [GENDERS.MAP.I.NAME]: "(')allūl", [GENDERS.MAP.MAG.NAME]: "(')ōχ", [GENDERS.MAP.MUN.NAME]: "(')ar", [GENDERS.MAP.A.NAME]: "(y)q̇" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "(')æ­n", [GENDERS.MAP.R.NAME]: "(')æf", [GENDERS.MAP.MON.NAME]: "(')ô", [GENDERS.MAP.I.NAME]: "(')allūl", [GENDERS.MAP.MAG.NAME]: "(')ōχ", [GENDERS.MAP.MUN.NAME]: "(')ar", [GENDERS.MAP.A.NAME]: "(y)q̇" }
    },
    2: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "(u)n", [GENDERS.MAP.R.NAME]: "(u)f", [GENDERS.MAP.MON.NAME]: "(u)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "(u)χ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(u)q̇" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(o)nēn", [GENDERS.MAP.R.NAME]: "nef", [GENDERS.MAP.MON.NAME]: "(á)ħó", [GENDERS.MAP.I.NAME]: "(á)llul", [GENDERS.MAP.MAG.NAME]: "(ó)nōχ", [GENDERS.MAP.MUN.NAME]: "(á)r", [GENDERS.MAP.A.NAME]: "ħóq̇" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "ħen", [GENDERS.MAP.R.NAME]: "ħáf", [GENDERS.MAP.MON.NAME]: "(á)ħó", [GENDERS.MAP.I.NAME]: "(á)llul", [GENDERS.MAP.MAG.NAME]: "(ó)nōχ", [GENDERS.MAP.MUN.NAME]: "(á)r", [GENDERS.MAP.A.NAME]: "ħóq̇" }
    },
    3: {
        [IDS.NUMBERS.S]: { [GENDERS.MAP.E.NAME]: "tón", [GENDERS.MAP.R.NAME]: "ħyf", [GENDERS.MAP.MON.NAME]: "(o)ħó", [GENDERS.MAP.I.NAME]: "llul", [GENDERS.MAP.MAG.NAME]: "ħuχ", [GENDERS.MAP.MUN.NAME]: "(u)r", [GENDERS.MAP.A.NAME]: "(ú)q̇" },
        [IDS.NUMBERS.D]: { [GENDERS.MAP.E.NAME]: "(q̇)ân", [GENDERS.MAP.R.NAME]: "(y)q̇ħáf", [GENDERS.MAP.MON.NAME]: "ħó", [GENDERS.MAP.I.NAME]: "(ú)cul", [GENDERS.MAP.MAG.NAME]: "ħúχ", [GENDERS.MAP.MUN.NAME]: "(ú)r", [GENDERS.MAP.A.NAME]: "(u)q̇" },
        [IDS.NUMBERS.P]: { [GENDERS.MAP.E.NAME]: "tun", [GENDERS.MAP.R.NAME]: "if", [GENDERS.MAP.MON.NAME]: "ħó", [GENDERS.MAP.I.NAME]: "(ú)cul", [GENDERS.MAP.MAG.NAME]: "ħúχ", [GENDERS.MAP.MUN.NAME]: "(ú)r", [GENDERS.MAP.A.NAME]: "(u)q̇" }
    }
}

PRONOUNS.MAP = {
    [GENDERS.MAP.E.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "xēn", oblique: "xon" }, 2: { subject: "syn", oblique: "sun" }, 3: { subject: "tēn", oblique: "tôn" } },
        [IDS.NUMBERS.D]: { 1: { subject: "xefyn", oblique: "xō'æ­n" }, 2: { subject: "sônen", oblique: "sônēn" }, 3: { subject: "toq̇án", oblique: "toq̇ân" } },
        [IDS.NUMBERS.P]: { 1: { subject: "hēn", oblique: "he'æ­n" }, 2: { subject: "tháħán", oblique: "thâħen" }, 3: { subject: "tun", oblique: "tūn" } }
    },
    [GENDERS.MAP.R.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "xēf", oblique: "xyf" }, 2: { subject: "syf", oblique: "suf" }, 3: { subject: "toq̇llif", oblique: "tôħyf" } },
        [IDS.NUMBERS.D]: { 1: { subject: "xef", oblique: "xō'æf" }, 2: { subject: "sônllif", oblique: "sônēf" }, 3: { subject: "toq̇âf", oblique: "toq̇ħáf" } },
        [IDS.NUMBERS.P]: { 1: { subject: "hēf", oblique: "he'æf" }, 2: { subject: "thâllif", oblique: "tháħáf" }, 3: { subject: "tyf", oblique: "tūq̇llif" } }
    },
    [GENDERS.MAP.MON.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.D]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.P]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } }
    },
    [GENDERS.MAP.I.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.D]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.P]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } }
    },
    [GENDERS.MAP.MAG.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.D]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.P]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } }
    },
    [GENDERS.MAP.MUN.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.D]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.P]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } }
    },
    [GENDERS.MAP.A.NAME]: {
        [IDS.NUMBERS.S]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.D]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } },
        [IDS.NUMBERS.P]: { 1: { subject: "", oblique: "" }, 2: { subject: "", oblique: "" }, 3: { subject: "", oblique: "" } }
    }
}

function flattenSuffixMatches(suffixes, type) {
    const result = {};
    const isNoun = type === "n";
    
    const suffixPaths = {};
    
    if (isNoun) {
        for (const mood in suffixes) {
            for (const gender in suffixes[mood]) {
                for (const num in suffixes[mood][gender]) {
                    for (const decl in suffixes[mood][gender][num]) {
                        const suf = suffixes[mood][gender][num][decl];
                        if (!suf) continue;
                        
                        if (!suffixPaths[suf]) {
                            suffixPaths[suf] = { mood, gender, numbers: new Set(), declensions: new Set() };
                        }
                        suffixPaths[suf].numbers.add(num);
                        suffixPaths[suf].declensions.add(Number(decl));
                    }
                }
            }
        }
    } else {
        for (const person in suffixes) {
            for (const num in suffixes[person]) {
                for (const gender in suffixes[person][num]) {
                    const suf = suffixes[person][num][gender];
                    if (!suf) continue;
                    
                    if (!suffixPaths[suf]) {
                        suffixPaths[suf] = { person: Number(person), gender, numbers: new Set() };
                    }
                    suffixPaths[suf].numbers.add(num);
                }
            }
        }
    }
    
    for (const suf in suffixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(suf);
        let variants;
        
        if (entries?.length) {
            const firstEntry = entries[0];
            if (firstEntry.prop?.includes(REG.OPTIONAL)) {
                variants = [CHARACTERS.entriesToText(entries), CHARACTERS.entriesToText(entries, true)];
            } else if (firstEntry.prop?.includes(REG.VOWEL)) {
                const pyric = CHARACTERS.getPyricEquivalent(firstEntry);
                variants = pyric != null 
                    ? [suf, CHARACTERS.entriesToText([pyric, ...entries.slice(1)])]
                    : [suf];
            } else {
                variants = [suf];
            }
        } else {
            console.warn(`Could not parse suffix: ${suf}`);
            variants = [suf];
        }
        
        const path = suffixPaths[suf];
        const numbers = Array.from(path.numbers);
        
        result[suf] = isNoun
            ? [suf, variants, [path.mood, path.gender, numbers, Array.from(path.declensions).sort((a, b) => a - b)], "n"]
            : [suf, variants, [path.person, numbers, path.gender], "v"];
    }
    
    return result;
}

function flattenPrefixMatches(prefixesMap) {
    const result = {};
    const prefixPaths = {};
    
    for (const person in prefixesMap) {
        for (const num in prefixesMap[person]) {
            for (const gender in prefixesMap[person][num]) {
                const prefix = prefixesMap[person][num][gender];
                if (!prefix) continue;
                
                if (!prefixPaths[prefix]) {
                    prefixPaths[prefix] = { person: Number(person), gender, numbers: new Set() };
                }
                prefixPaths[prefix].numbers.add(num);
            }
        }
    }
    
    for (const prefix in prefixPaths) {
        const entries = CHARACTERS.textToEntriesByAnyText(prefix);
        let variants;
        
        if (entries?.length) {
            const lastEntry = entries[entries.length - 1];
            variants = lastEntry.prop?.includes(REG.VOWEL)
                ? [prefix + CHARACTERS.MAP["ax"].letter, prefix]
                : [prefix];
        } else {
            variants = [prefix];
        }
        
        const path = prefixPaths[prefix];
        result[prefix] = [prefix, variants, [path.person, Array.from(path.numbers), path.gender], "v"];
    }
    
    return result;
}

NOUNS.SUFFIXES.FLAT_MATCHES = flattenSuffixMatches(NOUNS.SUFFIXES.MAP, "n");
ADJECTIVES.SUFFIXES.FLAT_MATCHES = NOUNS.SUFFIXES.FLAT_MATCHES;
VERBS.SUFFIXES.FLAT_MATCHES  = flattenSuffixMatches(VERBS.SUFFIXES.MAP, "v");
VERBS.PREFIXES.FLAT_MATCHES  = flattenPrefixMatches(VERBS.PREFIXES.MAP);

WORD_UTILS.matchAffix = function (input, map, isPrefix = true, returnAll = false) {
    if (!input || typeof input !== "string") return null;

    const matches = [];
    let best = null;
    let bestLen = 0;

    for (const [key, val] of Object.entries(map)) {
        const variants = Array.isArray(val[1]) ? val[1] : [key];
        for (const v of variants) {
            if (typeof v !== "string") continue;
            const match = isPrefix ? input.startsWith(v) : input.endsWith(v);
            if (!match) continue;

            if (returnAll) matches.push(val);
            else if (v.length > bestLen) {
                best = val;
                bestLen = v.length;
            }
        }
    }

    if (returnAll) return matches.length ? matches : null;
    return best;
};



WORD_UTILS.connectSplit = function(prefix = "", text = "", suffix = "") {
    let text_entries = CHARACTERS.textToEntriesByAnyText(text);
    let prefix_entries = CHARACTERS.textToEntriesByAnyText(prefix);
    let suffix_entries = CHARACTERS.textToEntriesByAnyText(suffix);

    if (!text_entries) return [];

    if (prefix_entries) {
        const first_text = text_entries[0];
        const last_prefix = prefix_entries[prefix_entries.length - 1];
        if (last_prefix && last_prefix.prop.includes(window.REG.VOWEL) && first_text.prop.includes(window.REG.VOWEL) ) {
            prefix_entries.push(CHARACTERS.MAP["ax"])
        }
        
    }

    if (suffix_entries) {
        const last_text = text_entries[text_entries.length - 1];
        let first_suffix = suffix_entries[0];

        if (first_suffix) {
            if (first_suffix.prop.includes(window.REG.VOWEL)) {
                if (first_suffix.prop.includes(window.REG.OPTIONAL)) {
                    if (last_text && last_text.prop.includes(window.REG.VOWEL)) {
                        suffix_entries.shift();
                    }
                } else if (last_text && last_text.prop.includes(window.REG.VOWEL)) {
                    if (last_text.prop.includes(window.REG.PYRIC)) {
                        const pyric = CHARACTERS.getPyricEquivalent(first_suffix);
                        if (pyric) first_suffix = pyric;
                        suffix_entries[0] = first_suffix;
                    }
                    text_entries.pop();
                }
            } else if (first_suffix.prop.includes(window.REG.CONSONANT) && first_suffix.prop.includes(window.REG.OPTIONAL)) {
                if (!last_text || !last_text.prop.includes(window.REG.VOWEL)) {
                    suffix_entries.shift();
                }
            }
        }
    }

    return [prefix_entries, text_entries, suffix_entries];
}

WORD_UTILS.connect = function(prefix = "", text = "", suffix = "") {
    const entries = WORD_UTILS.connectSplit(prefix, text, suffix);
    return entries.flat();
}

WORD_UTILS.connectSuffix = function(text, suffix) { return WORD_UTILS.connect("", text, suffix) }
WORD_UTILS.connectPrefix = function(text, prefix) { return WORD_UTILS.connect(prefix, text, "") }

window.modules.push("AffixesMap")