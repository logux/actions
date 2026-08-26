import { defineAction } from '../define-action/index.js'

export const zero = defineAction('0')

export const zeroClean = defineAction('0/clean')

export const zeroPacker = {
  pack(action) {
    let { d, iv, ...rest } = action
    let blob = new Uint8Array(iv.length + d.length)
    blob.set(iv)
    blob.set(d, iv.length)
    return { blob, action: rest }
  },

  unpack(packed) {
    return {
      ...packed.action,
      d: packed.blob.slice(12),
      iv: packed.blob.slice(0, 12)
    }
  }
}
