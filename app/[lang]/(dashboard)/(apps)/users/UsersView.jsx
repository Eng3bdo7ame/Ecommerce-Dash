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

    // useEffect(() => {
    //     const getUsers = async () => {
    //         try {
    //             const response = await fetch("https://elmobdia.cowdly.com/api/accounts/users", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Authorization": `Bearer ${token}`,
    //                 },
    //             });

    //             const data = await response.json();

    //             setUsers(data);
    //         } catch (error) {
    //             console.error("Error fetching users:", error);
    //         }
    //     };

    //     if (token) {
    //         getUsers();
    //     } else {
    //         console.error("Token is not available.");
    //     }
    // }, [token]);

    return (
        <div className="space-y-5">
            <Blank className="max-w-[320px] mx-auto flex flex-col items-center justify-center h-full space-y-3">
                <div className=" text-default-900 text-xl font-semibold">
                    No Project Here
                </div>
                <div className=" text-sm  text-default-600 ">
                    There is no task create. If you create a new task then click this
                    button & create new board.
                </div>
                <div></div>
                <Button onClick={addProjectModal}>
                    <Plus className="w-4 h-4 text-primary-foreground mr-2" />
                    Add Project
                </Button>
            </Blank>
        </div>
    );
};

export default UsersView;
