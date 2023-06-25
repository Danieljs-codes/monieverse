/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'

import s from './Transition.module.scss'
import { useStore } from '~/utils/store'

export const PageTransition = () => {
	const router = useRouter()
	const [pageLoaded, setPageloaded] = useState(false)
	const [curtainInComplete, setCurtainInComplete] = useState(false)

	const timeline = useRef(gsap.timeline())
	const triggerTransition = useStore(({ triggerTransition }) => triggerTransition)
	const setTriggerTransition = useStore(
		({ setTriggerTransition }) => setTriggerTransition
	)

	useEffect(() => {
		router.beforePopState((event) => {
			setTriggerTransition(event.as)
			return false
		})

		return () => {
			router.beforePopState(() => {
				return true
			})
		}
	}, [])

	useEffect(() => {
		if (!curtainInComplete) return
		const changeRouteComplete = () => {
			setPageloaded(true)
		}

		router.events.on('routeChangeComplete', changeRouteComplete)

		return () => {
			router.events.off('routeChangeComplete', changeRouteComplete)
		}
	}, [curtainInComplete, router.events])

	useEffect(() => {
		if (!pageLoaded) return
		timeline.current.to("[data-animation='transition']", {
			y: '100%',
			duration: 1,
			ease: CustomEase.create('custom', 'M0,0 C0.86,-0.01 0.24,0.99 1,1 '),
			onComplete: () => {
				setTriggerTransition('')
				setCurtainInComplete(false)
				setPageloaded(false)
				window.scrollTo(0, 0)
			},
		})
	}, [pageLoaded])

	useEffect(() => {
		if (triggerTransition === '' || triggerTransition === router.pathname) return

		timeline.current.fromTo(
			"[data-animation='transition']",
			{
				y: '-100%',
			},
			{
				y: 0,
				ease: CustomEase.create('custom', 'M0,0 C0.86,-0.01 0.24,0.99 1,1 '),
				duration: 1,
				onComplete: () => {
					router.push(triggerTransition)
					setCurtainInComplete(true)
				},
			}
		)
	}, [triggerTransition])

	return <div className={s.transition} data-animation='transition'></div>
}
