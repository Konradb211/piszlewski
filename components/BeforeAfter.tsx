"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"

type Props = {
	beforeSrc: string
	afterSrc: string
	beforeAlt?: string
	afterAlt?: string
	initial?: number
	aspectRatio?: number
	heightPx?: number
	radiusClass?: string
	lineColor?: string
}

export default function BeforeAfter({
	beforeSrc,
	afterSrc,
	beforeAlt = "before",
	afterAlt = "after",
	initial = 50,
	aspectRatio = 1,
	heightPx,
	radiusClass = "rounded-2xl",
	lineColor = "#ffffff",
}: Props) {
	const [pos, setPos] = useState(Math.min(100, Math.max(0, initial)))
	const wrapRef = useRef<HTMLDivElement | null>(null)

	const clamp = (v: number) => Math.min(100, Math.max(0, v))

	const updateFromClientX = useCallback((clientX: number) => {
		const el = wrapRef.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		const pct = ((clientX - rect.left) / rect.width) * 100
		setPos(clamp(pct))
	}, [])

	const onPointerDown = (e: React.PointerEvent) => {
		;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
		updateFromClientX(e.clientX)
	}
	const onPointerMove = (e: React.PointerEvent) => {
		if (e.buttons !== 1) return
		updateFromClientX(e.clientX)
	}

	return (
		<div
			ref={wrapRef}
			className={`relative w-full select-none overflow-hidden ${radiusClass} shadow-lg`}
			style={
				heightPx ? { height: heightPx } : { aspectRatio: `${aspectRatio}` }
			}
			aria-label='Porównanie przed i po'>
			{/* BEFORE — pełny kadr, bez zmian skali przy przesuwaniu */}
			<Image
				src={beforeSrc}
				alt={beforeAlt}
				fill
				sizes='(max-width: 768px) 100vw, 800px'
				className='object-cover'
				style={{ objectPosition: "center center", pointerEvents: "none" }}
				priority
			/>

			{/* AFTER — też pełny kadr; przycinany clip-path zamiast zmiany szerokości */}
			<div
				className='absolute inset-0'
				style={{
					// odsłoń lewą część: ucinamy prawą krawędź o (100 - pos)%
					clipPath: `inset(0 ${100 - pos}% 0 0)`,
				}}>
				<Image
					src={afterSrc}
					alt={afterAlt}
					fill
					sizes='(max-width: 768px) 100vw, 800px'
					className='object-cover'
					style={{ objectPosition: "center center", pointerEvents: "none" }}
					priority
				/>
			</div>

			{/* linia podziału */}
			<div
				className='absolute top-0 bottom-0'
				style={{
					left: `calc(${pos}% - 1px)`,
					width: 2,
					background: lineColor,
					opacity: 0.9,
				}}
			/>

			{/* uchwyt */}
			<button
				type='button'
				aria-label='Suwak porównania'
				className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 focus:outline-none'
				style={{ left: `${pos}%` }}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onKeyDown={e => {
					if (e.key === "ArrowLeft") setPos(p => clamp(p - 2))
					if (e.key === "ArrowRight") setPos(p => clamp(p + 2))
					if (e.key === "Home") setPos(0)
					if (e.key === "End") setPos(100)
				}}>
				<span
					className='grid place-items-center'
					style={{
						width: 44,
						height: 44,
						borderRadius: "9999px",
						background:
							"radial-gradient(circle at center, rgba(255,255,255,.95) 0 40%, rgba(255,255,255,.7) 41% 100%)",
						boxShadow:
							"0 6px 18px rgba(0,0,0,.25), inset 0 0 0 2px rgba(0,0,0,.15)",
					}}>
					<span
						aria-hidden
						style={{
							width: 8,
							height: 8,
							borderRadius: "9999px",
							background: "#00000022",
						}}
					/>
				</span>
			</button>

			{/* accessibility */}
			<input
				aria-hidden='true'
				tabIndex={-1}
				type='range'
				min={0}
				max={100}
				value={pos}
				onChange={e => setPos(Number(e.target.value))}
				className='sr-only'
			/>
		</div>
	)
}
