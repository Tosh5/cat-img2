export const parseNumberOfEnv = (value: string | undefined) => {
    if (typeof value === 'undefined') return undefined
    const nValue = Number(value)
    if (isNaN(nValue)) return undefined
    return nValue
  }
  export const parseBooleanOfEnv = (value: string | undefined) => {
    if (typeof value === 'undefined') return undefined
    switch(value.toLowerCase()) {
      case 'true': case'1': return true
      case 'false': case '0': return false
      default: return undefined
    }
  }