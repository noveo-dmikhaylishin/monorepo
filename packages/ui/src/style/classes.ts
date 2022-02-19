type Classes = Classes[] | Record<string, unknown> | string[] | string | undefined

const classesToString = (classes: Classes = ''): string => {
  if (Array.isArray(classes)) {
    return classes.filter(Boolean).map(classesToString).join(' ')
  }

  if (typeof classes === 'object') {
    return Object.keys(classes)
      .filter(className => classes[className])
      .join(' ')
  }

  return classes
}

export const classNames = (...args: Classes[]): string => classesToString(args)
