'use server'

import { logColor } from "@/utils/logColor"

export async function deletePostAction(id: string) {
    logColor("deleted post id: " + id)
    return id
    
}