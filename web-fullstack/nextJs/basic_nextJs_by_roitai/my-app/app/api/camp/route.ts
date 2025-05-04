import { fetchCamp } from "@/utils/actions"
import { NextRequest, NextResponse } from "next/server"
// http://localhost:3000/api/camp?search=burirum



export const GET = async(req: NextRequest) => {
    const { searchParams} = new URL(req.url)
    const search = searchParams.get('search')
    console.log(search)



    const camps = await fetchCamp()

    return NextResponse.redirect(new URL('/', req.url))


    return Response.json(
        {
            message: 'Hello api camp',
            camps
        }
    )
}