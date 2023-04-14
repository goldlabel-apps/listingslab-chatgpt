export type PWAShape = {
    title: string
    description: string
    started: boolean
    loading: boolean
    theme: ThemeShape
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

