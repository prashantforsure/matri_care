import { User } from '@prisma/client'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarProps } from '@radix-ui/react-avatar'
import { CircleUserRound } from 'lucide-react'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <img
            src={user.image}
            alt={user.name || "User avatar"}
            className="rounded-full object-cover"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <CircleUserRound className="h-full w-full text-[#8E8E8E]" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}