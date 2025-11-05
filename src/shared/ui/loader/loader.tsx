import style from './loader.module.scss'

type Props = {
  size?: number
  color?: string
  speed?: number
  stroke?: number
  bgOpacity?: number
}

export const Loader = ({ size = 40, color = 'black', speed = 2, stroke = 5, bgOpacity = 0 }: Props) => {
  const sizeInt = parseInt(size + '')
  const strokeInt = parseInt(stroke + '')
  const centerPoint = sizeInt / 2
  const radius = Math.max(0, sizeInt / 2 - strokeInt / 2)

  return (
    <div className={style.container} style={{ width: `${size}px`, height: `${size}px` }}>
      <svg
        className={style.inner}
        viewBox={`0 0 ${size} ${size}`}
        height={size}
        width={size}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          animation: `${style.rotate} ${speed}s linear infinite`,
        }}
      >
        <circle
          className={style.track}
          cx={centerPoint}
          cy={centerPoint}
          r={radius}
          pathLength={'100'}
          strokeWidth={`${stroke}px`}
          fill={'none'}
          style={{ stroke: color, opacity: bgOpacity }}
        />
        <circle
          className={style.car}
          cx={centerPoint}
          cy={centerPoint}
          r={radius}
          pathLength={'100'}
          strokeWidth={`${stroke}px`}
          fill={'none'}
          style={{
            stroke: color,
            animation: `${style.stretch} ${speed * 0.75}s ease-in-out infinite`,
          }}
        />
      </svg>
    </div>
  )
}

export default Loader
