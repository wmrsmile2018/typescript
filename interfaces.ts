interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 'hello1',
    size: {
        width: 20,
        height: 20
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: 'hello2',
    size: {
        width: 20,
        height: 20
    },
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ======================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        height: 20,
        width: 20
    },
    getArea(): number {
        return this.size.height * this.size.width
    }
}

// ======================================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ======================================

interface Styles {
    [key: string]: string
}

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}