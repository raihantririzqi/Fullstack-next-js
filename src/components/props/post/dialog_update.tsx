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

const DialogUpdate: React.FC<DialogUpdateProps> = ({ id }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter();

    const handleClick = async () => {
        console.log(id);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="green">Update</Button>
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