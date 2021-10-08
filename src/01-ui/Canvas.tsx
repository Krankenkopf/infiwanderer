import React, {FC, useEffect, useRef} from 'react'
import image from "../05-assets/3x3.png"
type TCanvasProps = {
    
}
export const Canvas: FC<TCanvasProps> = ({...props}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current
            const context = canvas.getContext('2d')!
            //Our first draw
            const img = {
                src: new Image(),
                width: 3,
                height: 3
            }
            img.src.src = image
            const maxX = context.canvas.width
            const maxY = context.canvas.height
            context.fillStyle = '#000000'
            context.fillRect(0, 0, maxX, maxY)
            context.fillStyle = '#aa00aa'
            context.fillRect(maxX/2 - 20, maxY/2 - 20, 40, 40)
            for (let i = 0; i < maxX; i += 3) {
                for (let j = 0; j < maxY; j +=3) {
                    context.drawImage(img.src, i, j)
                }
            }

            let pixels = context.getImageData(0, 0, 3, 3)
            console.log(pixels)
        }
    }, [])

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} {...props}/>
}