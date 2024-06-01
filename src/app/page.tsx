import { Button } from '@/components/ui/button';
import DialogCreate from './../components/props/post/dialog_create';
import DialogUpdate from './../components/props/post/dialog_update';
import Item from '@/components/props/post/item';

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
          <Item key={index} post={data}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
