"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { cookies } from "js-cookie";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const UsersView = () => {
    const [users, setUsers] = useState([]);
    const token = cookies.get("token");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://elmobdia.cowdly.com/api/accounts/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        if (token) {
            getUsers();
        } else {
            console.error("Token is not available.");
        }
    }, [token]);

    return (
        <div className="space-y-5">
            {users.map((user) => (
                <Card key={user.id}>
                    <CardContent>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default UsersView;
