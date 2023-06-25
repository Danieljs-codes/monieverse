import { useEffect, useRef } from 'react'
import { useWindowSize } from '@studio-lumio/hooks'
import { useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function Parallax({
  className,
  children,
  speed = 1,
  id = 'parallax',
  scale = 1.1,
  position,
  ...prop
}: {
  [x: string]: any
  className?: any
  scale?: number
  children: any
  speed?: number | undefined
  id?: string | undefined
  position?: 'top'
}) {
  const lenis = useLenis(() => {})

  const trigger = useRef<any>()
  const target = useRef<any>()
  const timeline = useRef<any>()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const y = windowWidth * speed * 0.125
    const mm = gsap.matchMedia()

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          id: id,
          trigger: position === 'top' ? document.body : trigger.current,
          scrub: true,
          start: position === 'top' ? 'top top' : 'top bottom',
          end: position === 'top' ? '+=100%' : 'bottom top',
        },
      })
      .fromTo(
        target.current,
        { y: position === 'top' ? 0 : -y, scale },
        { y: y, ease: 'none', scale: 1 }
      )

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      context => {
        const { reduceMotion } = context.conditions

        if (reduceMotion) {
          timeline?.current?.from(target.current, { y: 0 })
          timeline?.current?.kill()
        }
      }
    )

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, position, windowWidth, lenis, scale])

  return (
    <div {...prop} ref={trigger} className={className} style={{ overflow: 'hidden' }}>
      <div ref={target} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  )
}
