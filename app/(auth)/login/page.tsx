import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex min-h-screen w-full items-center justify-center p-4">
      <div className="flex w-full max-w-md flex-col gap-6 items-center">
        <div className="mb-4 flex items-center gap-2 self-center">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-5" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Smart School</h1>
        </div>
        <LoginForm className="w-full" />
      </div>
    </div>
  )
}
