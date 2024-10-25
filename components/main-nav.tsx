"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/sls/sales"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/sls/sales-manager"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sales Manager
      </Link>
      <Link
        href="/sls/sales-supervisor"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sales Supervisor
      </Link>
      {/* <Link
        href="/sls/scoring"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Scoring System
      </Link> */}
    </nav>
  )
}