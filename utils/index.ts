export const capitalize = (s: string) =>
  s.toLocaleLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

export const generateKey = (index: number, id: string) => {
  return `${index}-${id}`
}

export const ObjectHasData = (obj: Object | null) => Object.values(obj || {}).length > 0


export const scrollOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.6,
  touchMultiplier: 1,
  smoothTouch: false,
  infinite: false,
}

export function reverseSlug(slug: string) {
  const words = slug?.split('-')
  for (let i = 0; i < words?.length; i++) {
    const word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  return words?.join(' ')
}

export const slugify = (title: string) => {
  if (title) {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }
}

export const isLocal = process.env.NODE_ENV === 'development'
