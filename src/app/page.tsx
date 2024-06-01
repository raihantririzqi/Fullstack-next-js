import { Button } from '@/components/ui/button';
import DialogCreate from './../components/props/post/dialog_create';
import DialogUpdate from './../components/props/post/dialog_update';

const getPosts = async () => {
  const res = await fetch(process.env.BASE_URL + '/post', {next: {revalidate: 0}});
  const json = await res.json();
  return json;
}

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="flex justify-center w-full">
      <div className="w-[1000px]  p-10 space-y-8">
        <DialogCreate/>
        {posts?.posts?.map((data : any, index: number) => (
          <div className="p-8 border-4 w-full h-auto rounded-xl shadow-lg space-y-2">
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <div>
              <p className="text-center">
                {data.content}
              </p>
            </div>
            <div className="flex gap-3">
              <DialogUpdate id={data.id}/>
              <Button variant={'red'}>Delete</Button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
