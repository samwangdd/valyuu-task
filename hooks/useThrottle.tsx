import { useCallback, useEffect, useRef } from "react"

export interface ThrottleRefType {
  fn: Function,
  timer?: NodeJS.Timeout
}

export type ThrottlePropsType = [Function, number, Array<any>]

/**
 * useThrottle 节流 hook
 *
 * @param {...ThrottlePropsType} [fn, throttle, deps]
 * @return {*} 
 */
const useThrottle = (...[fn, throttle, deps]: ThrottlePropsType) => {
  const { current } = useRef<ThrottleRefType>({ fn })

  useEffect(() => {
    current.fn = fn
  }, [fn, current])

  return useCallback(
    function (this: any, ...args: any[]) {
      if (!current.timer) {
        current.timer = setTimeout(() => {
          current.fn.apply(this, args)
          delete current.timer
        }, throttle)
      }
    },
    // eslint-disable-next-line
    [...deps, current, throttle]
  )
}

export default useThrottle
