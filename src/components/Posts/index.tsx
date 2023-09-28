import { useParams, useSearchParams, Outlet } from 'react-router-dom';

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Posts
        {`Para: ${id}`} {`QS: ${qs.get('primeiro')}`}
      </h1>
      <Outlet />
    </div>
  );
};
