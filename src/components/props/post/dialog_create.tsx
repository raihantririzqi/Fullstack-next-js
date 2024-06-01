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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const DialogCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter();

    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
            }),
        })
            .then((res) => {
                setTitle('');
                setContent('');
            })
            .catch((e) => { 
                console.log(e);
            });

        setIsLoading(false);

        route.refresh();
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="blue">Create</Button>
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
                            <div className="w-[200px]">Create</div>
                        </Button>
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogCreate;
