
export let tabs: {
    title: string, 
    actions: string[]
}[] = [
        {
            title: 'Size',
            actions: [
                'Resize',
                'Crop',
                'Round'
            ]
        },
        {
            title: 'Exposure',
            actions: [
                'Brightness',
                'Contrast',
                'Saturation'
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