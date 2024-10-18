import dayjs from 'dayjs'

export function formatTime(value: string, format: string = 'YYYY-MM-DD hh:mm:ss') {
    return dayjs(value).format(format)
}