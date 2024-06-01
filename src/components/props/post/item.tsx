'use client'
import { useRouter } from "next/navigation";
import DialogUpdate from "./dialog_update";
import { Button } from "@/components/ui/button";

interface Props {
    post: any;
}

const Item = ({post} : Props) => {
    const route = useRouter();

    const handleClick = async (id : any) => {
        const res = await fetch(`api/post/${id}`, {
            method: "DELETE"
        });

        route.refresh();
    }
    return (
        <div className="p-8 border-4 w-full h-auto rounded-xl shadow-lg space-y-2">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <div>
                <p className="text-center">
                    {post.content}
                </p>
            </div>
            <div className="flex gap-3">
                <DialogUpdate id={post.id} />
                <Button variant={'red'} onClick={() => handleClick(post.id)}>Delete</Button>
            </div>
        </div>
    );
}

export default Item;