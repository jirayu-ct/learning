'use client'

import Link from "next/link"
import {
    LayoutDashboard,
    BookOpen,
    ShoppingCart,
    UserCog,
    User,
    LogOut
} from 'lucide-react'

import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Config } from "@/app/config"
import axios from "axios"
import { useRouter } from "next/navigation"

const SideBar = () => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const router = useRouter()

    useEffect(() => {
        try {
            fetchData()
        }
        catch (error: any) {
            console.log(error)
            Swal.fire({
                title: 'Error',
                text: 'คุณต้องเข้าสู่ระบบก่อน',
                icon: 'error'
            })
            router.push('/backoffice/register')
        }
    }, [])

    const fetchData = async () => {
        
        try {
            const url = Config.apiUrl + '/api/admin/info';
            const token = localStorage.getItem(Config.tokenName);
            const headers = {
                'Authorization': 'Bearer ' + token
            }
            const res = await axios.get(url, { headers });
            if (res.data.name !== undefined) {
                setName(res.data.name);
                setLevel(res.data.level);
            }
        } catch (err: any) {

            console.log(err)
            Swal.fire({
                title: 'error',
                text: 'คุณต้องเข้าสู่ระบบก่อน',
                icon: 'error'
            })
            router.push('/backoffice/register')
        }
    }

    const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        
        e.preventDefault();
        const button = await Swal.fire({
            title: 'ยืนยันการออกจากระบบ',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก',
            showCancelButton: true,
        })


        if (button.isConfirmed) {
            localStorage.removeItem(Config.tokenName)
            router.push('/backoffice/register')
        }
    }

    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h1>Back Office</h1>
                <p className="text-lg font-medium">{name}</p>
                <p className="text-sm text-gray-400">{level}</p>
                
                <div className="profile-actions">
                    <Link href="/backoffice/home/edit-profile">
                        <User size={18} />
                        <span>Edit Profile</span>
                    </Link>
                    <Link 
                        href="/backoffice/register"
                        onClick={(e) => handleLogout(e)}
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
            
            <div className="side-bar-menu">
                <Link href="/backoffice/home/dashboard">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link href="/backoffice/home/book">
                    <BookOpen size={20} />
                    <span>หนังสือ</span>
                </Link>
                <Link href="/backoffice/home/order">
                    <ShoppingCart size={20} />
                    <span>คำสั่งซื้อ</span>
                </Link>
                <Link href="/backoffice/home/admin">
                    <UserCog size={20} />
                    <span>ผู้ดูแลระบบ</span>
                </Link>
            </div>
        </div>
    )
}

export default SideBar