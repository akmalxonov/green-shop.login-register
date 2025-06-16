import { Skeleton } from 'antd';

const useLoader = () => {
  const categories_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input  key={idx} active style={{ width: '100%', marginBottom: '10px' }}  />
    ));
  };

  return { categories_loader };
};

export default useLoader;