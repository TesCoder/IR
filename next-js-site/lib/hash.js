import SimpleEncryptor from 'simple-encryptor'

// We don't care if this key is exposed because security doesn't matter
const encryptor = SimpleEncryptor.createEncryptor("abcdefghijklmnop")
export default encryptor
