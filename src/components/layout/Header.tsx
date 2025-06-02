'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"

export function Header() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);

    try {
      // Here you would typically make an API call to authenticate
      // For now, we'll just simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/auth/login');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <header className="h-[60px] bg-white border-b border-gray-200">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 ml-auto">
          <Button onClick={handleSignOut} disabled={isLoading} variant="ghost" className="cursor-pointer">
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : "Sign Out"}
          </Button>
        </div>
      </div>
    </header>
  );
}