
import type { SiteSocial } from '../services/api';

const CreatePostWidget = (props: { readonly site: SiteSocial }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { site } = props;

  // const [newPost, setNewPost] = useState<Post>(new Post());

  // const createPost = async () => api().social.postCreate(newPost);

  return (
    <div className='bg-white rounded-2 px-5 py-4 d-flex flex-column gap-2'>
      <div className='d-flex justify-content-between'>
        <h2>New Post</h2>
        <button className='btn btn-secondary' type='button'>
          Publish
        </button>
      </div>

      <div className='d-flex justify-content-start'>
        <span className='material-symbols-outlined fill-icon'>add_a_photo</span>
      </div>

      <textarea className='form-control' id='exampleFormControlTextarea1' placeholder='Post a New Message...' />
    </div>
  );
};

export default CreatePostWidget;
