import { useStore } from '@/utils/store'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export function Link({ href, children, ...rest }) {
  const router = useRouter()
  const setTriggerTransition = useStore(({ setTriggerTransition }) => setTriggerTransition)
  if (typeof href === 'string' && href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      onClick={e => {
        e.preventDefault()

        if (router.pathname !== href) {
          e.preventDefault()
          setTriggerTransition(href)
        } else {
          window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
        }
      }}
      href={href}
      scroll={false}
      {...rest}>
      {children}
    </NextLink>
  )
}
