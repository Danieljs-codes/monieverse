import NextImage from 'next/image'
import s from './Image.module.scss'
import { useState } from 'react'
import cn from '~/utils/cn'
import { CD_IMAGE } from '~/utils/env'

type imageType = {
	[x: string]: any
	className?: any
	style?: any
	priority?: boolean
	sizes?: string
	quality?: number
	loading?: 'eager' | 'lazy'
	width: number | string | any
	height: number | string | any
	alt: string
	src: string
	preload?: boolean
}

export function Image({
	className,
	width,
	height,
	priority = false,
	preload = false,
	style = {},
	sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
	loading = 'lazy',
	quality = 100,
	alt = '',
	src,
	...props
}: imageType) {
	const [loadingComplete, setLoadingComplete] = useState(false)
	const params = ['f_auto', 'c_limit', `w_${width}`, 'q_auto']

	return preload ? (
		<div
			{...props}
			className={cn(s.image, className)}
			draggable='false'
			// @ts-ignore
			style={{ '--width': width, '--height': height }}>
			{preload && !loadingComplete && (
				<div className={s['image-loading']}>
					<span></span>
				</div>
			)}

			<NextImage
				fill
				priority={priority}
				loading={loading}
				onLoadingComplete={() => setLoadingComplete(true)}
				draggable='false'
				quality={quality}
				alt={alt}
				src={`${CD_IMAGE}/${params.join(',')}/${src}`}
				sizes={sizes}
			/>
		</div>
	) : (
		<NextImage
			{...props}
			priority={priority}
			loading={loading}
			className={className}
			draggable='false'
			width={width}
			height={height}
			style={{ ...style, '--width': width, '--height': height }}
			quality={quality}
			alt={alt}
			src={`${CD_IMAGE}/${params.join(',')}/${src}`}
			sizes={sizes}
		/>
	)
}

// function cloudinaryLoader({ src, width, quality }) {
//   const params = ['f_auto', 'c_limit', `w_${width}`, `q_auto`]
//   return `${CD_IMAGE}/${params.join(',')}/${src}`
// }
