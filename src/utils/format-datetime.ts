import {format, formatDistanceToNow} from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDateTime(dateIso: string): string{
    const date = new Date(dateIso);

    return format(date,  "dd/MM/yyyy 'às' HH:MM", {locale: ptBR})
}

export function formatRelativeDate(dateIso: string): string{
    const date = new Date(dateIso);

    return formatDistanceToNow(date,  {locale: ptBR, addSuffix: true})
}

