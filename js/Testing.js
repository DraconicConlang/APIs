function testFn(fn, expected, name, ...args) {
  const result = fn(...args)
  if (JSON.stringify(result) === JSON.stringify(expected))
    console.log(`Test ${name}(${args.join(", ")}) passed.`)
  else
    console.error(`Test ${name}(${args.join(", ")}) failed:\nexpected ${JSON.stringify(expected)}\ngot ${JSON.stringify(result)}`)
}

function testVal(val, expected, name) {
  if (val === expected)
    console.log(`Test ${name} passed.`)
  else
    throw new Error(`Test ${name} failed: expected ${expected}, got ${val}`)
}


function testTextToEntries() {
  try {
    testFn(CHARACTERS.textToEntriesByText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByText", "tckqq̇'trskxqχqħq̇ħdzgfthllxχhχħħrleæyaouiēāōūīmnŋáóúâôû")
    testFn(CHARACTERS.textToEntriesByRom, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByRom", "tckqQ'trskxqXqHQHdzgfthllxXhXHHrleaeyaouieeaaoouuiimnngAOUAAOOUU")
    testFn(CHARACTERS.textToEntriesByGlyph, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByGlyphs", "")
    testFn(CHARACTERS.textToEntriesByDiscord, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByDiscord", ":t_::c_::k_::q_::Q_::__::tr::s_::kx::qX::qH::QH::d_::z_::g_::f_::th::ll::x_::X_::h_::XH::H_::r_::l_::e_::ae::y_::a_::o_::u_::i_::ee::aa::oo::uu::ii::m_::n_::ng_::a_::_pyr::o_::_pyr::u_::_pyr::aa::_pyr::oo::_pyr::uu::_pyr:")
    testFn(CHARACTERS.textToEntriesByAnyText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByAnyText (Text)", "tckqq̇'trskxqχqħq̇ħdzgfthllxχhχħħrleæyaouiēāōūīmnŋáóúâôû")
    testFn(CHARACTERS.textToEntriesByAnyText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByAnyText (Rom)", "tckqQ'trskxqXqHQHdzgfthllxXhXHHrleaeyaouieeaaoouuiimnngAOUAAOOUU")
    testFn(CHARACTERS.textToEntriesByAnyText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByAnyText (Glyphs)", "")
    testFn(CHARACTERS.textToEntriesByAnyText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByAnyText (Discord)", ":t_::c_::k_::q_::Q_::__::tr::s_::kx::qX::qH::QH::d_::z_::g_::f_::th::ll::x_::X_::h_::XH::H_::r_::l_::e_::ae::y_::a_::o_::u_::i_::ee::aa::oo::uu::ii::m_::n_::ng_::a_::_pyr::o_::_pyr::u_::_pyr::aa::_pyr::oo::_pyr::uu::_pyr:")
    testFn(CHARACTERS.textToEntriesByAnyText, CHARACTERS.FLAT.slice(0, -4), "textToEntriesByAnyText (Mixed)", "tckqq̇'trskxqχqħq̇ħdzgfthllxXhXHHrle:ae::y_::a_::o_::u_::i_::ee::aa::oo::uu::ii:")

    return true
  } catch (e) {
    return e
  }
}

function runTests() {
  testVal(testTextToEntries(), true, "testTextToEntries")
}