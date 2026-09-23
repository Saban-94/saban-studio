import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'default', ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'outline' | 'secondary' }) {
  return <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold', variant === 'default' ? 'border-transparent bg-slate-800 text-white' : variant === 'outline' ? 'border-slate-300 bg-white text-slate-700' : 'border-slate-200 bg-slate-100 text-slate-700', className)} {...props} />
}
