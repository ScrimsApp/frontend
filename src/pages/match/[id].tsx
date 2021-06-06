import { useRouter } from 'next/router';

const Match = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Ola {id}</h1>
    </div>
  );
};

export default Match;
