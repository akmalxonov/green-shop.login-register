import { Skeleton } from 'antd';

const useLoader = () => {
  const categories_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input  key={idx} active style={{ width: '100%', marginBottom: '10px' }}  />
    ));
  };

  const products_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image   active   />
        <Skeleton.Input  active  />
      </div>
    ));
  };

  return { categories_loader,products_loader };
};

export default useLoader;