'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
import { Loader2 } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineLoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-white/40 animate-spin" />
        <p className="text-white/30 text-sm">Loading 3D Model...</p>
      </div>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Preconnect to Spline CDN for faster loading
    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = 'https://prod.spline.design'
    preconnect.crossOrigin = 'anonymous'
    
    const dnsPrefetch = document.createElement('link')
    dnsPrefetch.rel = 'dns-prefetch'
    dnsPrefetch.href = 'https://prod.spline.design'

    // Prefetch the scene file
    const prefetch = document.createElement('link')
    prefetch.rel = 'prefetch'
    prefetch.href = scene
    prefetch.as = 'fetch'
    prefetch.crossOrigin = 'anonymous'

    document.head.appendChild(preconnect)
    document.head.appendChild(dnsPrefetch)
    document.head.appendChild(prefetch)

    return () => {
      if (document.head.contains(preconnect)) document.head.removeChild(preconnect)
      if (document.head.contains(dnsPrefetch)) document.head.removeChild(dnsPrefetch)
      if (document.head.contains(prefetch)) document.head.removeChild(prefetch)
    }
  }, [scene])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <Suspense fallback={<SplineLoadingFallback />}>
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </div>
  )
}