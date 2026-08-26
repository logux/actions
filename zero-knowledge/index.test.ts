import { deepStrictEqual, equal } from 'node:assert'
import { test } from 'node:test'

import type { ZeroAction } from '../index.js'
import { zero, zeroClean, zeroPacker } from '../index.js'

function bytes(from: number, length: number): Uint8Array {
  return new Uint8Array(Array.from({ length }, (_, i) => from + i))
}

test('creates actions', () => {
  let d = bytes(100, 4)
  let iv = bytes(0, 12)
  deepStrictEqual(zero({ compressed: false, d, iv }), {
    compressed: false,
    d,
    iv,
    type: '0'
  })
  deepStrictEqual(zeroClean({ id: '1 10:1:1 0' }), {
    id: '1 10:1:1 0',
    type: '0/clean'
  })
  deepStrictEqual(zeroClean({ ids: ['1 10:1:1 0'] }), {
    ids: ['1 10:1:1 0'],
    type: '0/clean'
  })
})

test('moves binary fields to blob', () => {
  let action = zero({ compressed: false, d: bytes(100, 4), iv: bytes(0, 12) })
  deepStrictEqual(zeroPacker.pack(action), {
    action: { compressed: false, type: '0' },
    blob: new Uint8Array([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 101, 102, 103
    ])
  })
})

test('keeps compression flag', () => {
  let action = zero({ compressed: true, d: bytes(100, 4), iv: bytes(0, 12) })
  deepStrictEqual(zeroPacker.pack(action)!.action, {
    compressed: true,
    type: '0'
  })
})

test('unpacks blob back to action', () => {
  let packed = {
    action: { compressed: true, type: '0' as const },
    blob: new Uint8Array([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 101, 102, 103
    ])
  }
  deepStrictEqual(zeroPacker.unpack(packed), {
    compressed: true,
    d: bytes(100, 4),
    iv: bytes(0, 12),
    type: '0'
  })
})

test('unpacks empty data', () => {
  let action = zero({
    compressed: false,
    d: new Uint8Array(0),
    iv: bytes(0, 12)
  })
  let packed = zeroPacker.pack(action)!
  equal(packed.blob.length, 12)
  deepStrictEqual(zeroPacker.unpack(packed), action)
})

test('has lossless round-trip', () => {
  let actions: ZeroAction[] = [
    zero({ compressed: false, d: bytes(200, 30), iv: bytes(50, 12) }),
    zero({ compressed: true, d: bytes(0, 256), iv: bytes(1, 12) })
  ]
  for (let action of actions) {
    deepStrictEqual(zeroPacker.unpack(zeroPacker.pack(action)!), action)
  }
})

test('does not use blob memory of packed action', () => {
  let action = zero({ compressed: false, d: bytes(100, 4), iv: bytes(0, 12) })
  let packed = zeroPacker.pack(action)!
  let unpacked = zeroPacker.unpack(packed)!
  packed.blob.fill(0)
  deepStrictEqual(unpacked.d, bytes(100, 4))
  deepStrictEqual(unpacked.iv, bytes(0, 12))
})
