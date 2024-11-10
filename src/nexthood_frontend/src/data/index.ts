import frame1 from "/assets/frame1.png"
import frame2 from "/assets/frame2.png"
import frame3 from "/assets/frame3.png"
import frame4 from "/assets/frame4.png"
import frame5 from "/assets/frame5.png"
import frame6 from "/assets/frame6.png"
import frame7 from "/assets/frame7.png"
import frame8 from "/assets/frame8.png"

export type FocusArea = {
    name: string 
    icon: string
}

export const focusAreas: FocusArea[] = [
    {
        name: "AI", 
        icon: frame1
    }, 
    {
        name: "Blockchain", 
        icon: frame2
    }, 
    {
        name: "Writing", 
        icon: frame3,
    }, 
    {
        name: "Design", 
        icon: frame4
    }, 
    {
        name: "Community Management", 
        icon: frame5
    }, 
    {
        name: "Marketing", 
        icon: frame6
    }, 
    {
        name: "Web Development", 
        icon: frame7
    }, 
    {
        name: "Business Development", 
        icon: frame8
    }
]