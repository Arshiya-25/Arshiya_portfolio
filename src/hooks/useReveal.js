import { useInView } from 'react-intersection-observer'

export function useReveal(threshold = 0.12, triggerOnce = true) {
  const { ref, inView } = useInView({ threshold, triggerOnce })
  return { ref, inView }
}
