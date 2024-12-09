'use client'

import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { DropdownMenuContent, DropdownMenu, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu'
import Link from 'next/link'
import { LogOut, Rss,  CircleUser, ListTodo } from 'lucide-react'

import { motion } from 'framer-motion'
import { UserAvatar } from './UserAvatar'




interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <UserAvatar
            user={{ name: user.name || null, image: user.image || null }}
            className="h-12 w-12 ring-2 ring-[#A259FF] hover:ring-[#1ABCFE] transition-all duration-300"
          />
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-white rounded-lg shadow-lg py-1 overflow-hidden" align="end">
        <Link href='/profile'>
          <motion.div
            className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
            whileHover={{ backgroundColor: 'rgba(162, 89, 255, 0.05)' }}
          >
            <UserAvatar
              user={{ name: user.name || null, image: user.image || null }}
              className="h-12 w-12 ring-2 ring-[#A259FF]"
            />
            <div className="flex flex-col">
              {user.name && <p className="font-semibold text-base text-gray-900">{user.name}</p>}
              {user.email && (
                <p className="text-sm text-gray-500 truncate">
                  {user.email}
                </p>
              )}
            </div>
          </motion.div>
        </Link>
        <DropdownMenuItem asChild>
          <Link href="/my-courses" className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 transition-colors duration-200">
          <CircleUser className="h-5 w-5 text-[#A259FF]"/>
            
            <span className="text-sm font-medium text-gray-700">My Courses</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/courses" className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 transition-colors duration-200">
            <Rss className="h-5 w-5 text-[#1ABCFE]" />
            <span className="text-sm font-medium text-gray-700">Courses List</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/results" className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 transition-colors duration-200">
          <ListTodo className="h-5 w-5 text-[#A259FF]" />
            
            <span className="text-sm font-medium text-gray-700">Results</span>
          </Link>
        </DropdownMenuItem>
      

        <DropdownMenuSeparator className="my-1 border-gray-100" />
        
        <DropdownMenuItem
          className="flex items-center gap-3 py-3 px-4 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/auth/signin`,
            })
          }}
        >
          <LogOut className="h-5 w-5 text-red-500" />
          <span className="text-sm font-medium text-red-500">Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}