"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface DialogUpdateProps{
    id: number;
}

const DialogUpdate = ({ id } : DialogUpdateProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter();

    const getPost = async () => {
        setIsOpen(true);
        const res = await fetch(`api/post/${id}`);
        const json = await res.json();
        setTitle(json.post.title);
        setContent(json.post.content);
    }

    const handleClick = async () => {
        const res = await fetch(`/api/post/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
            }),
        })
        setIsOpen(false);
        route.refresh();
    }
    return (
        <Dialog open={isOpen}>
            <DialogTrigger asChild>
                <Button variant="green" onClick={getPost}>Update</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Content</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="space-y-3">
                        <Label>Title</Label>
                        <Input
                            value={title}
                            className="font-bold text-sm"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="space-y-3">
                        <Label>Content</Label>
                        <Textarea
                            value={content}
                            className="font-bold text-sm"
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        {
                            isLoading ? <Button className="w-[200px]" disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait </Button> : <Button variant="blue" onClick={handleClick}>
                                <div className="w-[200px]">Update</div>
                            </Button>
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogUpdate;