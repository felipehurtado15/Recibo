import { useCallback, useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import ReciboCard from './components/ReciboCard'

import './assets/base.css'

interface ShortcutAction {
  key: string
  action: string
  callback: () => void
}

function App() {
  const componentRef = useRef(null)
  const [aplicaColor, setAplicaColor] = useState(true)
  const shortcuts: ShortcutAction[] = [
    {
      key: 'p',
      action: 'Imprimir',
      callback: () => {
        handlePrint()
      }
    }
  ]

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey) {
      const shortcut = shortcuts.find((s) => s.key === event.key.toLowerCase())
      if (shortcut) {
        event.preventDefault()
        shortcut.callback()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  const cambiarEstado = () => {
    setAplicaColor(false)
    setTimeout(() => {
      handlePrint()
    }, 1000)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setAplicaColor(false)
    },

    onAfterPrint: () => {
      setAplicaColor(true)
    }
  })

  return (
    <div>
      <ReciboCard aplicaColor={aplicaColor} ref={componentRef} />
      <button onClick={cambiarEstado}>Imprimir</button>
    </div>
  )
}

export default App
