export function html(strings, ...values) {
  return strings.reduce((result, string, index) => {
    const value = index < values.length ? values[index] : ''

    return result + string + value
  }, '')
}