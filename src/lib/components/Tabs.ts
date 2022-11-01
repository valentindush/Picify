
export let tabs: {
    title: string, 
    actions: string[]
}[] = [
        {
            title: 'Size',
            actions: [
                'Resize',
                'Crop',
                'Round',
                'Flip',
                'Rotate'
            ]
        },
        {
            title: 'Exposure',
            actions: [
                'Brightness',
                'Contrast',
                'Saturation',
                'Sharpen',
            ]
        },
        {
            title: 'Effects',
            actions:[
                'Blur',
                'Glow'
            ]
        }
    ]