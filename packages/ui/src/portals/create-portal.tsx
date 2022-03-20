import * as React from 'react'
import * as ReactDOM from 'react-dom'

export const createPortal = () => {
  const portalRef: React.RefObject<HTMLDivElement> = React.createRef()

  const Placeholder: React.FC = () => <div ref={portalRef} />

  const Content: React.FC = ({ children }): null | React.ReactPortal =>
    portalRef.current && ReactDOM.createPortal(children, portalRef.current)

  return { Placeholder, Content }
}
