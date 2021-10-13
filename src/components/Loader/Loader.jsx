import Loader from 'react-loader-spinner';

export const LoaderMore = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <Loader
        type="Circles"
        color="green"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
