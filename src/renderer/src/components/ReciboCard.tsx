import { forwardRef, useEffect } from 'react'

interface Props {
  aplicaColor: boolean
  setAplicaColor?: any
}

const ReciboCard = forwardRef<HTMLDivElement, Props>(({ aplicaColor }, ref) => {
  // Ajustar la altura del textarea basado en el contenido
  useEffect(() => {
    const textareas = document.querySelectorAll('textarea')
    textareas.forEach((textarea) => {
      const adjustHeight = () => {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
      }
      textarea.addEventListener('input', adjustHeight)
      adjustHeight() // Ajusta la altura al cargar
    })

    return () => {
      textareas.forEach((textarea) => {
        textarea.removeEventListener('input', () => {})
      })
    }
  }, [])

  return (
    <>
      <div ref={ref} className="container">
        <div className="center">
          <textarea rows={1} className="titulosFac">
            EDS PRMAX LAS FLORES
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            NIT: 79146612 - 2
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            JAVIER LEYVA GONZALEZ
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            Factura de Venta
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            CALLE 25 SUR # 86 - 50
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            4023713
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            Regimen Común
          </textarea>
          <br />
          <textarea rows={1} className="titulosFac">
            Act Económica 4731
          </textarea>
        </div>
        <hr />
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Fecha Factura: </span>
          <textarea rows={1} placeholder="04/02/2023"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Hora: </span>
          <textarea rows={1} placeholder="09:00 a.m"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Prefijo: </span>
          <textarea rows={1} placeholder="GNV"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Nro: </span>
          <textarea rows={1} placeholder="26590"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Placa: </span>
          <textarea rows={1}></textarea>
        </div>

        <div className="divider flex-row" style={{ width: '100%' }}>
          <div className="divider flex-row" style={{ width: '50%' }}>
            <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Turno: </span>
            <textarea rows={1} placeholder="1"></textarea>
          </div>
          <div className="divider flex-row" style={{ width: '50%' }}>
            <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Isla: </span>
            <textarea rows={1} placeholder="2"></textarea>
          </div>
        </div>

        <div className="divider flex-row" style={{ width: '100%' }}>
          <div className="divider flex-row" style={{ width: '50%' }}>
            <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Surtidor: </span>
            <textarea rows={1} placeholder="3"></textarea>
          </div>
          <div className="divider flex-row" style={{ width: '50%' }}>
            <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Cara: </span>
            <textarea rows={1} placeholder="5"></textarea>
          </div>
        </div>

        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Manguera: </span>
          <textarea rows={1}></textarea>
        </div>
        <hr />
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Artículo: </span>
          <textarea rows={1}></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>M3: </span>
          <textarea rows={1} placeholder="12,285"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>PVP ($): </span>
          <textarea rows={1} placeholder="2075"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Desc (0.00%) $: </span>
          <textarea rows={1} placeholder="0"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Subtotal ($): </span>
          <textarea rows={1} placeholder="0,00"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Impuesto Iva: </span>
          <textarea rows={1} placeholder="0,00"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Cliente: </span>
          <textarea rows={1} placeholder="VENTA DELTAL EDS"></textarea>
        </div>
        <hr />
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Atendio: </span>
          <textarea rows={1} placeholder="JAIRO TIQUE MONROY"></textarea>
        </div>
        <div className="divider flex-row">
          <textarea rows={1} style={{ textAlign: 'center' }}>
            Fecha Próximo Mant. Obligatorio 17/03/2023
          </textarea>
        </div>
        <div className="divider flex-row">
          <textarea rows={1} style={{ textAlign: 'center' }}>
            Autorización de numeración de Facturación POS
          </textarea>
        </div>
        <div className="divider flex-row">
          <textarea rows={1}>No. 18764040598178 VIG 6 MESES</textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>De: </span>
          <textarea rows={1} placeholder="01/12/2022 12:00:00 a.m."></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Vigencia: </span>
          <textarea rows={1} placeholder="6"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Desde: </span>
          <textarea rows={1} placeholder="1"></textarea>
        </div>
        <div className="divider flex-row">
          <span className={aplicaColor ? 'spanred' : 'spanwhite'}>Hasta: </span>
          <textarea rows={1} placeholder="200000"></textarea>
        </div>
        <div className="center">FIDELIDAD GARANTIZADA</div>
      </div>
    </>
  )
})

export default ReciboCard
