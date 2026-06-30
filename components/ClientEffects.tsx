'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    // Active nav link on scroll
    const navLinks = [
      ...document.querySelectorAll<HTMLAnchorElement>('.nav .links a'),
    ]
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id
            navLinks.forEach((a) =>
              a.classList.toggle('active', a.getAttribute('href') === id)
            )
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['benefits', 'how', 'pricing', 'faq', 'contact'].forEach((id) => {
      const section = document.getElementById(id)
      if (section) spy.observe(section)
    })

    // Button ripple
    function handleRipple(this: HTMLElement, e: MouseEvent) {
      const r = document.createElement('span')
      r.className = 'ripple'
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      r.style.width = r.style.height = size + 'px'
      r.style.left = e.clientX - rect.left - size / 2 + 'px'
      r.style.top = e.clientY - rect.top - size / 2 + 'px'
      this.appendChild(r)
      setTimeout(() => r.remove(), 600)
    }

    const btns = document.querySelectorAll<HTMLElement>('.btn, .submit-btn')
    btns.forEach((btn) =>
      btn.addEventListener('click', handleRipple as EventListener)
    )

    // Hero parallax on scroll
    const heroBg = document.getElementById('heroBg') as HTMLElement | null
    function handleParallax() {
      if (!heroBg) return
      const scrolled = window.scrollY
      if (scrolled < window.innerHeight) {
        heroBg.style.backgroundPositionY = `calc(center + ${scrolled * 0.18}px)`
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })

    // FAQ smooth expand / collapse via Web Animations API
    document.querySelectorAll<HTMLDetailsElement>('.faq details').forEach((details) => {
      const summary = details.querySelector('summary')
      const content = details.querySelector('p')
      if (!summary || !content) return
      let animation: Animation | null = null

      summary.addEventListener('click', (e) => {
        e.preventDefault()
        if (animation) { animation.cancel(); animation = null }

        if (details.open) {
          animation = content.animate(
            [{ maxHeight: content.scrollHeight + 'px' }, { maxHeight: '0px' }],
            { duration: 340, easing: 'ease', fill: 'both' }
          )
          animation.onfinish = () => {
            details.open = false
            animation = null
          }
        } else {
          details.open = true
          animation = content.animate(
            [{ maxHeight: '0px' }, { maxHeight: content.scrollHeight + 'px' }],
            { duration: 340, easing: 'ease', fill: 'both' }
          )
          animation.onfinish = () => { animation = null }
        }
      })
    })

    return () => {
      io.disconnect()
      spy.disconnect()
      btns.forEach((btn) =>
        btn.removeEventListener('click', handleRipple as EventListener)
      )
      window.removeEventListener('scroll', handleParallax)
    }
  }, [])

  return null
}
