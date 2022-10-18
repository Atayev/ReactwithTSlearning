import React, { FC,  useRef,  useState } from 'react'

const EventsExample:FC = () => {
    const [value, setValue] = useState<string>()
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }
    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
  return (
      <div>
          <input value={value} placeholder='state' onChange={changeHandler} type="text" name="" id="" />
          <input placeholder='ref' ref={inputRef} type="text" name="" id="" />
          <button onClick={clickHandler}>log</button>
          <div onDrag={dragHandler} draggable style={{width:200,height:200, background:'red'}}></div>
          <div
              onDrop={dropHandler}
              onDragLeave={leaveHandler}
              onDragOver = {dragWithPreventHandler}
              style={{ width: 200, height: 200, background:isDrag ?  'blue' : 'red', marginTop: 15 }}></div>
    </div>
  )
}

export default EventsExample