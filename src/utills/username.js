

const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

//Math.random will generate number between 0 to 

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 7)]
    const obj = OBJECTS[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
}

// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())


module.exports = {
    genRandomUsername
}