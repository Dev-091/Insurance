"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userProfile, setUserProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA",
  })

  useEffect(() => {
    // Try to get the user's name from localStorage
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUserProfile((prev) => ({
        ...prev,
        firstName: storedName,
        // Generate a random last name based on first name
        lastName: generateLastName(storedName),
        // Generate a random email based on name
        email: `${storedName.toLowerCase()}${Math.floor(Math.random() * 1000)}@example.com`,
        // Generate a random phone number
        phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        // Generate a random address
        address: `${Math.floor(Math.random() * 999) + 1} ${getRandomStreetName()}, ${getRandomCity()}`,
      }))
    }
  }, [])

  // Helper function to generate a random last name
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
    // Use the first character of the first name to deterministically select a last name
    const index = firstName.charCodeAt(0) % lastNames.length
    return lastNames[index]
  }

  // Helper function to get a random street name
  const getRandomStreetName = (): string => {
    const streets = ["Main St", "Oak Ave", "Maple Rd", "Park Blvd", "Cedar Ln", "Pine St", "Elm Dr", "Washington Ave"]
    return streets[Math.floor(Math.random() * streets.length)]
  }

  // Helper function to get a random city
  const getRandomCity = (): string => {
    const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"]
    return cities[Math.floor(Math.random() * cities.length)]
  }

  const handleSaveChanges = () => {
    // Save the updated profile
    localStorage.setItem("userName", userProfile.firstName)
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUserProfile((prev) => ({
      ...prev,
      [id]: value,
    }))
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
                <Input id="phone" value={userProfile.phone} onChange={handleInputChange} readOnly={!isEditing} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={userProfile.address} onChange={handleInputChange} readOnly={!isEditing} />
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
