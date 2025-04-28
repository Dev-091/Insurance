"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const searchParams = useSearchParams()
  const [isEditing, setIsEditing] = useState(false)
  const [userProfile, setUserProfile] = useState({
    firstName: "Guest",
    lastName: "User",
    email: "guest@example.com",
    phone: "+91 ",
    address: "",
  })

  useEffect(() => {
    const userName = searchParams.get("userName") || localStorage.getItem("userName") || "Guest"
    const userEmail = searchParams.get("userEmail") || localStorage.getItem("userEmail") || "guest@example.com"

    setUserProfile((prev) => ({
      ...prev,
      firstName: userName,
      lastName: generateLastName(userName),
      email: userEmail,
      phone: "+91 ",
      address: "",
    }))
  }, [searchParams])

  const generateLastName = (firstName: string): string => {
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
      "Wilson",
    ]
    const index = firstName.charCodeAt(0) % lastNames.length
    return lastNames[index]
  }

  const handleSaveChanges = () => {
    localStorage.setItem("userName", userProfile.firstName)
    localStorage.setItem("userEmail", userProfile.email)
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === "phone") {
      let formatted = value
      if (!formatted.startsWith("+91 ")) {
        formatted = "+91 " + formatted.replace(/^\+91\s?/, "")
      }
      setUserProfile((prev) => ({
        ...prev,
        [id]: formatted,
      }))
    } else {
      setUserProfile((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </div>
                <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={userProfile.firstName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={userProfile.lastName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userProfile.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={userProfile.phone}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={userProfile.address}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </CardContent>
            <CardFooter>
              {isEditing && (
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">Policy Renewal Reminders</div>
                  <div className="text-sm text-muted-foreground">Get notified before your policies expire</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">Claim Status Updates</div>
                  <div className="text-sm text-muted-foreground">Receive updates when your claim status changes</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">Payment Reminders</div>
                  <div className="text-sm text-muted-foreground">Get notified before payments are due</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">Marketing Communications</div>
                  <div className="text-sm text-muted-foreground">Receive special offers and updates</div>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}