import React, {useRef} from "react";

type ContextMenuProps = {
    options: any,
    coordinates: any,
    contextMenu: any,
    setContextMenu: any
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options, coordinates, contextMenu, setContextMenu }) => {
    const contextMenuRef = useRef(null)

    const handleClick = (e,callback) => {}

    return (
      <>
        <div className={`bg-dropdown-background fixed py-2 z-[100] top-[${coordinates.y}] left-[${coordinates.x}] shadow-xl`} ref={contextMenuRef}>
            <ul>
                {
                    options.map(({ name, callback }) => (
                        <li key={name} onClick={(e) => handleClick(e,callback)}>
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
