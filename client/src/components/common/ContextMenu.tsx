import React, { MouseEventHandler, useEffect, useRef} from "react";

type ContextMenuProps = {
    options: any,
    coordinates: any,
    contextMenu: any,
    setContextMenu: any
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options, coordinates, contextMenu, setContextMenu }) => {
    const contextMenuRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(event.target.id !== "context-opener") {
                if (contextMenuRef.current && contextMenuRef.current.contains(event.target)) {
                    setContextMenu(false)
                }
            }
        }
        document.addEventListener('click',handleOutsideClick)
        return () => {
            document.removeEventListener('click',handleOutsideClick)
        }
    },[])

    const handleClick = (e,callback) => {
        e.stopPropagation()
        setContextMenu(false)
        callback()
    }

    return (
      <>
        <div className={`bg-dropdown-background fixed py-2 z-[100] shadow-xl`} ref={contextMenuRef} style={{ top: coordinates.y, left: coordinates.x }}>
            <ul>
                {
                    options.map(({ name, callback }) => (
                        <li key={name} className={`px-5 py-2 cursor-pointer hover:bg-dropdown-background`} onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => handleClick(e,callback)}>
                            <span className={`text-white`}>{name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
      </>
    )
}

export default ContextMenu;
