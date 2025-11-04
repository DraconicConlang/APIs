function test(fn, expected, ...args) {
  const result = fn(...args)
  if (result === expected) console.log(`Test ${fn.name}(${args.join(", ")}) passed.`)
  else console.error(`Test ${fn.name}(${args.join(", ")}) failed: expected ${expected}, got ${result}`)
}

