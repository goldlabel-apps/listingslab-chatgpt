export type PWAShape = {
    title: string
    description: string
    started: boolean
    loading: boolean
    theme: ThemeShape
}

export type FontShape = {
    variant?: string
    fontSize?: string | number
    color?: string
    children?: any
    align?: string
    width?: string | number
}

export interface ThemeShape {
    mode: string
    primary: string
    secondary: string
}

export interface KeyValueShape {
    key: string
    value: any
}

