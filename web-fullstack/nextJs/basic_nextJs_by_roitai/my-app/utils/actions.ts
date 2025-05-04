'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createCamp = async (prevState: any , formData: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    // const title = formData.get('title')
    // const location = formData.get('location')

    const rewData = Object.fromEntries(formData)
    console.log(rewData)
    // revalidatePath('/camp')
    // redirect('/')
    return 'create camp successfully'
}

export const fetchCamp = async () => {
    //prisma.camp.findMany()
    const campn = [
        {id: 1, title: 'Burirum cafe 121', location: 'burirum'},
        {id: 2, title: 'สระน้ำวินัย', location: 'สระบุรี'},
        {id: 3, title: 'น้ำตกหนองคาย', location: 'หนองคาย'},
    ]
    return campn
}