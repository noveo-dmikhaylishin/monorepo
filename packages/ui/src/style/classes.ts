export type ObjectClasses = Record<string, unknown>
export type ArrayClasses = Classes[] | string[]

export type Classes = ObjectClasses | ArrayClasses | string | undefined

const classesToString = (classes: Classes = ''): string => {
  if (Array.isArray(classes)) {
    return classes.map(classesToString).filter(Boolean).join(' ')
  }

  if (typeof classes === 'object') {
    return Object.keys(classes)
      .filter(className => classes[className])
      .join(' ')
  }

  return classes
}

export const classNames = (...args: Classes[]): string => classesToString(args)
